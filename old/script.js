import { PanoViewer } from "@egjs/view360";
import Swal from "sweetalert2";

new window.WebXRPolyfill({
    allowCardboardOnDesktop: true,
    cardboardConfig: {
        // CARDBOARD_UI_DISABLED: true
    }
});

const iOSVersion = (() => {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
})();

const panoEl = document.querySelector("#pano");
const panoViewer = new PanoViewer(panoEl, {
    image: "https://naver.github.io/egjs-view360/examples/panoviewer/projection-type/img/stereoequi.png",
    projectionType: "stereoequi",
    stereoFormat: PanoViewer.STEREO_FORMAT.TOP_BOTTOM
}).on("error", e => {
    Swal.fire("ERROR!", e.message, "error");
});

const enterVRButton = document.querySelector("#enter-vr");
enterVRButton.addEventListener("click", () => {
    panoViewer.enterVR().catch(e => {
        Swal.fire({
            title: "Can't enter VR mode!",
            text: e.message || e,
            icon: "error"
        });
    });
});

// For iOS 13+
panoViewer.enableSensor().catch(() => {
    Swal.fire({
        title: "Permission needed! (iOS13+)",
        icon: "question",
        text: "Please give me a permission to access Device motion & Orientation :3",
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: "Allow",
        cancelButtonText: "Deny"
    }).then(result => {
        if (result.value) {
            // Granted
            panoViewer
                .enableSensor()
                .then(() => {
                    Swal.fire("Thank you!", "", "success");
                })
                .catch(() => {
                    Swal.fire(
                        "You've denied a permission!",
                        "You have to completely close out your browser and reconnect this page to enable sensor again!",
                        "error"
                    );
                });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // User dismissed
            Swal.fire("AWW :(", "", "error");
        }
    });
});

// For iOS 12.2 ~ 13
if (iOSVersion && iOSVersion[0] === 12 && iOSVersion[1] >= 2) {
    PanoViewer.isGyroSensorAvailable(available => {
        if (!available) {
            Swal.fire({
                title: "Please enable the Motion Sensor! (iOS12.2~13)",
                icon: "warning",
                text: "This website requires a permission for your device sensor.",
                html: `
        <div style="text-align: left;">
          <div>
            1. Open <img src="https://developer.apple.com/design/human-interface-guidelines/ios/images/icons/app_icons/Settings_2x.png" width="20" /> <b>Settings</b>
          </div>
          <div>
            2. Select <img src="https://km.support.apple.com/resources/sites/APPLE/content/live/IMAGES/0/IM26/en_US/safari-240.png" width="20" /> <b>Safari</b>
          </div>
          <div>
            3. Enable <b>Motion & Orientation Access</b>
          </div>
          <div>4. Reload the page</div>
        </div>
        `
            });
        }
    });
}