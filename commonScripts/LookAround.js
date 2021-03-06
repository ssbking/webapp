/*
Copyright (c) 2017 NAVER Corp.
@egjs/view360 project is licensed under the MIT license
@egjs/view360 JavaScript library
https://github.com/naver/egjs-view360
@version 3.3.2
All-in-one packaged file for ease use of '@egjs/view360' with below dependencies.
- @egjs/agent ^2.1.5, @egjs/axes ^2.5.8, @egjs/component ^2.1.2, es6-promise ^4.2.5, gl-matrix ^3.1.0, motion-sensors-polyfill ^0.3.1, webvr-polyfill ^0.9.41
*/
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t.eg = t.eg || {}, t.eg.view360 = {})) }(this, function(t) { "use strict";

    function n(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

    function i(t, e, i) { return e && n(t.prototype, e), i && n(t, i), t }

    function u() { return (u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var i = arguments[e]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]) } return t }).apply(this, arguments) }

    function r(t, e) { t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e }

    function h(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } var nt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function rt() { throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs") } var e, o = (function(t, e) { t.exports = function() {
            function n(t) { var e = typeof t; return t !== null && (e === "object" || e === "function") }

            function h(t) { return typeof t === "function" } var t = void 0; if (Array.isArray) { t = Array.isArray } else { t = function(t) { return Object.prototype.toString.call(t) === "[object Array]" } } var i = t,
                r = 0,
                e = void 0,
                o = void 0,
                s = function t(e, i) { x[r] = e;
                    x[r + 1] = i;
                    r += 2; if (r === 2) { if (o) { o(w) } else { T() } } };

            function a(t) { o = t }

            function u(t) { s = t } var c = typeof window !== "undefined" ? window : undefined,
                l = c || {},
                f = l.MutationObserver || l.WebKitMutationObserver,
                d = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]",
                p = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";

            function v() { return function() { return process.nextTick(w) } }

            function m() { if (typeof e !== "undefined") { return function() { e(w) } } return y() }

            function g() { var t = 0; var e = new f(w); var i = document.createTextNode("");
                e.observe(i, { characterData: true }); return function() { i.data = t = ++t % 2 } }

            function _() { var t = new MessageChannel;
                t.port1.onmessage = w; return function() { return t.port2.postMessage(0) } }

            function y() { var t = setTimeout; return function() { return t(w, 1) } } var x = new Array(1e3);

            function w() { for (var t = 0; t < r; t += 2) { var e = x[t]; var i = x[t + 1];
                    e(i);
                    x[t] = undefined;
                    x[t + 1] = undefined }
                r = 0 }

            function E() { try { var t = Function("return this")().require("vertx");
                    e = t.runOnLoop || t.runOnContext; return m() } catch (t) { return y() } } var T = void 0; if (d) { T = v() } else if (f) { T = g() } else if (p) { T = _() } else if (c === undefined && typeof rt === "function") { T = E() } else { T = y() }

            function b(t, e) { var i = this; var n = new this.constructor(A); if (n[P] === undefined) { H(n) } var r = i._state; if (r) { var o = arguments[r - 1];
                    s(function() { return X(r, n, o, i._result) }) } else { W(i, n, t, e) } return n }

            function R(t) { var e = this; if (t && typeof t === "object" && t.constructor === e) { return t } var i = new e(A);
                N(i, t); return i } var P = Math.random().toString(36).substring(2);

            function A() {} var S = void 0,
                O = 1,
                C = 2;

            function I() { return new TypeError("You cannot resolve a promise with itself") }

            function M() { return new TypeError("A promises callback cannot return that same promise.") }

            function D(t, e, i, n) { try { t.call(e, i, n) } catch (t) { return t } }

            function L(t, n, r) { s(function(e) { var i = false; var t = D(r, n, function(t) { if (i) { return }
                        i = true; if (n !== t) { N(e, t) } else { z(e, t) } }, function(t) { if (i) { return }
                        i = true;
                        Q(e, t) }, "Settle: " + (e._label || " unknown promise")); if (!i && t) { i = true;
                        Q(e, t) } }, t) }

            function F(e, t) { if (t._state === O) { z(e, t._result) } else if (t._state === C) { Q(e, t._result) } else { W(t, undefined, function(t) { return N(e, t) }, function(t) { return Q(e, t) }) } }

            function V(t, e, i) { if (e.constructor === t.constructor && i === b && e.constructor.resolve === R) { F(t, e) } else { if (i === undefined) { z(t, e) } else if (h(i)) { L(t, e, i) } else { z(t, e) } } }

            function N(e, t) { if (e === t) { Q(e, I()) } else if (n(t)) { var i = void 0; try { i = t.then } catch (t) { Q(e, t); return }
                    V(e, t, i) } else { z(e, t) } }

            function U(t) { if (t._onerror) { t._onerror(t._result) }
                k(t) }

            function z(t, e) { if (t._state !== S) { return }
                t._result = e;
                t._state = O; if (t._subscribers.length !== 0) { s(k, t) } }

            function Q(t, e) { if (t._state !== S) { return }
                t._state = C;
                t._result = e;
                s(U, t) }

            function W(t, e, i, n) { var r = t._subscribers; var o = r.length;
                t._onerror = null;
                r[o] = e;
                r[o + O] = i;
                r[o + C] = n; if (o === 0 && t._state) { s(k, t) } }

            function k(t) { var e = t._subscribers; var i = t._state; if (e.length === 0) { return } var n = void 0,
                    r = void 0,
                    o = t._result; for (var s = 0; s < e.length; s += 3) { n = e[s];
                    r = e[s + i]; if (n) { X(i, n, r, o) } else { r(o) } }
                t._subscribers.length = 0 }

            function X(t, e, i, n) { var r = h(i),
                    o = void 0,
                    s = void 0,
                    a = true; if (r) { try { o = i(n) } catch (t) { a = false;
                        s = t } if (e === o) { Q(e, M()); return } } else { o = n } if (e._state !== S);
                else if (r && a) { N(e, o) } else if (a === false) { Q(e, s) } else if (t === O) { z(e, o) } else if (t === C) { Q(e, o) } }

            function B(i, t) { try { t(function t(e) { N(i, e) }, function t(e) { Q(i, e) }) } catch (t) { Q(i, t) } } var Y = 0;

            function G() { return Y++ }

            function H(t) { t[P] = Y++;
                t._state = undefined;
                t._result = undefined;
                t._subscribers = [] }

            function j() { return new Error("Array Methods must be provided an Array") } var q = function() {
                function t(t, e) { this._instanceConstructor = t;
                    this.promise = new t(A); if (!this.promise[P]) { H(this.promise) } if (i(e)) { this.length = e.length;
                        this._remaining = e.length;
                        this._result = new Array(this.length); if (this.length === 0) { z(this.promise, this._result) } else { this.length = this.length || 0;
                            this._enumerate(e); if (this._remaining === 0) { z(this.promise, this._result) } } } else { Q(this.promise, j()) } }
                t.prototype._enumerate = function t(e) { for (var i = 0; this._state === S && i < e.length; i++) { this._eachEntry(e[i], i) } };
                t.prototype._eachEntry = function t(e, i) { var n = this._instanceConstructor; var r = n.resolve; if (r === R) { var o = void 0; var s = void 0; var a = false; try { o = e.then } catch (t) { a = true;
                            s = t } if (o === b && e._state !== S) { this._settledAt(e._state, i, e._result) } else if (typeof o !== "function") { this._remaining--;
                            this._result[i] = e } else if (n === et) { var h = new n(A); if (a) { Q(h, s) } else { V(h, e, o) }
                            this._willSettleAt(h, i) } else { this._willSettleAt(new n(function(t) { return t(e) }), i) } } else { this._willSettleAt(r(e), i) } };
                t.prototype._settledAt = function t(e, i, n) { var r = this.promise; if (r._state === S) { this._remaining--; if (e === C) { Q(r, n) } else { this._result[i] = n } } if (this._remaining === 0) { z(r, this._result) } };
                t.prototype._willSettleAt = function t(e, i) { var n = this;
                    W(e, undefined, function(t) { return n._settledAt(O, i, t) }, function(t) { return n._settledAt(C, i, t) }) }; return t }();

            function K(t) { return new q(this, t).promise }

            function Z(r) { var o = this; if (i(r)) return new o(function(t, e) { for (var i = r.length, n = 0; n < i; n++) o.resolve(r[n]).then(t, e) });
                else return new o(function(t, e) { return e(new TypeError("You must pass an array to race.")) }) }

            function J(t) { var e = new this(A); return Q(e, t), e }

            function $() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

            function tt() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") } var et = function() {
                function e(t) { this[P] = G();
                    this._result = this._state = undefined;
                    this._subscribers = []; if (A !== t) { typeof t !== "function" && $();
                        this instanceof e ? B(this, t) : tt() } }
                e.prototype.catch = function t(e) { return this.then(null, e) };
                e.prototype.finally = function t(e) { var i = this; var n = i.constructor; if (h(e)) { return i.then(function(t) { return n.resolve(e()).then(function() { return t }) }, function(t) { return n.resolve(e()).then(function() { throw t }) }) } return i.then(e, e) }; return e }();

            function it() { var t = void 0; if (void 0 !== nt) t = nt;
                else if ("undefined" != typeof self) t = self;
                else try { t = Function("return this")() } catch (t) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                var e = t.Promise; if (e) { var i = null; try { i = Object.prototype.toString.call(e.resolve()) } catch (t) {} if ("[object Promise]" === i && !e.cast) return }
                t.Promise = et } return et.prototype.then = b, et.all = function(t) { return new q(this, t).promise }, et.race = function(r) { var o = this; return i(r) ? new o(function(t, e) { for (var i = r.length, n = 0; n < i; n++) o.resolve(r[n]).then(t, e) }) : new o(function(t, e) { return e(new TypeError("You must pass an array to race.")) }) }, et.resolve = R, et.reject = function(t) { var e = new this(A); return Q(e, t), e }, et._setScheduler = function(t) { o = t }, et._setAsap = function(t) { s = t }, et._asap = s, et.polyfill = function() { var t = void 0; if (void 0 !== nt) t = nt;
                else if ("undefined" != typeof self) t = self;
                else try { t = Function("return this")() } catch (t) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                var e = t.Promise; if (e) { var i = null; try { i = Object.prototype.toString.call(e.resolve()) } catch (t) {} if ("[object Promise]" === i && !e.cast) return }
                t.Promise = et }, et.Promise = et }() }(e = { exports: {} }, e.exports), e.exports);

    function a(t) { return void 0 === t } var s = function() { var t = function() {
                function t() { this._eventHandler = {}, this.options = {} } var e = t.prototype; return e.trigger = function(t, e) { void 0 === e && (e = {}); var i = this._eventHandler[t] || []; if (!(0 < i.length)) return !0;
                    i = i.concat(), e.eventType = t; var n = !1,
                        r = [e],
                        o = 0;
                    e.stop = function() { n = !0 }, e.currentTarget = this; for (var s = arguments.length, a = new Array(2 < s ? s - 2 : 0), h = 2; h < s; h++) a[h - 2] = arguments[h]; for (1 <= a.length && (r = r.concat(a)), o = 0; i[o]; o++) i[o].apply(this, r); return !n }, e.once = function(r, o) { if ("object" == typeof r && a(o)) { var t, e = r; for (t in e) this.once(t, e[t]); return this } if ("string" == typeof r && "function" == typeof o) { var s = this;
                        this.on(r, function t() { for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                            o.apply(s, i), s.off(r, t) }) } return this }, e.hasOn = function(t) { return !!this._eventHandler[t] }, e.on = function(t, e) { if ("object" == typeof t && a(e)) { var i, n = t; for (i in n) this.on(i, n[i]); return this } if ("string" == typeof t && "function" == typeof e) { var r = this._eventHandler[t];
                        a(r) && (this._eventHandler[t] = [], r = this._eventHandler[t]), r.push(e) } return this }, e.off = function(t, e) { if (a(t)) return this._eventHandler = {}, this; if (a(e)) { if ("string" == typeof t) return this._eventHandler[t] = void 0, this; var i, n = t; for (i in n) this.off(i, n[i]); return this } var r, o, s = this._eventHandler[t]; if (s)
                        for (r = 0; void 0 !== (o = s[r]); r++)
                            if (o === e) { s = s.splice(r, 1); break }
                    return this }, t }(); return t.VERSION = "2.1.2", t }(),
        g = 1e-6,
        c = "undefined" != typeof Float32Array ? Float32Array : Array,
        l = Math.PI / 180;

    function x(t) { return t * l }

    function p() { var t = new c(9); return c != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t }

    function v(t, e) { return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t }

    function m(t, e) { var i = e[0],
            n = e[1],
            r = e[2],
            o = e[3],
            s = e[4],
            a = e[5],
            h = e[6],
            u = e[7],
            c = e[8],
            l = c * s - a * u,
            f = -c * o + a * h,
            d = u * o - s * h,
            p = i * l + n * f + r * d; return p ? (p = 1 / p, t[0] = l * p, t[1] = (-c * n + r * u) * p, t[2] = (a * n - r * s) * p, t[3] = f * p, t[4] = (c * i - r * h) * p, t[5] = (-a * i + r * o) * p, t[6] = d * p, t[7] = (-u * i + n * h) * p, t[8] = (s * i - n * o) * p, t) : null }

    function w() { var t = new c(16); return c != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t }

    function f(t, e, i) { var n = Math.sin(i),
            r = Math.cos(i),
            o = e[4],
            s = e[5],
            a = e[6],
            h = e[7],
            u = e[8],
            c = e[9],
            l = e[10],
            f = e[11]; return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * r + u * n, t[5] = s * r + c * n, t[6] = a * r + l * n, t[7] = h * r + f * n, t[8] = u * r - o * n, t[9] = c * r - s * n, t[10] = l * r - a * n, t[11] = f * r - h * n, t }

    function d(t, e, i) { var n = Math.sin(i),
            r = Math.cos(i),
            o = e[0],
            s = e[1],
            a = e[2],
            h = e[3],
            u = e[8],
            c = e[9],
            l = e[10],
            f = e[11]; return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * r - u * n, t[1] = s * r - c * n, t[2] = a * r - l * n, t[3] = h * r - f * n, t[8] = o * n + u * r, t[9] = s * n + c * r, t[10] = a * n + l * r, t[11] = h * n + f * r, t }

    function _(t, e, i, n, r) { var o, s = 1 / Math.tan(e / 2); return t[0] = s / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != r && r !== 1 / 0 ? (o = 1 / (n - r), t[10] = (r + n) * o, t[14] = 2 * r * n * o) : (t[10] = -1, t[14] = -2 * n), t }

    function P() { var t = new c(3); return c != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t }

    function A(t) { var e = t[0],
            i = t[1],
            n = t[2]; return Math.hypot(e, i, n) }

    function S(t, e, i) { var n = new c(3); return n[0] = t, n[1] = e, n[2] = i, n }

    function O(t, e, i) { return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t }

    function C(t, e) { var i = e[0],
            n = e[1],
            r = e[2],
            o = i * i + n * n + r * r; return 0 < o && (o = 1 / Math.sqrt(o)), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o, t }

    function I(t, e) { return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] }

    function M(t, e, i) { var n = e[0],
            r = e[1],
            o = e[2],
            s = i[0],
            a = i[1],
            h = i[2]; return t[0] = r * h - o * a, t[1] = o * s - n * h, t[2] = n * a - r * s, t }

    function y(t, e, i) { var n = e[0],
            r = e[1],
            o = e[2]; return t[0] = n * i[0] + r * i[3] + o * i[6], t[1] = n * i[1] + r * i[4] + o * i[7], t[2] = n * i[2] + r * i[5] + o * i[8], t }

    function D(t, e, i) { var n = i[0],
            r = i[1],
            o = i[2],
            s = i[3],
            a = e[0],
            h = e[1],
            u = e[2],
            c = r * u - o * h,
            l = o * a - n * u,
            f = n * h - r * a,
            d = r * f - o * l,
            p = o * c - n * f,
            v = n * l - r * c,
            m = 2 * s; return c *= m, l *= m, f *= m, d *= 2, p *= 2, v *= 2, t[0] = a + c + d, t[1] = h + l + p, t[2] = u + f + v, t }
    Math.hypot || (Math.hypot = function() { for (var t = 0, e = arguments.length; e--;) t += arguments[e] * arguments[e]; return Math.sqrt(t) }); var E, T = A;
    E = P(); var b, R;
    b = new c(4), c != Float32Array && (b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 0), R = b;

    function L() { var t = new c(4); return c != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t }

    function F(t, e, i) { i *= .5; var n = Math.sin(i); return t[0] = n * e[0], t[1] = n * e[1], t[2] = n * e[2], t[3] = Math.cos(i), t }

    function V(t, e, i, n) { var r, o, s, a, h, u = e[0],
            c = e[1],
            l = e[2],
            f = e[3],
            d = i[0],
            p = i[1],
            v = i[2],
            m = i[3]; return (o = u * d + c * p + l * v + f * m) < 0 && (o = -o, d = -d, p = -p, v = -v, m = -m), h = g < 1 - o ? (r = Math.acos(o), s = Math.sin(r), a = Math.sin((1 - n) * r) / s, Math.sin(n * r) / s) : (a = 1 - n, n), t[0] = a * u + h * d, t[1] = a * c + h * p, t[2] = a * l + h * v, t[3] = a * f + h * m, t } var N, U, z, Q, W, k, X = function(t) { var e = new c(4); return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e },
        B = function(t, e, i, n) { var r = new c(4); return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r },
        Y = function(t, e) { return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t },
        G = function(t, e) { var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = i * i + n * n + r * r + o * o; return 0 < s && (s = 1 / Math.sqrt(s)), t[0] = i * s, t[1] = n * s, t[2] = r * s, t[3] = o * s, t },
        H = function(t, e) { return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] },
        j = function(t, e) { var i = t[0],
                n = t[1],
                r = t[2],
                o = t[3],
                s = e[0],
                a = e[1],
                h = e[2],
                u = e[3]; return Math.abs(i - s) <= g * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(n - a) <= g * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - h) <= g * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(o - u) <= g * Math.max(1, Math.abs(o), Math.abs(u)) };
    N = P(), U = S(1, 0, 0), z = S(0, 1, 0), Q = L(), W = L(), k = p();

    function q(t, e) { var i = new c(2); return i[0] = t, i[1] = e, i }

    function K(t, e) { return t[0] = e[0], t[1] = e[1], t }

    function Z(t, e) { var i = e[0],
            n = e[1],
            r = i * i + n * n; return 0 < r && (r = 1 / Math.sqrt(r)), t[0] = e[0] * r, t[1] = e[1] * r, t }
    J = new c(2), c != Float32Array && (J[0] = 0, J[1] = 0), $ = J; var J, $, tt = "undefined" != typeof window && window.Math === Math ? window : "undefined" != typeof self && self.Math === Math ? self : Function("return this")(),
        et = tt.document,
        it = tt.navigator && tt.navigator.userAgent || "",
        ot = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
        st = -1 !== it.indexOf("Safari") && -1 === it.indexOf("Chrome") && -1 !== it.indexOf("Mac OS X") && !ot; /SamsungBrowser/i.test(it);
    tt.Float32Array = void 0 !== tt.Float32Array ? tt.Float32Array : tt.Array;
    tt.Float32Array; var at = tt.getComputedStyle,
        ht = tt.navigator.userAgent,
        ut = "ontouchstart" in tt,
        ct = "ondevicemotion" in tt,
        lt = tt.DeviceMotionEvent,
        ft = tt.devicePixelRatio,
        dt = (function() { for (var t = et.documentElement.style, e = ["transform", "webkitTransform", "msTransform", "mozTransform"], i = 0, n = e.length; i < n; i++)
                if (e[i] in t) return }(), tt.CSS && tt.CSS.supports && tt.CSS.supports("will-change", "transform"), !1);

    function pt() { return (pt = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var i = arguments[e]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]) } return t }).apply(this, arguments) }

    function vt(t, e) { t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e }

    function mt(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } var gt, _t = "function" != typeof Object.assign ? function(t) { if (null == t) throw new TypeError("Cannot convert undefined or null to object"); for (var e = Object(t), i = 1; i < arguments.length; i++) { var n = arguments[i]; if (null != n)
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]) } return e } : Object.assign,
        yt = ["", "webkit", "Moz", "MS", "ms", "o"],
        xt = "undefined" == typeof document ? { style: {} } : document.createElement("div"),
        wt = "function",
        Et = Math.round,
        Tt = Math.abs,
        bt = Date.now;

    function Rt(t, e) { for (var i, n, r = e[0].toUpperCase() + e.slice(1), o = 0; o < yt.length;) { if ((n = (i = yt[o]) ? i + r : e) in t) return n;
            o++ } }
    gt = "undefined" == typeof window ? {} : window; var Pt = Rt(xt.style, "touchAction"),
        At = void 0 !== Pt; var St = "compute",
        Ot = "manipulation",
        Ct = "none",
        It = "pan-x",
        Mt = "pan-y",
        Dt = function() { if (!At) return !1; var e = {},
                i = gt.CSS && gt.CSS.supports; return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(t) { return e[t] = !i || gt.CSS.supports("touch-action", t) }), e }(),
        Lt = "ontouchstart" in gt,
        Ft = void 0 !== Rt(gt, "PointerEvent"),
        Vt = Lt && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        Nt = "touch",
        Ut = "mouse",
        zt = 25,
        Qt = 1,
        Wt = 4,
        kt = 8,
        Xt = 1,
        Bt = 2,
        Yt = 4,
        Gt = 8,
        Ht = 16,
        jt = Bt | Yt,
        qt = Gt | Ht,
        Kt = jt | qt,
        Zt = ["x", "y"],
        Jt = ["clientX", "clientY"];

    function $t(t, e, i) { var n; if (t)
            if (t.forEach) t.forEach(e, i);
            else if (void 0 !== t.length)
            for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
        else
            for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t) }

    function te(t, e) { return typeof t === wt ? t.apply(e && e[0] || void 0, e) : t }

    function ee(t, e) { return -1 < t.indexOf(e) } var ie = function() {
        function t(t, e) { this.manager = t, this.set(e) } var e = t.prototype; return e.set = function(t) { t === St && (t = this.compute()), At && this.manager.element.style && Dt[t] && (this.manager.element.style[Pt] = t), this.actions = t.toLowerCase().trim() }, e.update = function() { this.set(this.manager.options.touchAction) }, e.compute = function() { var e = []; return $t(this.manager.recognizers, function(t) { te(t.options.enable, [t]) && (e = e.concat(t.getTouchAction())) }),
                function(t) { if (ee(t, Ct)) return Ct; var e = ee(t, It),
                        i = ee(t, Mt); return e && i ? Ct : e || i ? e ? It : Mt : ee(t, Ot) ? Ot : "auto" }(e.join(" ")) }, e.preventDefaults = function(t) { var e = t.srcEvent,
                i = t.offsetDirection; if (this.manager.session.prevented) e.preventDefault();
            else { var n = this.actions,
                    r = ee(n, Ct) && !Dt[Ct],
                    o = ee(n, Mt) && !Dt[Mt],
                    s = ee(n, It) && !Dt[It]; if (r) { var a = 1 === t.pointers.length,
                        h = t.distance < 2,
                        u = t.deltaTime < 250; if (a && h && u) return } if (!s || !o) return r || o && i & jt || s && i & qt ? this.preventSrc(e) : void 0 } }, e.preventSrc = function(t) { this.manager.session.prevented = !0, t.preventDefault() }, t }();

    function ne(t, e) { for (; t;) { if (t === e) return !0;
            t = t.parentNode } return !1 }

    function re(t) { var e = t.length; if (1 === e) return { x: Et(t[0].clientX), y: Et(t[0].clientY) }; for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++; return { x: Et(i / e), y: Et(n / e) } }

    function oe(t) { for (var e = [], i = 0; i < t.pointers.length;) e[i] = { clientX: Et(t.pointers[i].clientX), clientY: Et(t.pointers[i].clientY) }, i++; return { timeStamp: bt(), pointers: e, center: re(e), deltaX: t.deltaX, deltaY: t.deltaY } }

    function se(t, e, i) { var n = e[(i = i || Zt)[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]]; return Math.sqrt(n * n + r * r) }

    function ae(t, e, i) { var n = e[(i = i || Zt)[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]]; return 180 * Math.atan2(r, n) / Math.PI }

    function he(t, e) { return t === e ? Xt : Tt(t) >= Tt(e) ? t < 0 ? Bt : Yt : e < 0 ? Gt : Ht }

    function ue(t, e, i) { return { x: e / t || 0, y: i / t || 0 } }

    function ce(t, e) { var i = t.session,
            n = e.pointers,
            r = n.length;
        i.firstInput || (i.firstInput = oe(e)), 1 < r && !i.firstMultiple ? i.firstMultiple = oe(e) : 1 === r && (i.firstMultiple = !1); var o, s, a, h, u, c, l = i.firstInput,
            f = i.firstMultiple,
            d = f ? f.center : l.center,
            p = e.center = re(n);
        e.timeStamp = bt(), e.deltaTime = e.timeStamp - l.timeStamp, e.angle = ae(d, p), e.distance = se(d, p), o = i, a = (s = e).center, h = o.offsetDelta || {}, u = o.prevDelta || {}, c = o.prevInput || {}, s.eventType !== Qt && c.eventType !== Wt || (u = o.prevDelta = { x: c.deltaX || 0, y: c.deltaY || 0 }, h = o.offsetDelta = { x: a.x, y: a.y }), s.deltaX = u.x + (a.x - h.x), s.deltaY = u.y + (a.y - h.y), e.offsetDirection = he(e.deltaX, e.deltaY); var v, m, g, _, y = ue(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = y.x, e.overallVelocityY = y.y, e.overallVelocity = Tt(y.x) > Tt(y.y) ? y.x : y.y, e.scale = f ? (v = f.pointers, se((m = n)[0], m[1], Jt) / se(v[0], v[1], Jt)) : 1, e.rotation = f ? (g = f.pointers, ae((_ = n)[1], _[0], Jt) + ae(g[1], g[0], Jt)) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
            function(t, e) { var i, n, r, o, s = t.lastInterval || e,
                    a = e.timeStamp - s.timeStamp; if (e.eventType !== kt && (zt < a || void 0 === s.velocity)) { var h = e.deltaX - s.deltaX,
                        u = e.deltaY - s.deltaY,
                        c = ue(a, h, u);
                    n = c.x, r = c.y, i = Tt(c.x) > Tt(c.y) ? c.x : c.y, o = he(h, u), t.lastInterval = e } else i = s.velocity, n = s.velocityX, r = s.velocityY, o = s.direction;
                e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = o }(i, e); var x, w = t.element,
            E = e.srcEvent;
        ne(x = E.composedPath ? E.composedPath()[0] : E.path ? E.path[0] : E.target, w) && (w = x), e.target = w }

    function le(t, e, i) { var n = i.pointers.length,
            r = i.changedPointers.length,
            o = e & Qt && n - r == 0,
            s = e & (Wt | kt) && n - r == 0;
        i.isFirst = !!o, i.isFinal = !!s, o && (t.session = {}), i.eventType = e, ce(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i }

    function fe(t) { return t.trim().split(/\s+/g) }

    function de(e, t, i) { $t(fe(t), function(t) { e.addEventListener(t, i, !1) }) }

    function pe(e, t, i) { $t(fe(t), function(t) { e.removeEventListener(t, i, !1) }) }

    function ve(t) { var e = t.ownerDocument || t; return e.defaultView || e.parentWindow || window } var me = function() {
        function t(e, t) { var i = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) { te(e.options.enable, [e]) && i.handler(t) }, this.init() } var e = t.prototype; return e.handler = function() {}, e.init = function() { this.evEl && de(this.element, this.evEl, this.domHandler), this.evTarget && de(this.target, this.evTarget, this.domHandler), this.evWin && de(ve(this.element), this.evWin, this.domHandler) }, e.destroy = function() { this.evEl && pe(this.element, this.evEl, this.domHandler), this.evTarget && pe(this.target, this.evTarget, this.domHandler), this.evWin && pe(ve(this.element), this.evWin, this.domHandler) }, t }();

    function ge(t, e, i) { if (t.indexOf && !i) return t.indexOf(e); for (var n = 0; n < t.length;) { if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++ } return -1 } var _e = { pointerdown: Qt, pointermove: 2, pointerup: Wt, pointercancel: kt, pointerout: kt },
        ye = { 2: Nt, 3: "pen", 4: Ut, 5: "kinect" },
        xe = "pointerdown",
        we = "pointermove pointerup pointercancel";
    gt.MSPointerEvent && !gt.PointerEvent && (xe = "MSPointerDown", we = "MSPointerMove MSPointerUp MSPointerCancel"); var Ee = function(i) {
        function n() { var t, e = n.prototype; return e.evEl = xe, e.evWin = we, (t = i.apply(this, arguments) || this).store = t.manager.session.pointerEvents = [], t } return vt(n, i), n.prototype.handler = function(t) { var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                r = _e[n],
                o = ye[t.pointerType] || t.pointerType,
                s = o === Nt,
                a = ge(e, t.pointerId, "pointerId");
            r & Qt && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : r & (Wt | kt) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, { pointers: e, changedPointers: [t], pointerType: o, srcEvent: t }), i && e.splice(a, 1)) }, n }(me);

    function Te(t) { return Array.prototype.slice.call(t, 0) }

    function be(t, i, e) { for (var n = [], r = [], o = 0; o < t.length;) { var s = i ? t[o][i] : t[o];
            ge(r, s) < 0 && n.push(t[o]), r[o] = s, o++ } return e && (n = i ? n.sort(function(t, e) { return t[i] > e[i] }) : n.sort()), n } var Re = { touchstart: Qt, touchmove: 2, touchend: Wt, touchcancel: kt },
        Pe = function(e) {
            function i() { var t; return i.prototype.evTarget = "touchstart touchmove touchend touchcancel", (t = e.apply(this, arguments) || this).targetIds = {}, t } return vt(i, e), i.prototype.handler = function(t) { var e = Re[t.type],
                    i = function(t, e) { var i, n, r = Te(t.touches),
                            o = this.targetIds; if (e & (2 | Qt) && 1 === r.length) return o[r[0].identifier] = !0, [r, r]; var s = Te(t.changedTouches),
                            a = [],
                            h = this.target; if (n = r.filter(function(t) { return ne(t.target, h) }), e === Qt)
                            for (i = 0; i < n.length;) o[n[i].identifier] = !0, i++;
                        i = 0; for (; i < s.length;) o[s[i].identifier] && a.push(s[i]), e & (Wt | kt) && delete o[s[i].identifier], i++; return a.length ? [be(n.concat(a), "identifier", !0), a] : void 0 }.call(this, t, e);
                i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: Nt, srcEvent: t }) }, i }(me); var Ae = { mousedown: Qt, mousemove: 2, mouseup: Wt },
        Se = function(i) {
            function n() { var t, e = n.prototype; return e.evEl = "mousedown", e.evWin = "mousemove mouseup", (t = i.apply(this, arguments) || this).pressed = !1, t } return vt(n, i), n.prototype.handler = function(t) { var e = Ae[t.type];
                e & Qt && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = Wt), this.pressed && (e & Wt && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: Ut, srcEvent: t })) }, n }(me),
        Oe = 2500,
        Ce = 25;

    function Ie(t) { var e = t.changedPointers[0]; if (e.identifier === this.primaryTouch) { var i = { x: e.clientX, y: e.clientY },
                n = this.lastTouches;
            this.lastTouches.push(i);
            setTimeout(function() { var t = n.indexOf(i); - 1 < t && n.splice(t, 1) }, Oe) } } var Me = function() { return function(i) {
            function t(t, e) { var o; return (o = i.call(this, t, e) || this).handler = function(t, e, i) { var n = i.pointerType === Nt,
                        r = i.pointerType === Ut; if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) { if (n)(function(t, e) { t & Qt ? (this.primaryTouch = e.changedPointers[0].identifier, Ie.call(this, e)) : t & (Wt | kt) && Ie.call(this, e) }).call(mt(mt(o)), e, i);
                        else if (r && function(t) { for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) { var r = this.lastTouches[n],
                                        o = Math.abs(e - r.x),
                                        s = Math.abs(i - r.y); if (o <= Ce && s <= Ce) return !0 } return !1 }.call(mt(mt(o)), i)) return;
                        o.callback(t, e, i) } }, o.touch = new Pe(o.manager, o.handler), o.mouse = new Se(o.manager, o.handler), o.primaryTouch = null, o.lastTouches = [], o } return vt(t, i), t.prototype.destroy = function() { this.touch.destroy(), this.mouse.destroy() }, t }(me) }();

    function De(t, e, i) { return !!Array.isArray(t) && ($t(t, i[e], i), !0) } var Le = 1;

    function Fe(t, e) { var i = e.manager; return i ? i.get(t) : t }

    function Ve(t) { return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : "" } var Ne = function() {
            function t(t) { void 0 === t && (t = {}), this.options = pt({ enable: !0 }, t), this.id = Le++, this.manager = null, this.state = 1, this.simultaneous = {}, this.requireFail = [] } var e = t.prototype; return e.set = function(t) { return _t(this.options, t), this.manager && this.manager.touchAction.update(), this }, e.recognizeWith = function(t) { if (De(t, "recognizeWith", this)) return this; var e = this.simultaneous; return e[(t = Fe(t, this)).id] || (e[t.id] = t).recognizeWith(this), this }, e.dropRecognizeWith = function(t) { return De(t, "dropRecognizeWith", this) || (t = Fe(t, this), delete this.simultaneous[t.id]), this }, e.requireFailure = function(t) { if (De(t, "requireFailure", this)) return this; var e = this.requireFail; return -1 === ge(e, t = Fe(t, this)) && (e.push(t), t.requireFailure(this)), this }, e.dropRequireFailure = function(t) { if (De(t, "dropRequireFailure", this)) return this;
                t = Fe(t, this); var e = ge(this.requireFail, t); return -1 < e && this.requireFail.splice(e, 1), this }, e.hasRequireFailures = function() { return 0 < this.requireFail.length }, e.canRecognizeWith = function(t) { return !!this.simultaneous[t.id] }, e.emit = function(e) { var i = this,
                    t = this.state;

                function n(t) { i.manager.emit(t, e) }
                t < 8 && n(i.options.event + Ve(t)), n(i.options.event), e.additionalEvent && n(e.additionalEvent), 8 <= t && n(i.options.event + Ve(t)) }, e.tryEmit = function(t) { if (this.canEmit()) return this.emit(t);
                this.state = 32 }, e.canEmit = function() { for (var t = 0; t < this.requireFail.length;) { if (!(33 & this.requireFail[t].state)) return !1;
                    t++ } return !0 }, e.recognize = function(t) { var e = _t({}, t); if (!te(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e) }, e.process = function() {}, e.getTouchAction = function() {}, e.reset = function() {}, t }(),
        Ue = function(e) {
            function t(t) { return void 0 === t && (t = {}), e.call(this, pt({ pointers: 1 }, t)) || this }
            vt(t, e); var i = t.prototype; return i.attrTest = function(t) { var e = this.options.pointers; return 0 === e || t.pointers.length === e }, i.process = function(t) { var e = this.state,
                    i = t.eventType,
                    n = 6 & e,
                    r = this.attrTest(t); return n && (i & kt || !r) ? 16 | e : n || r ? i & Wt ? 8 | e : 2 & e ? 4 | e : 2 : 32 }, t }(Ne);

    function ze(t) { return t === Ht ? "down" : t === Gt ? "up" : t === Bt ? "left" : t === Yt ? "right" : "" } var Qe = function(i) {
            function t(t) { var e; return void 0 === t && (t = {}), (e = i.call(this, pt({ event: "pan", threshold: 10, pointers: 1, direction: Kt }, t)) || this).pX = null, e.pY = null, e }
            vt(t, i); var e = t.prototype; return e.getTouchAction = function() { var t = this.options.direction,
                    e = []; return t & jt && e.push(Mt), t & qt && e.push(It), e }, e.directionTest = function(t) { var e = this.options,
                    i = !0,
                    n = t.distance,
                    r = t.direction,
                    o = t.deltaX,
                    s = t.deltaY; return r & e.direction || (n = e.direction & jt ? (r = 0 === o ? Xt : o < 0 ? Bt : Yt, i = o !== this.pX, Math.abs(t.deltaX)) : (r = 0 === s ? Xt : s < 0 ? Gt : Ht, i = s !== this.pY, Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction }, e.attrTest = function(t) { return Ue.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t)) }, e.emit = function(t) { this.pX = t.deltaX, this.pY = t.deltaY; var e = ze(t.direction);
                e && (t.additionalEvent = this.options.event + e), i.prototype.emit.call(this, t) }, t }(Ue),
        We = function(i) {
            function t(t) { return void 0 === t && (t = {}), i.call(this, pt({ event: "pinch", threshold: 0, pointers: 2 }, t)) || this }
            vt(t, i); var e = t.prototype; return e.getTouchAction = function() { return [Ct] }, e.attrTest = function(t) { return i.prototype.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state) }, e.emit = function(t) { if (1 !== t.scale) { var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e }
                i.prototype.emit.call(this, t) }, t }(Ue),
        ke = { domEvents: !1, touchAction: St, enable: !0, inputTarget: null, inputClass: null, cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };

    function Xe(i, n) { var r, o = i.element;
        o.style && ($t(i.options.cssProps, function(t, e) { r = Rt(o.style, e), n ? (i.oldCssProps[r] = o.style[r], o.style[r] = t) : o.style[r] = i.oldCssProps[r] || "" }), n || (i.oldCssProps = {})) } var Be = function() {
        function t(t, e) { var i, n = this;
            this.options = _t({}, ke, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((i = this).options.inputClass || (Ft ? Ee : Vt ? Pe : Lt ? Me : Se))(i, le), this.touchAction = new ie(this, this.options.touchAction), Xe(this, !0), $t(this.options.recognizers, function(t) { var e = n.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]) }, this) } var e = t.prototype; return e.set = function(t) { return _t(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this }, e.stop = function(t) { this.session.stopped = t ? 2 : 1 }, e.recognize = function(t) { var e = this.session; if (!e.stopped) { var i;
                this.touchAction.preventDefaults(t); var n = this.recognizers,
                    r = e.curRecognizer;
                (!r || r && 8 & r.state) && (r = e.curRecognizer = null); for (var o = 0; o < n.length;) i = n[o], 2 === e.stopped || r && i !== r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && 14 & i.state && (r = e.curRecognizer = i), o++ } }, e.get = function(t) { if (t instanceof Ne) return t; for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event === t) return e[i];
            return null }, e.add = function(t) { if (De(t, "add", this)) return this; var e = this.get(t.options.event); return e && this.remove(e), this.recognizers.push(t), (t.manager = this).touchAction.update(), t }, e.remove = function(t) { if (De(t, "remove", this)) return this; var e = this.get(t); if (t) { var i = this.recognizers,
                    n = ge(i, e); - 1 !== n && (i.splice(n, 1), this.touchAction.update()) } return this }, e.on = function(t, e) { if (void 0 === t || void 0 === e) return this; var i = this.handlers; return $t(fe(t), function(t) { i[t] = i[t] || [], i[t].push(e) }), this }, e.off = function(t, e) { if (void 0 === t) return this; var i = this.handlers; return $t(fe(t), function(t) { e ? i[t] && i[t].splice(ge(i[t], e), 1) : delete i[t] }), this }, e.emit = function(t, e) { var i, n, r;
            this.options.domEvents && (i = t, n = e, (r = document.createEvent("Event")).initEvent(i, !0, !0), (r.gesture = n).target.dispatchEvent(r)); var o = this.handlers[t] && this.handlers[t].slice(); if (o && o.length) { e.type = t, e.preventDefault = function() { e.srcEvent.preventDefault() }; for (var s = 0; s < o.length;) o[s](e), s++ } }, e.destroy = function() { this.element && Xe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null }, t }();

    function Ye(n, t, e) { var r = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n"; return function() { var t = new Error("get-stack-trace"),
                e = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                i = window.console && (window.console.warn || window.console.log); return i && i.call(window.console, r, e), n.apply(this, arguments) } } var Ge = Ye(function(t, e, i) { for (var n = Object.keys(e), r = 0; r < n.length;)(!i || i && void 0 === t[n[r]]) && (t[n[r]] = e[n[r]]), r++; return t }, "extend", "Use `assign`.");
    Ye(function(t, e) { return Ge(t, e, !0) }, "merge", "Use `assign`."); var He = Object.setPrototypeOf || { __proto__: [] }
    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]) };

    function je(t, e) {
        function i() { this.constructor = t }
        He(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i) } var qe, Ke = Object.assign || function(t) { for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]); return t };

    function Ze(t, e, i, n) { var r = t,
            o = [i[0] ? e[0] : n ? e[0] - n[0] : e[0], i[1] ? e[1] : n ? e[1] + n[1] : e[1]]; return r = Math.max(o[0], r), r = Math.min(o[1], r) }

    function Je(t, e) { return t < e[0] || t > e[1] }

    function $e(t, e, i) { return i[1] && t > e[1] || i[0] && t < e[0] }

    function ti(t, e, i) { var n = t,
            r = e[0],
            o = e[1],
            s = o - r; return i[1] && o < t && (n = (n - o) % s + r), i[0] && t < r && (n = (n - r) % s + o), n }

    function ei(t) { for (var e = [], i = 0, n = t.length; i < n; i++) e.push(t[i]); return e }

    function ii(t, e) { var i; if (void 0 === e && (e = !1), "string" == typeof t) { if (t.match(/^<([a-z]+)\s*([^>]*)>/)) { var n = document.createElement("div");
                n.innerHTML = t, i = ei(n.childNodes) } else i = ei(document.querySelectorAll(t));
            e || (i = 1 <= i.length ? i[0] : void 0) } else t === qe ? i = t : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? "jQuery" in qe && t instanceof jQuery || t.constructor.prototype.jquery ? i = e ? t.toArray() : t.get(0) : Array.isArray(t) && (i = t.map(function(t) { return ii(t) }), e || (i = 1 <= i.length ? i[0] : void 0)) : i = t; return i } var ni = (qe = "undefined" == typeof window ? {} : window).requestAnimationFrame || qe.webkitRequestAnimationFrame,
        ri = qe.cancelAnimationFrame || qe.webkitCancelAnimationFrame; if (ni && !ri) { var oi = {},
            si = ni;
        ni = function(e) { var i = si(function(t) { oi[i] && e(t) }); return oi[i] = !0, i }, ri = function(t) { delete oi[t] } } else ni && ri || (ni = function(t) { return qe.setTimeout(function() { t(qe.performance && qe.performance.now && qe.performance.now() || (new Date).getTime()) }, 16) }, ri = qe.clearTimeout);

    function ai(t, e) { var i = {}; for (var n in t) n && (i[n] = e(t[n], n)); return i }

    function hi(t, e) { var i = {}; for (var n in t) n && e(t[n], n) && (i[n] = t[n]); return i }

    function ui(t, e) { for (var i in t)
            if (i && !e(t[i], i)) return !1;
        return !0 }

    function ci(t, i) { return ui(t, function(t, e) { return t === i[e] }) } var li = {};

    function fi(t, e) { var i, n; return li[e] || (li[e] = (n = (i = e) < 1 ? Math.pow(10, pi(i)) : 1, function(t) { return 0 === i ? 0 : Math.round(Math.round(t / i) * i * n) / n })), li[e](t) }

    function di(t, i) { if (!t || !i) return t; var n = "number" == typeof i; return ai(t, function(t, e) { return fi(t, n ? i : i[e]) }) }

    function pi(t) { if (!isFinite(t)) return 0; var e = t + ""; if (0 <= e.indexOf("e")) { for (var i = 0, n = 1; Math.round(t * n) / n !== t;) n *= 10, i++; return i } return 0 <= e.indexOf(".") ? e.length - e.indexOf(".") - 1 : 0 }

    function vi(t, e, i) { return Math.max(Math.min(t, i), e) } var mi = function() {
            function t(t) { var e = t.options,
                    i = t.itm,
                    n = t.em,
                    r = t.axm;
                this.options = e, this.itm = i, this.em = n, this.axm = r, this.animationEnd = this.animationEnd.bind(this) } var e = t.prototype; return e.getDuration = function(o, t, e) { var i, s = this; if (void 0 !== e) i = e;
                else { var n = ai(t, function(t, e) { return i = Math.abs(t - o[e]), n = s.options.deceleration, (r = Math.sqrt(i / n * 2)) < 100 ? 0 : r; var i, n, r });
                    i = Object.keys(n).reduce(function(t, e) { return Math.max(t, n[e]) }, -1 / 0) } return vi(i, this.options.minimumDuration, this.options.maximumDuration) }, e.createAnimationParam = function(t, e, i) { var n = this.axm.get(),
                    r = t,
                    o = i && i.event || null; return { depaPos: n, destPos: r, duration: vi(e, this.options.minimumDuration, this.options.maximumDuration), delta: this.axm.getDelta(n, r), inputEvent: o, input: i && i.input || null, isTrusted: !!o, done: this.animationEnd } }, e.grab = function(t, e) { if (this._animateParam && t.length) { var i = this.axm.get(t),
                        n = this.axm.map(i, function(t, e) { return ti(t, e.range, e.circular) });
                    ui(n, function(t, e) { return i[e] === t }) || this.em.triggerChange(n, !1, i, e, !!e), this._animateParam = null, this._raf && (r = this._raf, ri(r)), this._raf = null, this.em.triggerAnimationEnd(!(!e || !e.event)) } var r }, e.getEventInfo = function() { return this._animateParam && this._animateParam.input && this._animateParam.inputEvent ? { input: this._animateParam.input, event: this._animateParam.inputEvent } : null }, e.restore = function(t) { var e = this.axm.get(),
                    i = this.axm.map(e, function(t, e) { return Math.min(e.range[1], Math.max(e.range[0], t)) });
                this.animateTo(i, this.getDuration(e, i), t) }, e.animationEnd = function() { var t = this.getEventInfo();
                this._animateParam = null; var e = this.axm.filter(this.axm.get(), function(t, e) { return $e(t, e.range, e.circular) });
                0 < Object.keys(e).length && this.setTo(this.axm.map(e, function(t, e) { return ti(t, e.range, e.circular) })), this.itm.setInterrupt(!1), this.em.triggerAnimationEnd(!!t), this.axm.isOutside() ? this.restore(t) : this.finish(!!t) }, e.finish = function(t) { this._animateParam = null, this.itm.setInterrupt(!1), this.em.triggerFinish(t) }, e.animateLoop = function(r, o) { if (r.duration) { this._animateParam = Ke({}, r); var h = this._animateParam,
                        u = this,
                        c = h.destPos,
                        l = h.depaPos,
                        f = 0,
                        d = ai(l, function(t, e) { return t <= c[e] ? 1 : -1 }),
                        p = ai(c, function(t) { return t }),
                        v = (new Date).getTime();
                    h.startTime = v,
                        function t() { u._raf = null; var e = (new Date).getTime(),
                                s = (e - h.startTime) / r.duration,
                                a = u.easing(s),
                                i = u.axm.map(l, function(t, e, i) { var n = 1 <= s ? c[i] : t + h.delta[i] * (a - f),
                                        r = ti(n, e.range, e.circular); if (n !== r) { var o = d[i] * (e.range[1] - e.range[0]);
                                        c[i] -= o, l[i] -= o } return r }),
                                n = !u.em.triggerChange(i, !1, l); if (l = i, v = e, 1 <= (f = a)) return ci(c = u.getFinalPos(c, p), u.axm.get(Object.keys(c))) || u.em.triggerChange(c, !0, l), void o();
                            n ? u.finish(!1) : u._raf = ni(t) }() } else this.em.triggerChange(r.destPos, !0), o() }, e.getFinalPos = function(t, i) { var n = this; return ai(t, function(t, e) { return t >= i[e] - 1e-6 && t <= i[e] + 1e-6 ? i[e] : fi(t, n.getRoundUnit(t, e)) }) }, e.getRoundUnit = function(t, e) { var i, n = this.options.round,
                    r = null; if (!n) { var o = this.axm.getAxisOptions(e);
                    i = Math.max(pi(o.range[0]), pi(o.range[1]), pi(t)), r = 1 / Math.pow(10, i) } return r || n }, e.getUserControll = function(t) { var e = t.setTo(); return e.destPos = this.axm.get(e.destPos), e.duration = vi(e.duration, this.options.minimumDuration, this.options.maximumDuration), e }, e.animateTo = function(t, e, i) { var n = this,
                    r = this.createAnimationParam(t, e, i),
                    o = Ke({}, r.depaPos),
                    s = this.em.triggerAnimationStart(r),
                    a = this.getUserControll(r); if (!s && this.axm.every(a.destPos, function(t, e) { return $e(t, e.range, e.circular) }) && console.warn("You can't stop the 'animation' event when 'circular' is true."), s && !ci(a.destPos, o)) { var h = i && i.event || null;
                    this.animateLoop({ depaPos: o, destPos: a.destPos, duration: a.duration, delta: this.axm.getDelta(o, a.destPos), isTrusted: !!h, inputEvent: h, input: i && i.input || null }, function() { return n.animationEnd() }) } }, e.easing = function(t) { return 1 < t ? 1 : this.options.easing(t) }, e.setTo = function(t, e) { void 0 === e && (e = 0); var i = Object.keys(t);
                this.grab(i); var n = this.axm.get(i); if (ci(t, n)) return this;
                this.itm.setInterrupt(!0); var r = hi(t, function(t, e) { return n[e] !== t }); return Object.keys(r).length && (ci(r = this.axm.map(r, function(t, e) { var i = e.range,
                        n = e.circular; return n && (n[0] || n[1]) ? t : Ze(t, i, n) }), n) || (0 < e ? this.animateTo(r, e) : (this.em.triggerChange(r), this.finish(!1)))), this }, e.setBy = function(i, t) { return void 0 === t && (t = 0), this.setTo(ai(this.axm.get(Object.keys(i)), function(t, e) { return t + i[e] }), t) }, t }(),
        gi = function() {
            function t(t) { this.axes = t } var e = t.prototype; return e.triggerHold = function(t, e) { var i = this.getRoundPos(t).roundPos;
                this.axes.trigger("hold", { pos: i, input: e.input || null, inputEvent: e.event || null, isTrusted: !0 }) }, e.triggerRelease = function(t) { var e = this.getRoundPos(t.destPos, t.depaPos),
                    i = e.roundPos,
                    n = e.roundDepa;
                t.destPos = i, t.depaPos = n, t.setTo = this.createUserControll(t.destPos, t.duration), this.axes.trigger("release", t) }, e.triggerChange = function(t, e, i, n, r) { void 0 === r && (r = !1); var o = this.am,
                    s = o.axm,
                    a = o.getEventInfo(),
                    h = this.getRoundPos(t, i),
                    u = h.roundPos,
                    c = h.roundDepa,
                    l = s.moveTo(u, c),
                    f = n && n.event || a && a.event || null,
                    d = { pos: l.pos, delta: l.delta, holding: r, inputEvent: f, isTrusted: !!f, input: n && n.input || a && a.input || null, set: f ? this.createUserControll(l.pos) : function() {} },
                    p = this.axes.trigger("change", d); return f && s.set(d.set().destPos), p }, e.triggerAnimationStart = function(t) { var e = this.getRoundPos(t.destPos, t.depaPos),
                    i = e.roundPos,
                    n = e.roundDepa; return t.destPos = i, t.depaPos = n, t.setTo = this.createUserControll(t.destPos, t.duration), this.axes.trigger("animationStart", t) }, e.triggerAnimationEnd = function(t) { void 0 === t && (t = !1), this.axes.trigger("animationEnd", { isTrusted: t }) }, e.triggerFinish = function(t) { void 0 === t && (t = !1), this.axes.trigger("finish", { isTrusted: t }) }, e.createUserControll = function(t, e) { void 0 === e && (e = 0); var i = { destPos: Ke({}, t), duration: e }; return function(t, e) { return t && (i.destPos = Ke({}, t)), void 0 !== e && (i.duration = e), i } }, e.setAnimationManager = function(t) { this.am = t }, e.destroy = function() { this.axes.off() }, e.getRoundPos = function(t, e) { var i = this.axes.options.round; return { roundPos: di(t, i), roundDepa: di(e, i) } }, t }(),
        _i = function() {
            function t(t) { this.options = t, this._prevented = !1 } var e = t.prototype; return e.isInterrupting = function() { return this.options.interruptable || this._prevented }, e.isInterrupted = function() { return !this.options.interruptable && this._prevented }, e.setInterrupt = function(t) { this.options.interruptable || (this._prevented = t) }, t }(),
        yi = function() {
            function t(t, e) { var i = this;
                this.axis = t, this.options = e, this._complementOptions(), this._pos = Object.keys(this.axis).reduce(function(t, e) { return t[e] = i.axis[e].range[0], t }, {}) } var e = t.prototype; return e._complementOptions = function() { var r = this;
                Object.keys(this.axis).forEach(function(n) { r.axis[n] = Ke({ range: [0, 100], bounce: [0, 0], circular: [!1, !1] }, r.axis[n]), ["bounce", "circular"].forEach(function(t) { var e = r.axis,
                            i = e[n][t]; /string|number|boolean/.test(typeof i) && (e[n][t] = [i, i]) }) }) }, e.getDelta = function(t, e) { var i = this.get(t); return ai(this.get(e), function(t, e) { return t - i[e] }) }, e.get = function(t) { var i = this; return t && Array.isArray(t) ? t.reduce(function(t, e) { return e && e in i._pos && (t[e] = i._pos[e]), t }, {}) : Ke({}, this._pos, t || {}) }, e.moveTo = function(i, n) { void 0 === n && (n = this._pos); var t = ai(this._pos, function(t, e) { return e in i && e in n ? i[e] - n[e] : 0 }); return this.set(this.map(i, function(t, e) { return e ? ti(t, e.range, e.circular) : 0 })), { pos: Ke({}, this._pos), delta: t } }, e.set = function(t) { for (var e in t) e && e in this._pos && (this._pos[e] = t[e]) }, e.every = function(t, i) { var n = this.axis; return ui(t, function(t, e) { return i(t, n[e], e) }) }, e.filter = function(t, i) { var n = this.axis; return hi(t, function(t, e) { return i(t, n[e], e) }) }, e.map = function(t, i) { var n = this.axis; return ai(t, function(t, e) { return i(t, n[e], e) }) }, e.isOutside = function(t) { return !this.every(t ? this.get(t) : this._pos, function(t, e) { return !Je(t, e.range) }) }, e.getAxisOptions = function(t) { return this.axis[t] }, t }(),
        xi = function() {
            function t(t) { var e = t.options,
                    i = t.itm,
                    n = t.em,
                    r = t.axm,
                    o = t.am;
                this.isOutside = !1, this.moveDistance = null, this.isStopped = !1, this.options = e, this.itm = i, this.em = n, this.axm = r, this.am = o } var e = t.prototype; return e.atOutside = function(t) { var s = this; if (this.isOutside) return this.axm.map(t, function(t, e) { var i = e.range[0] - e.bounce[0],
                        n = e.range[1] + e.bounce[1]; return n < t ? n : t < i ? i : t }); var a = this.am.easing(1e-5) / 1e-5; return this.axm.map(t, function(t, e) { var i = e.range[0],
                        n = e.range[1],
                        r = e.bounce,
                        o = e.circular; return o && (o[0] || o[1]) ? t : t < i ? i - s.am.easing((i - t) / (r[0] * a)) * r[0] : n < t ? n + s.am.easing((t - n) / (r[1] * a)) * r[1] : t }) }, e.get = function(t) { return this.axm.get(t.axes) }, e.hold = function(t, e) { if (!this.itm.isInterrupted() && t.axes.length) { var i = { input: t, event: e };
                    this.isStopped = !1, this.itm.setInterrupt(!0), this.am.grab(t.axes, i), this.moveDistance || this.em.triggerHold(this.axm.get(), i), this.isOutside = this.axm.isOutside(t.axes), this.moveDistance = this.axm.get(t.axes) } }, e.change = function(t, e, i) { if (!this.isStopped && this.itm.isInterrupting() && !this.axm.every(i, function(t) { return 0 === t })) { var n, r = this.moveDistance || this.axm.get(t.axes);
                    n = ai(r, function(t, e) { return t + (i[e] || 0) }), this.moveDistance && (this.moveDistance = n), this.isOutside && this.axm.every(r, function(t, e) { return !Je(t, e.range) }) && (this.isOutside = !1), r = this.atOutside(r), n = this.atOutside(n), this.em.triggerChange(n, !1, r, { input: t, event: e }, !0) || (this.isStopped = !0, this.moveDistance = null, this.am.finish(!1)) } }, e.release = function(t, e, i, n) { if (!this.isStopped && this.itm.isInterrupting() && this.moveDistance) { var r = this.axm.get(t.axes),
                        o = this.axm.get(),
                        s = this.axm.get(this.axm.map(i, function(t, e, i) { return e.circular && (e.circular[0] || e.circular[1]) ? r[i] + t : Ze(r[i] + t, e.range, e.circular, e.bounce) })),
                        a = this.am.getDuration(s, r, n);
                    0 === a && (s = Ke({}, o)); var h = { depaPos: o, destPos: s, duration: a, delta: this.axm.getDelta(o, s), inputEvent: e, input: t, isTrusted: !0 };
                    this.em.triggerRelease(h), this.moveDistance = null; var u = this.am.getUserControll(h),
                        c = ci(u.destPos, o),
                        l = { input: t, event: e };
                    c || 0 === u.duration ? (c || this.em.triggerChange(u.destPos, !1, o, l, !0), this.itm.setInterrupt(!1), this.axm.isOutside() ? this.am.restore(l) : this.em.triggerFinish(!0)) : this.am.animateTo(u.destPos, u.duration, l) } }, t }(),
        wi = function() { if ("undefined" == typeof document) return ""; for (var t = (document.head || document.getElementsByTagName("head")[0]).style, e = ["transform", "webkitTransform", "msTransform", "mozTransform"], i = 0, n = e.length; i < n; i++)
                if (e[i] in t) return e[i];
            return "" }(),
        Ei = function(r) {
            function t(t, e, i) { void 0 === t && (t = {}), void 0 === e && (e = {}); var n = r.call(this) || this; return n.axis = t, n._inputs = [], n.options = Ke({ easing: function(t) { return 1 - Math.pow(1 - t, 3) }, interruptable: !0, maximumDuration: 1 / 0, minimumDuration: 0, deceleration: 6e-4, round: null }, e), n.itm = new _i(n.options), n.axm = new yi(n.axis, n.options), n.em = new gi(n), n.am = new mi(n), n.io = new xi(n), n.em.setAnimationManager(n.am), i && n.em.triggerChange(i), n }
            je(t, r); var e = t.prototype; return e.connect = function(t, e) { var i; if (i = "string" == typeof t ? t.split(" ") : t.concat(), ~this._inputs.indexOf(e) && this.disconnect(e), "hammer" in e) { var n = this._inputs.filter(function(t) { return t.hammer && t.element === e.element });
                    n.length && (e.hammer = n[0].hammer) } return e.mapAxes(i), e.connect(this.io), this._inputs.push(e), this }, e.disconnect = function(t) { if (t) { var e = this._inputs.indexOf(t);
                    0 <= e && (this._inputs[e].disconnect(), this._inputs.splice(e, 1)) } else this._inputs.forEach(function(t) { return t.disconnect() }), this._inputs = []; return this }, e.get = function(t) { return this.axm.get(t) }, e.setTo = function(t, e) { return void 0 === e && (e = 0), this.am.setTo(t, e), this }, e.setBy = function(t, e) { return void 0 === e && (e = 0), this.am.setBy(t, e), this }, e.isBounceArea = function(t) { return this.axm.isOutside(t) }, e.destroy = function() { this.disconnect(), this.em.destroy() }, t.VERSION = "2.6.0", t.TRANSFORM = wi, t.DIRECTION_NONE = Xt, t.DIRECTION_LEFT = Bt, t.DIRECTION_RIGHT = Yt, t.DIRECTION_UP = Gt, t.DIRECTION_DOWN = Ht, t.DIRECTION_HORIZONTAL = jt, t.DIRECTION_VERTICAL = qt, t.DIRECTION_ALL = Kt, t }(s),
        Ti = "PointerEvent" in qe || "MSPointerEvent" in qe,
        bi = "ontouchstart" in qe,
        Ri = "_EGJS_AXES_INPUTTYPE_";

    function Pi(n, t) { return t.reduce(function(t, e, i) { return n[i] && (t[n[i]] = e), t }, {}) }

    function Ai(t, e) { try { return new Be(t, Ke({}, e)) } catch (t) { return null } }

    function Si(t) { void 0 === t && (t = []); var e = !1,
            i = !1,
            n = !1; return t.forEach(function(t) { switch (t) {
                case "mouse":
                    i = !0; break;
                case "touch":
                    e = bi; break;
                case "pointer":
                    n = Ti } }), n ? Ee : e && i ? Me : e ? Pe : i ? Se : null }

    function Oi(t, e, i) { return i ? !!(e === Kt || e & t && i & t) : !!(e & t) } var Ci = function() {
            function t(t, e) { if (this.axes = [], this.hammer = null, this.element = null, this.panRecognizer = null, void 0 === Be) throw new Error("The Hammerjs must be loaded before eg.Axes.PanInput.\nhttp://hammerjs.github.io/");
                this.element = ii(t), this.options = Ke({ inputType: ["touch", "mouse", "pointer"], scale: [1, 1], thresholdAngle: 45, threshold: 0, hammerManagerOptions: { cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", userDrag: "none" } } }, e), this.onHammerInput = this.onHammerInput.bind(this), this.onPanmove = this.onPanmove.bind(this), this.onPanend = this.onPanend.bind(this) } var e = t.prototype; return e.mapAxes = function(t) { var e = !!t[0],
                    i = !!t[1];
                this._direction = e && i ? Kt : e ? jt : i ? qt : Xt, this.axes = t }, e.connect = function(t) { var e = { direction: this._direction, threshold: this.options.threshold }; if (this.hammer) this.removeRecognizer(), this.dettachEvent();
                else { var i = this.element[Ri];
                    i = i || String(Math.round(Math.random() * (new Date).getTime())); var n = Si(this.options.inputType); if (!n) throw new Error("Wrong inputType parameter!");
                    this.hammer = Ai(this.element, Ke({ inputClass: n }, this.options.hammerManagerOptions)), this.element[Ri] = i } return this.panRecognizer = new Qe(e), this.hammer.add(this.panRecognizer), this.attachEvent(t), this }, e.disconnect = function() { return this.removeRecognizer(), this.hammer && this.dettachEvent(), this._direction = Xt, this }, e.destroy = function() { this.disconnect(), this.hammer && 0 === this.hammer.recognizers.length && this.hammer.destroy(), delete this.element[Ri], this.element = null, this.hammer = null }, e.enable = function() { return this.hammer && (this.hammer.get("pan").options.enable = !0), this }, e.disable = function() { return this.hammer && (this.hammer.get("pan").options.enable = !1), this }, e.isEnable = function() { return !(!this.hammer || !this.hammer.get("pan").options.enable) }, e.removeRecognizer = function() { this.hammer && this.panRecognizer && (this.hammer.remove(this.panRecognizer), this.panRecognizer = null) }, e.onHammerInput = function(t) { this.isEnable() && (t.isFirst ? this.observer.hold(this, t) : t.isFinal && this.onPanend(t)) }, e.onPanmove = function(t) { var e = function(t, e) { if (e < 0 || 90 < e) return Xt; var i = Math.abs(t); return e < i && i < 180 - e ? qt : jt }(t.angle, this.options.thresholdAngle),
                    i = this.hammer.session.prevInput;
                i ? (t.offsetX = t.deltaX - i.deltaX, t.offsetY = t.deltaY - i.deltaY) : (t.offsetX = 0, t.offsetY = 0); var n = this.getOffset([t.offsetX, t.offsetY], [Oi(jt, this._direction, e), Oi(qt, this._direction, e)]),
                    r = n.some(function(t) { return 0 !== t });
                r && (t.srcEvent.preventDefault(), t.srcEvent.stopPropagation()), (t.preventSystemEvent = r) && this.observer.change(this, t, Pi(this.axes, n)) }, e.onPanend = function(t) { var e, i, n, r, o = this.getOffset([Math.abs(t.velocityX) * (t.deltaX < 0 ? -1 : 1), Math.abs(t.velocityY) * (t.deltaY < 0 ? -1 : 1)], [Oi(jt, this._direction), Oi(qt, this._direction)]);
                e = o, i = this.observer.options.deceleration, n = Math.sqrt(e[0] * e[0] + e[1] * e[1]), r = Math.abs(n / -i), o = [e[0] / 2 * r, e[1] / 2 * r], this.observer.release(this, t, Pi(this.axes, o)) }, e.attachEvent = function(t) { this.observer = t, this.hammer.on("hammer.input", this.onHammerInput).on("panstart panmove", this.onPanmove) }, e.dettachEvent = function() { this.hammer.off("hammer.input", this.onHammerInput).off("panstart panmove", this.onPanmove), this.observer = null }, e.getOffset = function(t, e) { var i = [0, 0],
                    n = this.options.scale; return e[0] && (i[0] = t[0] * n[0]), e[1] && (i[1] = t[1] * n[1]), i }, t }(),
        Ii = function() {
            function t(t, e) { if (this.axes = [], this.hammer = null, this.element = null, this._base = null, this._prev = null, this.pinchRecognizer = null, void 0 === Be) throw new Error("The Hammerjs must be loaded before eg.Axes.PinchInput.\nhttp://hammerjs.github.io/");
                this.element = ii(t), this.options = Ke({ scale: 1, threshold: 0, inputType: ["touch", "pointer"], hammerManagerOptions: { cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", userDrag: "none" } } }, e), this.onPinchStart = this.onPinchStart.bind(this), this.onPinchMove = this.onPinchMove.bind(this), this.onPinchEnd = this.onPinchEnd.bind(this) } var e = t.prototype; return e.mapAxes = function(t) { this.axes = t }, e.connect = function(t) { var e = { threshold: this.options.threshold }; if (this.hammer) this.removeRecognizer(), this.dettachEvent();
                else { var i = this.element[Ri];
                    i = i || String(Math.round(Math.random() * (new Date).getTime())); var n = Si(this.options.inputType); if (!n) throw new Error("Wrong inputType parameter!");
                    this.hammer = Ai(this.element, Ke({ inputClass: n }, this.options.hammerManagerOptions)), this.element[Ri] = i } return this.pinchRecognizer = new We(e), this.hammer.add(this.pinchRecognizer), this.attachEvent(t), this }, e.disconnect = function() { return this.removeRecognizer(), this.hammer && (this.hammer.remove(this.pinchRecognizer), this.pinchRecognizer = null, this.dettachEvent()), this }, e.destroy = function() { this.disconnect(), this.hammer && 0 === this.hammer.recognizers.length && this.hammer.destroy(), delete this.element[Ri], this.element = null, this.hammer = null }, e.removeRecognizer = function() { this.hammer && this.pinchRecognizer && (this.hammer.remove(this.pinchRecognizer), this.pinchRecognizer = null) }, e.onPinchStart = function(t) { this._base = this.observer.get(this)[this.axes[0]]; var e = this.getOffset(t.scale);
                this.observer.hold(this, t), this.observer.change(this, t, Pi(this.axes, [e])), this._prev = t.scale }, e.onPinchMove = function(t) { var e = this.getOffset(t.scale, this._prev);
                this.observer.change(this, t, Pi(this.axes, [e])), this._prev = t.scale }, e.onPinchEnd = function(t) { var e = this.getOffset(t.scale, this._prev);
                this.observer.change(this, t, Pi(this.axes, [e])), this.observer.release(this, t, Pi(this.axes, [0]), 0), this._base = null, this._prev = null }, e.getOffset = function(t, e) { return void 0 === e && (e = 1), this._base * (t - e) * this.options.scale }, e.attachEvent = function(t) { this.observer = t, this.hammer.on("pinchstart", this.onPinchStart).on("pinchmove", this.onPinchMove).on("pinchend", this.onPinchEnd) }, e.dettachEvent = function() { this.hammer.off("pinchstart", this.onPinchStart).off("pinchmove", this.onPinchMove).off("pinchend", this.onPinchEnd), this.observer = null, this._prev = null }, e.enable = function() { return this.hammer && (this.hammer.get("pinch").options.enable = !0), this }, e.disable = function() { return this.hammer && (this.hammer.get("pinch").options.enable = !1), this }, e.isEnable = function() { return !(!this.hammer || !this.hammer.get("pinch").options.enable) }, t }(),
        Mi = function() {
            function t(t, e) { this.axes = [], this.element = null, this._isEnabled = !1, this._isHolded = !1, this._timer = null, this.element = ii(t), this.options = Ke({ scale: 1, useNormalized: !0 }, e), this.onWheel = this.onWheel.bind(this) } var e = t.prototype; return e.mapAxes = function(t) { this.axes = t }, e.connect = function(t) { return this.dettachEvent(), this.attachEvent(t), this }, e.disconnect = function() { return this.dettachEvent(), this }, e.destroy = function() { this.disconnect(), this.element = null }, e.onWheel = function(t) { var e = this; if (this._isEnabled && (t.preventDefault(), 0 !== t.deltaY)) { this._isHolded || (this.observer.hold(this, t), this._isHolded = !0); var i = (0 < t.deltaY ? -1 : 1) * this.options.scale * (this.options.useNormalized ? 1 : Math.abs(t.deltaY));
                    this.observer.change(this, t, Pi(this.axes, [i])), clearTimeout(this._timer), this._timer = setTimeout(function() { e._isHolded && (e._isHolded = !1, e.observer.release(e, t, Pi(e.axes, [0]))) }, 50) } }, e.attachEvent = function(t) { this.observer = t, this.element.addEventListener("wheel", this.onWheel), this._isEnabled = !0 }, e.dettachEvent = function() { this.element.removeEventListener("wheel", this.onWheel), this._isEnabled = !1, this.observer = null, this._timer && (clearTimeout(this._timer), this._timer = null) }, e.enable = function() { return this._isEnabled = !0, this }, e.disable = function() { return this._isEnabled = !1, this }, e.isEnable = function() { return this._isEnabled }, t }(),
        Di = function() {
            function t(t, e) { this.axes = [], this.element = null, this._isEnabled = !1, this._isHolded = !1, this._timer = null, this.element = ii(t), this.options = Ke({ scale: [1, 1] }, e), this.onKeydown = this.onKeydown.bind(this), this.onKeyup = this.onKeyup.bind(this) } var e = t.prototype; return e.mapAxes = function(t) { this.axes = t }, e.connect = function(t) { return this.dettachEvent(), "0" !== this.element.getAttribute("tabindex") && this.element.setAttribute("tabindex", "0"), this.attachEvent(t), this }, e.disconnect = function() { return this.dettachEvent(), this }, e.destroy = function() { this.disconnect(), this.element = null }, e.onKeydown = function(t) { if (this._isEnabled) { var e = !0,
                        i = 1,
                        n = -1; switch (t.keyCode) {
                        case 37:
                        case 65:
                            i = -1; break;
                        case 39:
                        case 68:
                            break;
                        case 40:
                        case 83:
                            i = -1, n = 1; break;
                        case 38:
                        case 87:
                            n = 1; break;
                        default:
                            e = !1 } if ((-1 === n && !this.axes[0] || 1 === n && !this.axes[1]) && (e = !1), e) { var r = -1 === n ? [this.options.scale[0] * i, 0] : [0, this.options.scale[1] * i];
                        this._isHolded || (this.observer.hold(this, event), this._isHolded = !0), clearTimeout(this._timer), this.observer.change(this, event, Pi(this.axes, r)) } } }, e.onKeyup = function(t) { var e = this;
                this._isHolded && (clearTimeout(this._timer), this._timer = setTimeout(function() { e.observer.release(e, t, Pi(e.axes, [0, 0])), e._isHolded = !1 }, 80)) }, e.attachEvent = function(t) { this.observer = t, this.element.addEventListener("keydown", this.onKeydown, !1), this.element.addEventListener("keypress", this.onKeydown, !1), this.element.addEventListener("keyup", this.onKeyup, !1), this._isEnabled = !0 }, e.dettachEvent = function() { this.element.removeEventListener("keydown", this.onKeydown, !1), this.element.removeEventListener("keypress", this.onKeydown, !1), this.element.removeEventListener("keyup", this.onKeyup, !1), this._isEnabled = !1, this.observer = null }, e.enable = function() { return this._isEnabled = !0, this }, e.disable = function() { return this._isEnabled = !1, this }, e.isEnable = function() { return this._isEnabled }, t }();

    function Li(t) { return 180 * t / Math.PI } var Fi = { isPowerOfTwo: function(t) { return t && 0 == (t & t - 1) } };
    Fi.extractPitchFromQuat = function(t) { var e, i, n = (e = t, D(i = S(0, 0, 1), i, e), i); return -1 * Math.atan2(n[1], Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[2], 2))) }, Fi.hypot = Math.hypot || function(t, e) { return Math.sqrt(t * t + e * e) }; var Vi = { PITCH_DELTA: 1, YAW_DELTA_BY_ROLL: 2, YAW_DELTA_BY_YAW: 3 };

    function Ni(t, e) { var i, n, r = t[0] * e[1] - e[0] * t[1]; return -Math.atan2(r, (n = e, (i = t)[0] * n[0] + i[1] * n[1])) }
    Vi[Vi.PITCH_DELTA] = { targetAxis: [0, 1, 0], meshPoint: [0, 0, 1] }, Vi[Vi.YAW_DELTA_BY_ROLL] = { targetAxis: [0, 1, 0], meshPoint: [1, 0, 0] }, Vi[Vi.YAW_DELTA_BY_YAW] = { targetAxis: [1, 0, 0], meshPoint: [0, 0, 1] }, Fi.yawOffsetBetween = function(t, e) { var i = q(t[0], t[2]),
            n = q(e[0], e[2]); return Z(i, i), Z(n, n), -Ni(i, n) }, Fi.toDegree = Li, Fi.getRotationDelta = function(t, e, i) { var n = S(Vi[i].targetAxis[0], Vi[i].targetAxis[1], Vi[i].targetAxis[2]),
            r = Vi[i].meshPoint,
            o = X(t),
            s = X(e);
        G(o, o), G(s, s); var a = S(0, 0, 1),
            h = S(0, 0, 1);
        D(a, a, o), D(h, h, s), D(n, n, s); var u, c = 0 < I(n, M(P(), a, h)) ? 1 : -1,
            l = S(r[0], r[1], r[2]);
        u = i !== Vi.YAW_DELTA_BY_YAW ? S(0, c, 0) : S(c, 0, 0), D(l, l, s), D(u, u, s); var f = l,
            d = u,
            p = P();
        M(p, f, d), C(p, p); var v = p[0],
            m = p[1],
            g = p[2];
        D(h = S(r[0], r[1], r[2]), h, s), D(a = S(r[0], r[1], r[2]), a, o); var _, y, x, w = Math.abs(a[0] * v + a[1] * m + a[2] * g),
            E = P();
        O(E, a, (_ = P(), y = p, x = w, _[0] = y[0] * x, _[1] = y[1] * x, _[2] = y[2] * x, _)); var T = (E[0] * h[0] + E[1] * h[1] + E[2] * h[2]) / (A(E) * A(h));
        1 < T && (T = 1); var b = Math.acos(T),
            R = M(P(), h, E); return w = v * R[0] + m * R[1] + g * R[2], Li(b * (i !== Vi.YAW_DELTA_BY_YAW ? 0 < w ? 1 : -1 : w < 0 ? 1 : -1) * c) }, Fi.angleBetweenVec2 = Ni; var Ui, zi, Qi = window.MathUtil || {};
    Qi.degToRad = Math.PI / 180, Qi.radToDeg = 180 / Math.PI, Qi.Vector2 = function(t, e) { this.x = t || 0, this.y = e || 0 }, Qi.Vector2.prototype = { constructor: Qi.Vector2, set: function(t, e) { return this.x = t, this.y = e, this }, copy: function(t) { return this.x = t.x, this.y = t.y, this }, subVectors: function(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this } }, Qi.Vector3 = function(t, e, i) { this.x = t || 0, this.y = e || 0, this.z = i || 0 }, Qi.Vector3.prototype = { constructor: Qi.Vector3, set: function(t, e, i) { return this.x = t, this.y = e, this.z = i, this }, copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this }, length: function() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }, normalize: function() { var t = this.length(); if (0 !== t) { var e = 1 / t;
                this.multiplyScalar(e) } else this.x = 0, this.y = 0, this.z = 0; return this }, multiplyScalar: function(t) { this.x *= t, this.y *= t, this.z *= t }, applyQuaternion: function(t) { var e = this.x,
                i = this.y,
                n = this.z,
                r = t.x,
                o = t.y,
                s = t.z,
                a = t.w,
                h = a * e + o * n - s * i,
                u = a * i + s * e - r * n,
                c = a * n + r * i - o * e,
                l = -r * e - o * i - s * n; return this.x = h * a + l * -r + u * -s - c * -o, this.y = u * a + l * -o + c * -r - h * -s, this.z = c * a + l * -s + h * -o - u * -r, this }, dot: function(t) { return this.x * t.x + this.y * t.y + this.z * t.z }, crossVectors: function(t, e) { var i = t.x,
                n = t.y,
                r = t.z,
                o = e.x,
                s = e.y,
                a = e.z; return this.x = n * a - r * s, this.y = r * o - i * a, this.z = i * s - n * o, this } }, Qi.Quaternion = function(t, e, i, n) { this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1 }, Qi.Quaternion.prototype = { constructor: Qi.Quaternion, set: function(t, e, i, n) { return this.x = t, this.y = e, this.z = i, this.w = n, this }, copy: function(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this }, setFromEulerXYZ: function(t, e, i) { var n = Math.cos(t / 2),
                r = Math.cos(e / 2),
                o = Math.cos(i / 2),
                s = Math.sin(t / 2),
                a = Math.sin(e / 2),
                h = Math.sin(i / 2); return this.x = s * r * o + n * a * h, this.y = n * a * o - s * r * h, this.z = n * r * h + s * a * o, this.w = n * r * o - s * a * h, this }, setFromEulerYXZ: function(t, e, i) { var n = Math.cos(t / 2),
                r = Math.cos(e / 2),
                o = Math.cos(i / 2),
                s = Math.sin(t / 2),
                a = Math.sin(e / 2),
                h = Math.sin(i / 2); return this.x = s * r * o + n * a * h, this.y = n * a * o - s * r * h, this.z = n * r * h - s * a * o, this.w = n * r * o + s * a * h, this }, setFromAxisAngle: function(t, e) { var i = e / 2,
                n = Math.sin(i); return this.x = t.x * n, this.y = t.y * n, this.z = t.z * n, this.w = Math.cos(i), this }, multiply: function(t) { return this.multiplyQuaternions(this, t) }, multiplyQuaternions: function(t, e) { var i = t.x,
                n = t.y,
                r = t.z,
                o = t.w,
                s = e.x,
                a = e.y,
                h = e.z,
                u = e.w; return this.x = i * u + o * s + n * h - r * a, this.y = n * u + o * a + r * s - i * h, this.z = r * u + o * h + i * a - n * s, this.w = o * u - i * s - n * a - r * h, this }, inverse: function() { return this.x *= -1, this.y *= -1, this.z *= -1, this.normalize(), this }, normalize: function() { var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1) : (t = 1 / t, this.x = this.x * t, this.y = this.y * t, this.z = this.z * t, this.w = this.w * t), this }, slerp: function(t, e) { if (0 === e) return this; if (1 === e) return this.copy(t); var i = this.x,
                n = this.y,
                r = this.z,
                o = this.w,
                s = o * t.w + i * t.x + n * t.y + r * t.z; if (s < 0 ? (this.w = -t.w, this.x = -t.x, this.y = -t.y, this.z = -t.z, s = -s) : this.copy(t), 1 <= s) return this.w = o, this.x = i, this.y = n, this.z = r, this; var a = Math.acos(s),
                h = Math.sqrt(1 - s * s); if (Math.abs(h) < .001) return this.w = .5 * (o + this.w), this.x = .5 * (i + this.x), this.y = .5 * (n + this.y), this.z = .5 * (r + this.z), this; var u = Math.sin((1 - e) * a) / h,
                c = Math.sin(e * a) / h; return this.w = o * u + this.w * c, this.x = i * u + this.x * c, this.y = n * u + this.y * c, this.z = r * u + this.z * c, this }, setFromUnitVectors: function(t, e) { return void 0 === Ui && (Ui = new Qi.Vector3), (zi = t.dot(e) + 1) < 1e-6 ? (zi = 0, Math.abs(t.x) > Math.abs(t.z) ? Ui.set(-t.y, t.x, 0) : Ui.set(0, -t.z, t.y)) : Ui.crossVectors(t, e), this.x = Ui.x, this.y = Ui.y, this.z = Ui.z, this.w = zi, this.normalize(), this } }; var Wi, ki, Xi, Bi, Yi, Gi, Hi, ji, qi, Ki = Qi,
        Zi = window.Util || {};

    function Ji(t, e, i, n, r) { var o, s, a, h, u, c, l, f, d, p;
        o = t, s = n ? n.fieldOfView : null, a = r.depthNear, h = r.depthFar, u = Math.tan(s ? s.upDegrees * Gi : Hi), c = Math.tan(s ? s.downDegrees * Gi : Hi), l = Math.tan(s ? s.leftDegrees * Gi : Hi), f = Math.tan(s ? s.rightDegrees * Gi : Hi), d = 2 / (l + f), p = 2 / (u + c), o[0] = d, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = p, o[6] = 0, o[7] = 0, o[8] = -(l - f) * d * .5, o[9] = (u - c) * p * .5, o[10] = h / (a - h), o[11] = -1, o[12] = 0, o[13] = 0, o[14] = h * a / (a - h), o[15] = 0; var v, m, g, _, y, x, w, E, T, b, R, P, A, S, O, C, I, M, D, L, F, V, N, U, z, Q, W, k, X, B, Y, G, H, j, q, K, Z, J, $, tt, et, it, nt, rt, ot, st, at, ht, ut, ct, lt, ft, dt, pt, vt, mt, gt, _t, yt, xt, wt, Et, Tt, bt, Rt, Pt, At, St, Ot = i.orientation || ji,
            Ct = i.position || qi;
        v = e, g = Ct, _ = (m = Ot)[0], y = m[1], x = m[2], w = m[3], R = _ * (E = _ + _), P = _ * (T = y + y), A = _ * (b = x + x), S = y * T, O = y * b, C = x * b, I = w * E, M = w * T, D = w * b, v[0] = 1 - (S + C), v[1] = P + D, v[2] = A - M, v[3] = 0, v[4] = P - D, v[5] = 1 - (R + C), v[6] = O + I, v[7] = 0, v[8] = A + M, v[9] = O - I, v[10] = 1 - (R + S), v[11] = 0, v[12] = g[0], v[13] = g[1], v[14] = g[2], v[15] = 1, n && (F = L = e, V = n.offset, q = V[0], K = V[1], Z = V[2], F === L ? (L[12] = F[0] * q + F[4] * K + F[8] * Z + F[12], L[13] = F[1] * q + F[5] * K + F[9] * Z + F[13], L[14] = F[2] * q + F[6] * K + F[10] * Z + F[14], L[15] = F[3] * q + F[7] * K + F[11] * Z + F[15]) : (N = F[0], U = F[1], z = F[2], Q = F[3], W = F[4], k = F[5], X = F[6], B = F[7], Y = F[8], G = F[9], H = F[10], j = F[11], L[0] = N, L[1] = U, L[2] = z, L[3] = Q, L[4] = W, L[5] = k, L[6] = X, L[7] = B, L[8] = Y, L[9] = G, L[10] = H, L[11] = j, L[12] = N * q + W * K + Y * Z + F[12], L[13] = U * q + k * K + G * Z + F[13], L[14] = z * q + X * K + H * Z + F[14], L[15] = Q * q + B * K + j * Z + F[15])), tt = ($ = J = e)[0], et = $[1], it = $[2], nt = $[3], rt = $[4], ot = $[5], st = $[6], at = $[7], ht = $[8], ut = $[9], ct = $[10], lt = $[11], ft = $[12], dt = $[13], pt = $[14], vt = $[15], (St = (mt = tt * ot - et * rt) * (At = ct * vt - lt * pt) - (gt = tt * st - it * rt) * (Pt = ut * vt - lt * dt) + (_t = tt * at - nt * rt) * (Rt = ut * pt - ct * dt) + (yt = et * st - it * ot) * (bt = ht * vt - lt * ft) - (xt = et * at - nt * ot) * (Tt = ht * pt - ct * ft) + (wt = it * at - nt * st) * (Et = ht * dt - ut * ft)) && (St = 1 / St, J[0] = (ot * At - st * Pt + at * Rt) * St, J[1] = (it * Pt - et * At - nt * Rt) * St, J[2] = (dt * wt - pt * xt + vt * yt) * St, J[3] = (ct * xt - ut * wt - lt * yt) * St, J[4] = (st * bt - rt * At - at * Tt) * St, J[5] = (tt * At - it * bt + nt * Tt) * St, J[6] = (pt * _t - ft * wt - vt * gt) * St, J[7] = (ht * wt - ct * _t + lt * gt) * St, J[8] = (rt * Pt - ot * bt + at * Et) * St, J[9] = (et * bt - tt * Pt - nt * Et) * St, J[10] = (ft * xt - dt * _t + vt * mt) * St, J[11] = (ut * _t - ht * xt - lt * mt) * St, J[12] = (ot * Tt - rt * Rt - st * Et) * St, J[13] = (tt * Rt - et * Tt + it * Et) * St, J[14] = (dt * gt - ft * yt - pt * mt) * St, J[15] = (ht * yt - ut * gt + ct * mt) * St) }
    Zi.MIN_TIMESTEP = .001, Zi.MAX_TIMESTEP = 1, Zi.base64 = function(t, e) { return "data:" + t + ";base64," + e }, Zi.clamp = function(t, e, i) { return Math.min(Math.max(e, t), i) }, Zi.lerp = function(t, e, i) { return t + (e - t) * i }, Zi.race = function(n) { return Promise.race ? Promise.race(n) : new Promise(function(t, e) { for (var i = 0; i < n.length; i++) n[i].then(t, e) }) }, Zi.isIOS = (Wi = /iPad|iPhone|iPod/.test(navigator.platform), function() { return Wi }), Zi.isWebViewAndroid = (ki = -1 !== navigator.userAgent.indexOf("Version") && -1 !== navigator.userAgent.indexOf("Android") && -1 !== navigator.userAgent.indexOf("Chrome"), function() { return ki }), Zi.isSafari = (Xi = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), function() { return Xi }), Zi.isFirefoxAndroid = (Bi = -1 !== navigator.userAgent.indexOf("Firefox") && -1 !== navigator.userAgent.indexOf("Android"), function() { return Bi }), Zi.isR7 = (Yi = -1 !== navigator.userAgent.indexOf("R7 Build"), function() { return Yi }), Zi.isLandscapeMode = function() { var t = 90 == window.orientation || -90 == window.orientation; return Zi.isR7() ? !t : t }, Zi.isTimestampDeltaValid = function(t) { return !isNaN(t) && (!(t <= Zi.MIN_TIMESTEP) && !(t > Zi.MAX_TIMESTEP)) }, Zi.getScreenWidth = function() { return Math.max(window.screen.width, window.screen.height) * window.devicePixelRatio }, Zi.getScreenHeight = function() { return Math.min(window.screen.width, window.screen.height) * window.devicePixelRatio }, Zi.requestFullscreen = function(t) { if (Zi.isWebViewAndroid()) return !1; if (t.requestFullscreen) t.requestFullscreen();
        else if (t.webkitRequestFullscreen) t.webkitRequestFullscreen();
        else if (t.mozRequestFullScreen) t.mozRequestFullScreen();
        else { if (!t.msRequestFullscreen) return !1;
            t.msRequestFullscreen() } return !0 }, Zi.exitFullscreen = function() { if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else { if (!document.msExitFullscreen) return !1;
            document.msExitFullscreen() } return !0 }, Zi.getFullscreenElement = function() { return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement }, Zi.linkProgram = function(t, e, i, n) { var r = t.createShader(t.VERTEX_SHADER);
        t.shaderSource(r, e), t.compileShader(r); var o = t.createShader(t.FRAGMENT_SHADER);
        t.shaderSource(o, i), t.compileShader(o); var s = t.createProgram(); for (var a in t.attachShader(s, r), t.attachShader(s, o), n) t.bindAttribLocation(s, n[a], a); return t.linkProgram(s), t.deleteShader(r), t.deleteShader(o), s }, Zi.getProgramUniforms = function(t, e) { for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = "", o = 0; o < n; o++) { i[r = t.getActiveUniform(e, o).name.replace("[0]", "")] = t.getUniformLocation(e, r) } return i }, Zi.orthoMatrix = function(t, e, i, n, r, o, s) { var a = 1 / (e - i),
            h = 1 / (n - r),
            u = 1 / (o - s); return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * h, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * u, t[11] = 0, t[12] = (e + i) * a, t[13] = (r + n) * h, t[14] = (s + o) * u, t[15] = 1, t }, Zi.copyArray = function(t, e) { for (var i = 0, n = t.length; i < n; i++) e[i] = t[i] }, Zi.isMobile = function() { var t, e = !1; return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e }, Zi.extend = function(t, e) { for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]); return t }, Zi.safariCssSizeWorkaround = function(t) { if (Zi.isIOS()) { var e = t.style.width,
                i = t.style.height;
            t.style.width = parseInt(e) + 1 + "px", t.style.height = parseInt(i) + "px", setTimeout(function() { t.style.width = e, t.style.height = i }, 100) }
        window.Util = Zi, window.canvas = t }, Zi.isDebug = function() { return Zi.getQueryParameter("debug") }, Zi.getQueryParameter = function(t) { t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search); return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " ")) }, Zi.frameDataFromPose = (Gi = Math.PI / 180, Hi = .25 * Math.PI, ji = new Float32Array([0, 0, 0, 1]), qi = new Float32Array([0, 0, 0]), function(t, e, i) { return !(!t || !e || (t.pose = e, t.timestamp = e.timestamp, Ji(t.leftProjectionMatrix, t.leftViewMatrix, e, i.getEyeParameters("left"), i), Ji(t.rightProjectionMatrix, t.rightViewMatrix, e, i.getEyeParameters("right"), i), 0)) }), Zi.isInsideCrossDomainIFrame = function() { var t = window.self !== window.top,
            e = Zi.getDomainFromUrl(document.referrer),
            i = Zi.getDomainFromUrl(window.location.href); return t && e !== i }, Zi.getDomainFromUrl = function(t) { return (-1 < t.indexOf("://") ? t.split("/")[2] : t.split("/")[0]).split(":")[0] }; var $i = Zi;

    function tn(t) { this.predictionTimeS = t, this.previousQ = new Ki.Quaternion, this.previousTimestampS = null, this.deltaQ = new Ki.Quaternion, this.outQ = new Ki.Quaternion }
    tn.prototype.getPrediction = function(t, e, i) { if (!this.previousTimestampS) return this.previousQ.copy(t), this.previousTimestampS = i, t; var n = new Ki.Vector3;
        n.copy(e), n.normalize(); var r = e.length(); if (r < 20 * Ki.degToRad) return $i.isDebug() && console.log("Moving slowly, at %s deg/s: no prediction", (Ki.radToDeg * r).toFixed(1)), this.outQ.copy(t), this.previousQ.copy(t), this.outQ;
        this.previousTimestampS; var o = r * this.predictionTimeS; return this.deltaQ.setFromAxisAngle(n, o), this.outQ.copy(this.previousQ), this.outQ.multiply(this.deltaQ), this.previousQ.copy(t), this.previousTimestampS = i, this.outQ }; var en = tn,
        nn = -1,
        rn = null,
        on = null,
        sn = /Chrome\/([0-9]+)\.(?:[0-9]*)\.([0-9]*)\.([0-9]*)/i.exec(ht);
    sn && (nn = parseInt(sn[1], 10), rn = sn[2], on = sn[3]); var an = nn,
        hn = 65 === nn && "3325" === rn && parseInt(on, 10) < 148,
        un = /Android/i.test(ht),
        cn = [.2, .2],
        ln = { NONE: "none", YAWPITCH: "yawPitch", VR: "VR" },
        fn = function(e) {
            function t() { var t; return (t = e.call(this) || this)._onDeviceMotion = t._onDeviceMotion.bind(h(t)), t._onDeviceOrientation = t._onDeviceOrientation.bind(h(t)), t._onChromeWithoutDeviceMotion = t._onChromeWithoutDeviceMotion.bind(h(t)), t.isWithoutDeviceMotion = hn, t.isAndroid = un, t.stillGyroVec = P(), t.rawGyroVec = P(), t.adjustedGyroVec = P(), t._timer = null, t.lastDevicemotionTimestamp = 0, t._isEnabled = !1, t.enable(), t }
            r(t, e); var i = t.prototype; return i._onChromeWithoutDeviceMotion = function(t) { var e = t.alpha,
                    i = t.beta,
                    n = t.gamma;
                null !== e && (e = (e || 0) * Math.PI / 180, i = (i || 0) * Math.PI / 180, n = (n || 0) * Math.PI / 180, this.trigger("devicemotion", { inputEvent: { deviceorientation: { alpha: e, beta: i, gamma: -n } } })) }, i._onDeviceOrientation = function() { var i = this;
                this._timer && clearTimeout(this._timer), this._timer = setTimeout(function() { var t, e;
                    (new Date).getTime() - i.lastDevicemotionTimestamp < 200 && (t = i.stillGyroVec, e = i.rawGyroVec, t[0] = e[0], t[1] = e[1], t[2] = e[2]) }, 200) }, i._onDeviceMotion = function(t) { var e = !(null == t.rotationRate.alpha),
                    i = !(null == t.accelerationIncludingGravity.x); if (0 !== t.interval && e && i) { var n, r, o, s, a = u({}, t);
                    a.interval = t.interval, a.timeStamp = t.timeStamp, a.type = t.type, a.rotationRate = { alpha: t.rotationRate.alpha, beta: t.rotationRate.beta, gamma: t.rotationRate.gamma }, a.accelerationIncludingGravity = { x: t.accelerationIncludingGravity.x, y: t.accelerationIncludingGravity.y, z: t.accelerationIncludingGravity.z }, a.acceleration = { x: t.acceleration.x, y: t.acceleration.y, z: t.acceleration.z }, this.isAndroid && (n = this.rawGyroVec, r = t.rotationRate.alpha || 0, o = t.rotationRate.beta || 0, s = t.rotationRate.gamma || 0, n[0] = r, n[1] = o, n[2] = s, O(this.adjustedGyroVec, this.rawGyroVec, this.stillGyroVec), this.lastDevicemotionTimestamp = (new Date).getTime(), a.adjustedRotationRate = { alpha: this.adjustedGyroVec[0], beta: this.adjustedGyroVec[1], gamma: this.adjustedGyroVec[2] }), this.trigger("devicemotion", { inputEvent: a }) } }, i.enable = function() { this.isAndroid && tt.addEventListener("deviceorientation", this._onDeviceOrientation), this.isWithoutDeviceMotion ? tt.addEventListener("deviceorientation", this._onChromeWithoutDeviceMotion) : tt.addEventListener("devicemotion", this._onDeviceMotion), this._isEnabled = !0 }, i.disable = function() { tt.removeEventListener("deviceorientation", this._onDeviceOrientation), tt.removeEventListener("deviceorientation", this._onChromeWithoutDeviceMotion), tt.removeEventListener("devicemotion", this._onDeviceMotion), this._isEnabled = !1 }, t }(s);

    function dn(t, e) { this.set(t, e) }
    dn.prototype.set = function(t, e) { this.sample = t, this.timestampS = e }, dn.prototype.copy = function(t) { this.set(t.sample, t.timestampS) }; var pn = dn;

    function vn(t) { this.kFilter = t, this.currentAccelMeasurement = new pn, this.currentGyroMeasurement = new pn, this.previousGyroMeasurement = new pn, $i.isIOS() ? this.filterQ = new Ki.Quaternion(-1, 0, 0, 1) : this.filterQ = new Ki.Quaternion(1, 0, 0, 1), this.previousFilterQ = new Ki.Quaternion, this.previousFilterQ.copy(this.filterQ), this.accelQ = new Ki.Quaternion, this.isOrientationInitialized = !1, this.estimatedGravity = new Ki.Vector3, this.measuredGravity = new Ki.Vector3, this.gyroIntegralQ = new Ki.Quaternion }
    vn.prototype.addAccelMeasurement = function(t, e) { this.currentAccelMeasurement.set(t, e) }, vn.prototype.addGyroMeasurement = function(t, e) { this.currentGyroMeasurement.set(t, e); var i = e - this.previousGyroMeasurement.timestampS;
        $i.isTimestampDeltaValid(i) && this.run_(), this.previousGyroMeasurement.copy(this.currentGyroMeasurement) }, vn.prototype.run_ = function() { if (!this.isOrientationInitialized) return this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample), this.previousFilterQ.copy(this.accelQ), void(this.isOrientationInitialized = !0); var t = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS,
            e = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, t);
        this.gyroIntegralQ.multiply(e), this.filterQ.copy(this.previousFilterQ), this.filterQ.multiply(e); var i = new Ki.Quaternion;
        i.copy(this.filterQ), i.inverse(), this.estimatedGravity.set(0, 0, -1), this.estimatedGravity.applyQuaternion(i), this.estimatedGravity.normalize(), this.measuredGravity.copy(this.currentAccelMeasurement.sample), this.measuredGravity.normalize(); var n = new Ki.Quaternion;
        n.setFromUnitVectors(this.estimatedGravity, this.measuredGravity), n.inverse(), $i.isDebug() && console.log("Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)", Ki.radToDeg * $i.getQuaternionAngle(n), this.estimatedGravity.x.toFixed(1), this.estimatedGravity.y.toFixed(1), this.estimatedGravity.z.toFixed(1), this.measuredGravity.x.toFixed(1), this.measuredGravity.y.toFixed(1), this.measuredGravity.z.toFixed(1)); var r = new Ki.Quaternion;
        r.copy(this.filterQ), r.multiply(n), this.filterQ.slerp(r, 1 - this.kFilter), this.previousFilterQ.copy(this.filterQ) }, vn.prototype.getOrientation = function() { return this.filterQ }, vn.prototype.accelToQuaternion_ = function(t) { var e = new Ki.Vector3;
        e.copy(t), e.normalize(); var i = new Ki.Quaternion; return i.setFromUnitVectors(new Ki.Vector3(0, 0, -1), e), i.inverse(), i }, vn.prototype.gyroToQuaternionDelta_ = function(t, e) { var i = new Ki.Quaternion,
            n = new Ki.Vector3; return n.copy(t), n.normalize(), i.setFromAxisAngle(n, t.length() * e), i }; var mn = vn;
    mn.prototype.run_ = function() { if (!this.isOrientationInitialized) return this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample), this.previousFilterQ.copy(this.accelQ), void(this.isOrientationInitialized = !0); var t = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS,
            e = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, t);
        this.gyroIntegralQ.multiply(e), this.filterQ.copy(this.previousFilterQ), this.filterQ.multiply(e); var i = new Ki.Quaternion;
        i.copy(this.filterQ), i.inverse(), this.estimatedGravity.set(0, 0, -1), this.estimatedGravity.applyQuaternion(i), this.estimatedGravity.normalize(), this.measuredGravity.copy(this.currentAccelMeasurement.sample), this.measuredGravity.normalize(); var n = new Ki.Quaternion;
        n.setFromUnitVectors(this.estimatedGravity, this.measuredGravity), n.inverse(); var r = new Ki.Quaternion;
        r.copy(this.filterQ), r.multiply(n), this.filterQ.slerp(r, 1 - this.kFilter), this.previousFilterQ.copy(this.filterQ), this.isFilterQuaternionInitialized || (this.isFilterQuaternionInitialized = !0) }, mn.prototype.getOrientation = function() { return this.isFilterQuaternionInitialized ? this.filterQ : null }; var gn = function(e) {
        function t() { var t; return (t = e.call(this) || this).deviceMotion = new fn, t.accelerometer = new Ki.Vector3, t.gyroscope = new Ki.Vector3, t._onDeviceMotionChange = t._onDeviceMotionChange.bind(h(t)), t._onScreenOrientationChange = t._onScreenOrientationChange.bind(h(t)), t.filter = new mn(.98), t.posePredictor = new en(.04), t.filterToWorldQ = new Ki.Quaternion, t.isFirefoxAndroid = $i.isFirefoxAndroid(), t.isIOS = $i.isIOS(), t.isChromeUsingDegrees = 66 <= an, t._isEnabled = !1, t.isIOS ? t.filterToWorldQ.setFromAxisAngle(new Ki.Vector3(1, 0, 0), Math.PI / 2) : t.filterToWorldQ.setFromAxisAngle(new Ki.Vector3(1, 0, 0), -Math.PI / 2), t.inverseWorldToScreenQ = new Ki.Quaternion, t.worldToScreenQ = new Ki.Quaternion, t.originalPoseAdjustQ = new Ki.Quaternion, t.originalPoseAdjustQ.setFromAxisAngle(new Ki.Vector3(0, 0, 1), -tt.orientation * Math.PI / 180), t._setScreenTransform(), $i.isLandscapeMode() && t.filterToWorldQ.multiply(t.inverseWorldToScreenQ), t.resetQ = new Ki.Quaternion, t.deviceMotion.on("devicemotion", t._onDeviceMotionChange), t.enable(), t }
        r(t, e); var i = t.prototype; return i.enable = function() { this.isEnabled() || (this.deviceMotion.enable(), this._isEnabled = !0, tt.addEventListener("orientationchange", this._onScreenOrientationChange)) }, i.disable = function() { this.isEnabled() && (this.deviceMotion.disable(), this._isEnabled = !1, tt.removeEventListener("orientationchange", this._onScreenOrientationChange)) }, i.isEnabled = function() { return this._isEnabled }, i.destroy = function() { this.disable(), this.deviceMotion = null }, i._triggerChange = function() { var t = this.getOrientation();
            t && (this._prevOrientation ? j(this._prevOrientation, t) || this.trigger("change", { quaternion: t }) : this._prevOrientation = t) }, i.getOrientation = function() { var t, e = this; if (this.deviceMotion.isWithoutDeviceMotion && this._deviceOrientationQ) { this.deviceOrientationFixQ = this.deviceOrientationFixQ || (new Ki.Quaternion).setFromAxisAngle(new Ki.Vector3(0, 1, 0), -e._alpha), t = this._deviceOrientationQ; var i = new Ki.Quaternion;
                i.copy(t), i.multiply(this.filterToWorldQ), i.multiply(this.resetQ), i.multiply(this.worldToScreenQ), i.multiplyQuaternions(this.deviceOrientationFixQ, i); var n = B(i.x, i.y, i.z, i.w); return G(n, n) } if (!(t = this.filter.getOrientation())) return null; var r = this._convertFusionToPredicted(t),
                o = B(r.x, r.y, r.z, r.w); return G(o, o) }, i._convertFusionToPredicted = function(t) { this.predictedQ = this.posePredictor.getPrediction(t, this.gyroscope, this.previousTimestampS); var e = new Ki.Quaternion; return e.copy(this.filterToWorldQ), e.multiply(this.resetQ), e.multiply(this.predictedQ), e.multiply(this.worldToScreenQ), e }, i._onDeviceMotionChange = function(t) { var e = t.inputEvent,
                i = e.deviceorientation,
                n = e.accelerationIncludingGravity,
                r = e.adjustedRotationRate || e.rotationRate,
                o = e.timeStamp / 1e3;
            i ? (this._alpha || (this._alpha = i.alpha), this._deviceOrientationQ = this._deviceOrientationQ || new Ki.Quaternion, this._deviceOrientationQ.setFromEulerYXZ(i.beta, i.alpha, i.gamma), this._triggerChange()) : (this.isFirefoxAndroid && (o /= 1e3), this.accelerometer.set(-n.x, -n.y, -n.z), this.gyroscope.set(r.alpha, r.beta, r.gamma), (this.isIOS || this.isFirefoxAndroid || this.isChromeUsingDegrees) && this.gyroscope.multiplyScalar(Math.PI / 180), this.filter.addAccelMeasurement(this.accelerometer, o), this.filter.addGyroMeasurement(this.gyroscope, o), this._triggerChange(), this.previousTimestampS = o) }, i._onScreenOrientationChange = function() { this._setScreenTransform(tt.orientation) }, i._setScreenTransform = function() { this.worldToScreenQ.set(0, 0, 0, 1); var t = tt.orientation; switch (t) {
                case 0:
                    break;
                case 90:
                case -90:
                case 180:
                    this.worldToScreenQ.setFromAxisAngle(new Ki.Vector3(0, 0, 1), t / -180 * Math.PI) }
            this.inverseWorldToScreenQ.copy(this.worldToScreenQ), this.inverseWorldToScreenQ.inverse() }, t }(s); var _n = function(n) {
            function t(t, e) { var i; return (i = n.call(this) || this).element = t, i._prevQuaternion = null, i._quaternion = null, i.fusionPoseSensor = null, i.options = u({ scale: 1, threshold: 0 }, e), i._onPoseChange = i._onPoseChange.bind(h(i)), i }
            r(t, n); var e = t.prototype; return e.mapAxes = function(t) { this.axes = t }, e.connect = function(t) { return this.observer || (this.observer = t, this.fusionPoseSensor = new gn, this.fusionPoseSensor.enable(), this._attachEvent()), this }, e.disconnect = function() { return this.observer && (this._dettachEvent(), this.fusionPoseSensor.disable(), this.fusionPoseSensor.destroy(), this.fusionPoseSensor = null, this.observer = null), this }, e.destroy = function() { this.disconnect(), this.element = null, this.options = null, this.axes = null, this._prevQuaternion = null, this._quaternion = null }, e._onPoseChange = function(t) { if (!this._prevQuaternion) return this._prevQuaternion = X(t.quaternion), void(this._quaternion = X(t.quaternion)); var n, e, i, r, o, s;
                Y(this._prevQuaternion, this._quaternion), Y(this._quaternion, t.quaternion), this.observer.change(this, t, (n = this.axes, [(r = this._prevQuaternion, o = this._quaternion, s = Fi.getRotationDelta(r, o, Vi.YAW_DELTA_BY_YAW), Fi.getRotationDelta(r, o, Vi.YAW_DELTA_BY_ROLL) * Math.sin(Fi.extractPitchFromQuat(o)) + s), (e = this._prevQuaternion, i = this._quaternion, Fi.getRotationDelta(e, i, Vi.PITCH_DELTA))].reduce(function(t, e, i) { return n[i] && (t[n[i]] = e), t }, {}))) }, e._attachEvent = function() { this.fusionPoseSensor.on("change", this._onPoseChange) }, e._dettachEvent = function() { this.fusionPoseSensor.off("change", this._onPoseChange) }, t }(s),
        yn = null,
        xn = 0,
        wn = function() {
            function t() { if (xn++, yn) return yn;
                (yn = this)._onDeviceOrientation = this._onDeviceOrientation.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._spinR = 0, this._screenOrientationAngle = 0, tt.addEventListener("deviceorientation", this._onDeviceOrientation), tt.addEventListener("orientationchange", this._onOrientationChange) } var e = t.prototype; return e._onDeviceOrientation = function(t) { if (null !== t.beta && null !== t.gamma) { var e = x(t.beta),
                        i = x(t.gamma);
                    this._spinR = Math.atan2(Math.cos(e) * Math.sin(i), Math.sin(e)) } }, e._onOrientationChange = function() { tt.screen && tt.screen.orientation && void 0 !== tt.screen.orientation.angle ? this._screenOrientationAngle = screen.orientation.angle : void 0 !== tt.orientation && (this._screenOrientationAngle = 0 <= tt.orientation ? tt.orientation : 360 + tt.orientation) }, e.getRadian = function() { return this._spinR + x(this._screenOrientationAngle) }, e.unref = function() { 0 < --xn || (tt.removeEventListener("deviceorientation", this._onDeviceOrientation), tt.removeEventListener("orientationchange", this._onOrientationChange), this._spinR = 0, this._screenOrientationAngle = 0, yn = null, xn = 0) }, t }(),
        En = function(a) {
            function t(t, e) { var i; return (i = a.call(this, t, e) || this)._useRotation = !1, i._screenRotationAngle = null, i.setUseRotation(!(!e || !e.useRotation)), i._userDirection = Ei.DIRECTION_ALL, i }
            r(t, a); var e = t.prototype; return e.setUseRotation = function(t) { this._useRotation = t, this._screenRotationAngle && (this._screenRotationAngle.unref(), this._screenRotationAngle = null), this._useRotation && (this._screenRotationAngle = new wn) }, e.connect = function(t) { this._userDirection = this._direction, this._useRotation && this._direction & Ei.DIRECTION_ALL && (this._direction = Ei.DIRECTION_HORIZONTAL), a.prototype.connect.call(this, t) }, e.getOffset = function(t, e) { if (!1 === this._useRotation) return a.prototype.getOffset.call(this, t, e); var i = a.prototype.getOffset.call(this, t, [!0, !0]),
                    n = [0, 0],
                    r = this._screenRotationAngle.getRadian(),
                    o = Math.cos(r),
                    s = Math.sin(r); return n[0] = i[0] * o - i[1] * s, n[1] = i[1] * o + i[0] * s, this._userDirection & Ei.DIRECTION_HORIZONTAL ? this._userDirection & Ei.DIRECTION_VERTICAL || (n[1] = 0) : n[0] = 0, n }, e.destroy = function() { this._useRotation && this._screenRotationAngle && this._screenRotationAngle.unref(), a.prototype.destroy.call(this) }, t }(Ci),
        Tn = S(0, 1, 0),
        bn = function(t) {
            function e() { var e; return (e = t.call(this) || this)._fusionPoseSensor = new gn, e._quaternion = L(), e._fusionPoseSensor.enable(), e._fusionPoseSensor.on("change", function(t) { e._quaternion = t.quaternion, e.trigger("change", { isTrusted: !0 }) }), e }
            r(e, t); var i = e.prototype; return i.getCombinedQuaternion = function(t) { var e, i, n, r, o, s, a, h, u, c, l, f, d, p = F(L(), Tn, x(-t)),
                    v = (e = L(), i = this._quaternion, e[0] = -i[0], e[1] = -i[1], e[2] = -i[2], e[3] = i[3], e); return n = L(), o = p, s = (r = v)[0], a = r[1], h = r[2], u = r[3], c = o[0], l = o[1], f = o[2], d = o[3], n[0] = s * d + u * c + a * f - h * l, n[1] = a * d + u * l + h * c - s * f, n[2] = h * d + u * f + s * l - a * c, n[3] = u * d - s * c - a * l - h * f, n }, i.destroy = function() { this.off(), this._fusionPoseSensor && (this._fusionPoseSensor.off(), this._fusionPoseSensor.destroy(), this._fusionPoseSensor = null) }, e }(s),
        Rn = "3.3.2",
        Pn = [-180, 180],
        An = [-90, 90],
        Sn = [-180, 180],
        On = function() { var t = function(n) {
                function h(t) { var e;
                    e = n.call(this) || this; var i = u({ element: null, yaw: 0, pitch: 0, fov: 65, showPolePoint: !1, useZoom: !0, useKeyboard: !0, gyroMode: ln.YAWPITCH, touchDirection: 6, yawRange: Pn, pitchRange: An, fovRange: [30, 110], aspectRatio: 1 }, t); return e._element = i.element, e._initialFov = i.fov, e._enabled = !1, e._isAnimating = !1, e._deviceQuaternion = null, e._initAxes(i), e.option(i), e }
                r(h, n); var t = h.prototype; return t._initAxes = function(t) { var e = this,
                        i = this._updateYawRange(t.yawRange, t.fov, t.aspectRatio),
                        n = this._updatePitchRange(t.pitchRange, t.fov, t.showPolePoint),
                        r = t.gyroMode === ln.VR;
                    this.axesPanInput = new En(this._element, { useRotation: r }), this.axesWheelInput = new Mi(this._element, { scale: -4 }), this.axesTiltMotionInput = null, this.axesPinchInput = ut ? new Ii(this._element, { scale: -1 }) : null, this.axesMoveKeyInput = new Di(this._element, { scale: [-6, 6] }), this.axes = new Ei({ yaw: { range: i, circular: h.isCircular(i), bounce: [0, 0] }, pitch: { range: n, circular: h.isCircular(n), bounce: [0, 0] }, fov: { range: t.fovRange, circular: [!1, !1], bounce: [0, 0] } }, { deceleration: .0014, maximumDuration: 1e3 }, { yaw: t.yaw, pitch: t.pitch, fov: t.fov }).on({ hold: function(t) { e.axes.options.maximumDuration = 1e3, e.trigger("hold", { isTrusted: t.isTrusted }) }, change: function(t) { 0 !== t.delta.fov && (e._updateControlScale(t), e.updatePanScale()), e._triggerChange(t) }, release: function(t) { e._triggerChange(t) }, animationStart: function() {}, animationEnd: function(t) { e.trigger("animationEnd", { isTrusted: t.isTrusted }) } }) }, t.updatePanScale = function(t) { void 0 === t && (t = {}); var e = this.axes.get().fov,
                        i = t.height || parseInt(at(this._element).height, 10),
                        n = cn[0] * e / this._initialFov * 320 / i; return this.axesPanInput.options.scale = [n, n], this.axes.options.deceleration = .0014 * e / 110, this }, t.option = function() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]; var n = e.length; if (0 === n) return this._getOptions(); if (1 === n && "string" == typeof e[0]) return this._getOptions(e[0]); var r = u({}, this.options),
                        o = {},
                        s = []; return 1 === n ? (s = Object.keys(e[0]), o = u({}, e[0])) : 2 <= n && (s.push(e[0]), o[e[0]] = e[1]), this._setOptions(this._getValidatedOptions(o)), this._applyOptions(s, r), this }, t._getValidatedOptions = function(t) { return t.yawRange && (t.yawRange = this._getValidYawRange(t.yawRange, t.fov, t.aspectRatio)), t.pitchRange && (t.pitchRange = this._getValidPitchRange(t.pitchRange, t.fov)), t }, t._getOptions = function(t) { var e; return "string" == typeof t ? e = this.options[t] : 0 === arguments.length && (e = this.options), e }, t._setOptions = function(t) { for (var e in t) this.options[e] = t[e] }, t._applyOptions = function(t) { var e = this.options,
                        i = this.axes,
                        n = e.gyroMode === ln.VR,
                        r = e.gyroMode === ln.YAWPITCH,
                        o = n ? 2 & e.touchDirection : e.touchDirection; if (t.some(function(t) { return "showPolePoint" === t || "fov" === t || "aspectRatio" === t || "yawRange" === t || "pitchRange" === t }) && (0 <= t.indexOf("fov") && (i.setTo({ fov: e.fov }), this.updatePanScale()), this._updateControlScale()), t.some(function(t) { return "fovRange" === t })) { var s = e.fovRange,
                            a = i.get().fov,
                            h = i.get().fov;
                        K(i.axis.fov.range, s), h < s[0] ? h = s[0] : a > s[1] && (h = s[1]), a !== h && (i.setTo({ fov: h }, 0), this._updateControlScale(), this.updatePanScale()) }
                    t.some(function(t) { return "gyroMode" === t }) && ct && (this.axesTiltMotionInput && (this.axes.disconnect(this.axesTiltMotionInput), this.axesTiltMotionInput.destroy(), this.axesTiltMotionInput = null), this._deviceQuaternion && (this._deviceQuaternion.destroy(), this._deviceQuaternion = null), n ? this._initDeviceQuaternion() : r && (this.axesTiltMotionInput = new _n(this._element), this.axes.connect(["yaw", "pitch"], this.axesTiltMotionInput)), this.axesPanInput.setUseRotation(n)), t.some(function(t) { return "useKeyboard" === t }) && (e.useKeyboard ? i.connect(["yaw", "pitch"], this.axesMoveKeyInput) : i.disconnect(this.axesMoveKeyInput)); if (t.some(function(t) { return "useZoom" === t })) { var u = e.useZoom;
                        i.disconnect(this.axesWheelInput), u && i.connect(["fov"], this.axesWheelInput) }
                    this._togglePinchInputByOption(e.touchDirection, e.useZoom), t.some(function(t) { return "touchDirection" === t }) && this._enabled && this._enableTouch(o) }, t._togglePinchInputByOption = function(t, e) { this.axesPinchInput && (this.axes.disconnect(this.axesPinchInput), e && 6 === t && -1 === this.axes._inputs.indexOf(this.axesPinchInput) && this.axes.connect(["fov"], this.axesPinchInput)) }, t._enableTouch = function(t) { this.axesPanInput && this.axes.disconnect(this.axesPanInput); var e = 2 & t ? "yaw" : null,
                        i = 4 & t ? "pitch" : null;
                    this.axes.connect([e, i], this.axesPanInput) }, t._initDeviceQuaternion = function() { var e = this;
                    this._deviceQuaternion = new bn, this._deviceQuaternion.on("change", function(t) { e._triggerChange(t) }) }, t._getValidYawRange = function(t, e, i) { var n = h.adjustAspectRatio(i || this.options.aspectRatio || 1),
                        r = (e || this.axes.get().fov) * n; return t[1] - t[0] >= r ? t : this.options.yawRange || Pn }, t._getValidPitchRange = function(t, e) { var i = e || this.axes.get().fov; return t[1] - t[0] >= i ? t : this.options.pitchRange || An }, h.isCircular = function(t) { return t[1] - t[0] < 360 ? [!1, !1] : [!0, !0] }, t._updateControlScale = function(t) { var e = this.options,
                        i = this.axes.get().fov,
                        n = this._updatePitchRange(e.pitchRange, i, e.showPolePoint),
                        r = this._updateYawRange(e.yawRange, i, e.aspectRatio),
                        o = this.axes.get(),
                        s = o.yaw,
                        a = o.pitch; return K(this.axes.axis.yaw.range, r), K(this.axes.axis.pitch.range, n), this.axes.axis.yaw.circular = h.isCircular(r), this.axes.axis.pitch.circular = h.isCircular(n), s < r[0] ? s = r[0] : s > r[1] && (s = r[1]), a < n[0] ? a = n[0] : a > n[1] && (a = n[1]), t && t.set({ yaw: s, pitch: a }), this.axes.setTo({ yaw: s, pitch: a }, 0), this }, t._updatePitchRange = function(t, e, i) { if (this.options.gyroMode === ln.VR) return Sn; var n = t[1] - t[0],
                        r = e / 2; return i && !(n < 180) ? t.concat() : [t[0] + r, t[1] - r] }, t._updateYawRange = function(t, e, i) { if (this.options.gyroMode === ln.VR) return Pn; if (360 <= t[1] - t[0]) return t.concat(); var n = Fi.toDegree(Math.atan2(i, 1 / Math.tan(x(e / 2)))); return [t[0] + n, t[1] - n] }, t._triggerChange = function(t) { var e = this.axes.get(),
                        i = this.options,
                        n = { targetElement: i.element, isTrusted: t.isTrusted };
                    n.yaw = e.yaw, n.pitch = e.pitch, n.fov = e.fov, i.gyroMode === ln.VR && this._deviceQuaternion && (n.quaternion = this._deviceQuaternion.getCombinedQuaternion(e.yaw)), this.trigger("change", n) }, h.adjustAspectRatio = function(t) { for (var e = [.52, .54, .563, .57, .584, .59, .609, .67, .702, .72, .76, .78, .82, .92, .97, 1, 1.07, 1.14, 1.19, 1.25, 1.32, 1.38, 1.4, 1.43, 1.53, 1.62, 1.76, 1.77, 1.86, 1.96, 2.26, 2.3, 2.6, 3, 5, 6], i = [.51, .54, .606, .56, .628, .63, .647, .71, .736, .757, .78, .77, .8, .89, .975, 1, 1.07, 1.1, 1.15, 1.18, 1.22, 1.27, 1.3, 1.33, 1.39, 1.45, 1.54, 1.55, 1.58, 1.62, 1.72, 1.82, 1.92, 2, 2.24, 2.3], n = -1, r = 0; r < e.length - 1; r++)
                        if (e[r] <= t && t <= e[r + 1]) { n = r; break }
                    if (-1 === n) return t < e[0] ? i[0] : i[i[0].length - 1]; var o = e[n]; return h.lerp(i[n], i[n + 1], (t - o) / (e[n + 1] - o)) }, h.lerp = function(t, e, i) { return t + i * (e - t) }, t.enable = function() { return this._enabled || (this._enabled = !0, this._applyOptions(Object.keys(this.options), this.options), this.updatePanScale()), this }, t.disable = function(t) { return this._enabled && (t || this._resetOrientation(), this.axes.disconnect(), this._enabled = !1), this }, t._resetOrientation = function() { var t = this.options; return this.axes.setTo({ yaw: t.yaw, pitch: t.pitch, fov: t.fov }, 0), this }, t.lookAt = function(t, e) { var i = t.yaw,
                        n = t.pitch,
                        r = t.fov,
                        o = this.axes.get(),
                        s = void 0 === i ? 0 : i - o.yaw,
                        a = void 0 === n ? 0 : n - o.pitch,
                        h = void 0 === r ? 0 : r - o.fov;
                    this.axes.options.maximumDuration = 1 / 0, this.axes.setBy({ yaw: s, pitch: a, fov: h }, e) }, t.getYawPitch = function() { var t = this.axes.get(); return { yaw: t.yaw, pitch: t.pitch } }, t.getFov = function() { return this.axes.get().fov }, t.getQuaternion = function() { var t = this.axes.get(); return this._deviceQuaternion.getCombinedQuaternion(t.yaw) }, t.shouldRenderWithQuaternion = function() { return this.options.gyroMode === ln.VR }, t.destroy = function() { this.axes && this.axes.destroy(), this.axisPanInput && this.axisPanInput.destroy(), this.axesWheelInput && this.axesWheelInput.destroy(), this.axesTiltMotionInput && this.axesTiltMotionInput.destroy(), this.axesDeviceOrientationInput && this.axesDeviceOrientationInput.destroy(), this.axesPinchInput && this.axesPinchInput.destroy(), this.axesMoveKeyInput && this.axesMoveKeyInput.destroy(), this._deviceQuaternion && this._deviceQuaternion.destroy() }, h }(s); return t.VERSION = Rn, t.CONTROL_MODE_VR = 1, t.CONTROL_MODE_YAWPITCH = 2, t.TOUCH_DIRECTION_ALL = 6, t.TOUCH_DIRECTION_YAW = 2, t.TOUCH_DIRECTION_PITCH = 4, t.TOUCH_DIRECTION_NONE = 1, t }(),
        Cn = "undefined" == typeof Promise ? o.Promise : Promise,
        In = { NONE: 0, LOADING: 1, LOADED: 2, ERROR: 3 },
        Mn = "readystatechange",
        Dn = function() { var t = function(i) {
                function s(t) { var e; return (e = i.call(this) || this)._image = null, e._onceHandlers = [], e._loadStatus = In.NONE, t && e.set(t), e }
                r(s, i); var t = s.prototype; return t.get = function() { var n = this; return new Cn(function(e, i) { n._image ? n._loadStatus === In.LOADED ? e(n.getElement()) : n._loadStatus === In.LOADING ? s.isMaybeLoaded(n._image) ? (n._loadStatus = In.LOADED, e(n.getElement())) : n.on(Mn, function(t) { t.type === In.LOADED ? e(n.getElement()) : i("ImageLoader: failed to load images.") }) : i("ImageLoader: failed to load images") : i("ImageLoader: image is not defiend") }) }, t.set = function(t) { var e = this;
                    this._loadStatus = In.LOADING, this._image = s.createElement(t), s.isMaybeLoaded(this._image) ? this._loadStatus = In.LOADED : this.onceLoaded(this._image, function() { e._loadStatus = In.LOADED, e.trigger(Mn, { type: In.LOADED }) }, function() { e._loadStatus = In.ERROR, e.trigger(Mn, { type: In.ERROR }) }) }, s.createElement = function(t) { return (t instanceof Array ? t : [t]).map(function(t) { var e = t; return "string" == typeof t && ((e = new Image).crossOrigin = "anonymous", e.src = t), e }) }, t.getElement = function() { return 1 === this._image.length ? this._image[0] : this._image }, s.isMaybeLoaded = function(t) { var e = !1; return t instanceof Image ? e = t.complete && 0 !== t.naturalWidth : t instanceof Array && (e = !t.some(function(t) { return !t.complete || 0 === t.naturalWidth })), e }, t.onceLoaded = function(t, e, i) { var n = this,
                        r = t instanceof Array ? t : [t],
                        o = r.filter(function(t) { return !s.isMaybeLoaded(t) }).map(function(i) { return new Cn(function(t, e) { n._once(i, "load", function() { return t(i) }), n._once(i, "error", function() { return e(i) }) }) });
                    Cn.all(o).then(function(t) { return e(1 === r.length ? r[0] : r) }, function(t) { return i(t) }) }, t._once = function(e, i, n) {
                    function r(t) { e.removeEventListener(i, r), n(t) }
                    e.addEventListener(i, r), this._onceHandlers.push({ target: e, type: i, fn: r }) }, t.getStatus = function() { return this._loadStatus }, t.destroy = function() { this._onceHandlers.forEach(function(t) { t.target.removeEventListener(t.type, t.fn) }), this._onceHandlers = [], this._image.src = "", this._image = null, this._loadStatus = In.NONE }, s }(s); return t.STATUS = In, t }(),
        Ln = "undefined" == typeof Promise ? o.Promise : Promise,
        Fn = 0,
        Vn = 1,
        Nn = 2,
        Un = 3,
        zn = 4,
        Qn = -1,
        Wn = {};
    Wn[Vn] = "loadedmetadata", Wn[Nn] = "loadeddata", Wn[Un] = "canplay", Wn[zn] = "canplaythrough"; var kn = function() {
            function t(t) { this._handlers = [], this._sourceCount = 0, this._thresholdReadyState = Vn, this._thresholdEventName = Wn[this._thresholdReadyState], this._loadStatus = t && t.readyState || Fn, this._onerror = this._onerror.bind(this), t && this.set(t) } var e = t.prototype; return e._onerror = function() { this._errorCount++, this._errorCount >= this._sourceCount && (this._loadStatus = Qn, this._detachErrorHandler(this._onerror)) }, e._appendSourceElement = function(t) { var e, i; if ("object" == typeof t ? (e = t.src, i = t.type) : "string" == typeof t && (e = t), !e) return !1; var n = document.createElement("source"); return n.src = e, i && (n.type = i), this._video.appendChild(n), !0 }, e.set = function(t) { var e = this;
                this._reset(), t && (t instanceof HTMLVideoElement ? this._video = t : "string" != typeof t && "object" != typeof t || (this._video = document.createElement("video"), this._video.setAttribute("crossorigin", "anonymous"), this._video.setAttribute("webkit-playsinline", ""), this._video.setAttribute("playsinline", ""), t instanceof Array ? t.forEach(function(t) { return e._appendSourceElement(t) }) : this._appendSourceElement(t), this._sourceCount = this._video.querySelectorAll("source").length, 0 < this._sourceCount ? this._video.readyState < this._thresholdReadyState && (this._video.load(), this._attachErrorHandler(this._onerror)) : this._video = null)) }, e._attachErrorHandler = function(e) { this._video.addEventListener("error", e), this._sources = this._video.querySelectorAll("source"), [].forEach.call(this._sources, function(t) { t.addEventListener("error", e) }) }, e._detachErrorHandler = function(e) { this._video.removeEventListener("error", e), [].forEach.call(this._sources, function(t) { t.removeEventListener("error", e) }) }, e.get = function() { var i = this; return new Ln(function(t, e) { if (i._video)
                        if (i._loadStatus === Qn) e("VideoLoader: video source is invalid");
                        else if (i._video.readyState >= i._thresholdReadyState) t(i._video);
                    else { i._attachErrorHandler(function t() { i._loadStatus === Qn && (i._detachErrorHandler(t), e("VideoLoader: video source is invalid")) }), i._once(i._thresholdEventName, function() { return t(i._video) }) } else e("VideoLoader: video is undefined") }) }, e.getElement = function() { return this._video }, e.destroy = function() { this._reset() }, e._reset = function() { var e = this;
                this._handlers.forEach(function(t) { e._video.removeEventListener(t.type, t.fn) }), this._handlers = [], this._video = null, this._sourceCount = 0, this._errorCount = 0 }, e._once = function(e, i) {
                function n(t) { r.removeEventListener(e, n), i(t) } var r = this._video;
                r.addEventListener(e, n, !0), this._handlers.push({ type: e, fn: n }) }, t }(),
        Xn = "undefined" != typeof window && window || {},
        Bn = Xn.navigator,
        Yn = { browser: [{ criteria: "PhantomJS", identity: "PhantomJS" }, { criteria: /Whale/, identity: "Whale", versionSearch: "Whale" }, { criteria: /Edge/, identity: "Edge", versionSearch: "Edge" }, { criteria: /MSIE|Trident|Windows Phone/, identity: "IE", versionSearch: "IEMobile|MSIE|rv" }, { criteria: /MiuiBrowser/, identity: "MIUI Browser", versionSearch: "MiuiBrowser" }, { criteria: /SamsungBrowser/, identity: "Samsung Internet", versionSearch: "SamsungBrowser" }, { criteria: /SAMSUNG /, identity: "Samsung Internet", versionSearch: "Version" }, { criteria: /Chrome|CriOS/, identity: "Chrome" }, { criteria: /Android/, identity: "Android Browser", versionSearch: "Version" }, { criteria: /iPhone|iPad/, identity: "Safari", versionSearch: "Version" }, { criteria: "Apple", identity: "Safari", versionSearch: "Version" }, { criteria: "Firefox", identity: "Firefox" }], os: [{ criteria: /Windows Phone/, identity: "Windows Phone", versionSearch: "Windows Phone" }, { criteria: "Windows 2000", identity: "Window", versionAlias: "5.0" }, { criteria: /Windows NT/, identity: "Window", versionSearch: "Windows NT" }, { criteria: /iPhone|iPad/, identity: "iOS", versionSearch: "iPhone OS|CPU OS" }, { criteria: "Mac", versionSearch: "OS X", identity: "MAC" }, { criteria: /Android/, identity: "Android" }, { criteria: /Tizen/, identity: "Tizen" }, { criteria: /Web0S/, identity: "WebOS" }], webview: [{ criteria: /iPhone|iPad/, browserVersionSearch: "Version", webviewBrowserVersion: /-1/ }, { criteria: /iPhone|iPad|Android/, webviewToken: /NAVER|DAUM|; wv/ }], defaultString: { browser: { version: "-1", name: "unknown" }, os: { version: "-1", name: "unknown" } } };

    function Gn(t, e) { for (var i = [], n = 0; n < t.length; n++) e(t[n]) && i.push(t[n]); return i } var Hn = void 0;

    function jn(t, e) { return e && e.test ? !!e.test(t) : -1 < t.indexOf(e) }

    function qn(t, e) { var i = Gn(t, function(t) { return jn(Hn, t.criteria) })[0]; return i && i.identity || e.name }

    function Kn(t, n) { return Gn(t, function(t) { var e = t.criteria,
                i = new RegExp(t.identity, "i").test(n); return !!(e ? i && jn(Hn, e) : i) })[0] }

    function Zn(t, e) { var i = Yn.defaultString.browser.version,
            n = new RegExp("(" + t + ")", "i").exec(e); if (!n) return i; var r = n.index,
            o = n[0]; if (-1 < r) { var s = r + o.length + 1;
            i = e.substring(s).split(" ")[0].replace(/_/g, ".").replace(/;|\)/g, "") } return i }

    function Jn(t) { var e; if (t) return Zn((e = t, Kn(Yn.browser, e) || { criteria: e, versionSearch: e, identity: e }).versionSearch || t, Hn) }

    function $n() { var t = Yn.webview,
            e = void 0; return function(t, e) { for (var i = 0; i < t.length; i++)
                if (e(t[i])) return !0;
            return !1 }(Gn(t, function(t) { return jn(Hn, t.criteria) }), function(t) { return e = Zn(t.browserVersionSearch, Hn), !(!jn(Hn, t.webviewToken) && !jn(e, t.webviewBrowserVersion)) }) }

    function tr(t) { var e, i = (e = t, Kn(Yn.os, e) || {}),
            n = Yn.defaultString.os.version,
            r = void 0; if (t) { if (i.versionAlias) return i.versionAlias; var o = new RegExp("(" + (i.versionSearch || t) + ")\\s([\\d_\\.]+|\\d_0)", "i"); return o.exec(Hn) && (r = o.exec(Hn)[2].replace(/_/g, ".").replace(/;|\)/g, "")), r || n } }

    function er() { var t = qn(Yn.os, Yn.defaultString.os); return { name: t, version: tr(t) } }

    function ir() { var t = qn(Yn.browser, Yn.defaultString.browser); return { name: t, version: Jn(t), webview: $n() } }

    function nr() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Bn.userAgent;
        Hn = t; var e = { os: er(), browser: ir(), isMobile: -1 !== Hn.indexOf("Mobi") }; return e.browser.name = e.browser.name.toLowerCase(), e.os.name = e.os.name.toLowerCase(), e.os.version = e.os.version.toLowerCase(), "ios" === e.os.name && e.browser.webview && (e.browser.version = "-1"), e }
    nr.VERSION = "2.1.5"; var rr, or, sr = { 0: "NO_ERROR", 1280: "INVALID_ENUM", 1281: "INVALID_VALUE", 1282: "INVALID_OPERATION", 1285: "OUT_OF_MEMORY", 1286: "INVALID_FRAMEBUFFER_OPERATION", 37442: "CONTEXT_LOST_WEBGL" },
        ar = null,
        hr = function() {
            function n() {} return n.createShader = function(t, e, i) { var n = t.createShader(e); return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (console.error(t.getShaderInfoLog(n)), null) }, n.createProgram = function(t, e, i) { var n = t.createProgram(); return t.attachShader(n, e), t.attachShader(n, i), t.linkProgram(n), t.detachShader(n, e), t.detachShader(n, i), t.deleteShader(e), t.deleteShader(i), t.getProgramParameter(n, t.LINK_STATUS) ? n : (t.deleteProgram(n), null) }, n.initBuffer = function(t, e, i, n, r) { var o = t.createBuffer(); return t.bindBuffer(e, o), t.bufferData(e, i, t.STATIC_DRAW), o && (o.itemSize = n, o.numItems = i.length / n), void 0 !== r && (t.enableVertexAttribArray(r), t.vertexAttribPointer(r, o.itemSize, t.FLOAT, !1, 0, 0)), o }, n.getWebglContext = function(t, e) { var i = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"],
                    n = null,
                    r = u({ preserveDrawingBuffer: !1, antialias: !1, xrCompatible: !0 }, e);

                function o(t) { return t.statusMessage }
                t.addEventListener("webglcontextcreationerror", o); for (var s = 0; s < i.length; s++) { try { n = t.getContext(i[s], r) } catch (t) {} if (n) break } return t.removeEventListener("webglcontextcreationerror", o), n }, n.createTexture = function(t, e) { var i = t.createTexture(); return t.bindTexture(e, i), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(e, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(e, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindTexture(e, null), i }, n.isWebGLAvailable = function() { if (null === ar) { var t = document.createElement("canvas"),
                        e = n.getWebglContext(t); if (ar = !!e, e) { var i = e.getExtension("WEBGL_lose_context");
                        i && i.loseContext() } } return ar }, n.isStableWebGL = function() { var t = nr(),
                    e = !0; return "android" === t.os.name && parseFloat(t.os.version) <= 4.3 ? e = !1 : "android" === t.os.name && 4.4 === parseFloat(t.os.version) && "chrome" !== t.browser.name && (e = !1), e }, n.getErrorNameFromWebGLErrorCode = function(t) { return t in sr ? sr[t] : "UNKNOWN_ERROR" }, n.texImage2D = function(t, e, i) { try { t.texImage2D(e, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, i) } catch (t) { console.error("WebGLUtils.texImage2D error:", t) } }, n.getMaxTextureSize = function(t) { return t.getParameter(t.MAX_TEXTURE_SIZE) }, n }(),
        ur = nr(),
        cr = "ie" === ur.browser.name && "11.0" === ur.browser.version,
        lr = { ERROR: "error" },
        fr = function() { var t = function(e) {
                function t() { var t; return (t = e.call(this) || this)._forceDimension = null, t._pixelCanvas = null, t._pixelContext = null, t }
                r(t, e); var i = t.prototype; return i.render = function(t) { var e = t.gl,
                        i = t.shaderProgram,
                        n = t.indexBuffer,
                        r = t.mvMatrix,
                        o = t.pMatrix;
                    e.uniformMatrix4fv(i.pMatrixUniform, !1, o), e.uniformMatrix4fv(i.mvMatrixUniform, !1, r), n && e.drawElements(e.TRIANGLES, n.numItems, e.UNSIGNED_SHORT, 0) }, i.getDimension = function(t) { return { width: t.naturalWidth || t.videoWidth, height: t.naturalHeight || t.videoHeight } }, i.updateShaderData = function() {}, i._initPixelSource = function(t, e) { if (cr && t instanceof HTMLVideoElement || e) { var i = e || this.getDimension(t),
                            n = i.width,
                            r = i.height;
                        this._pixelCanvas = document.createElement("canvas"), this._pixelCanvas.width = n, this._pixelCanvas.height = r, this._pixelContext = this._pixelCanvas.getContext("2d") }
                    this._forceDimension = e }, i._getPixelSource = function(t) { if (!this._pixelCanvas) return t; var e = this.getDimension(t),
                        i = this._forceDimension || e; return this._pixelCanvas.width !== i.width && (this._pixelCanvas.width = i.width), this._pixelCanvas.height !== i.height && (this._pixelCanvas.height = i.height), this._forceDimension ? this._pixelContext.drawImage(t, 0, 0, e.width, e.height, 0, 0, i.width, i.height) : this._pixelContext.drawImage(t, 0, 0), this._pixelCanvas }, i._extractTileConfig = function(t) { var e = Array.isArray(t.tileConfig) ? t.tileConfig : Array.apply(void 0, Array(6)).map(function() { return t.tileConfig }); return e = e.map(function(t) { return u({ flipHorizontal: !1, rotation: 0 }, t) }) }, i._triggerError = function(t) { console.error("Renderer Error:", t), this.trigger(lr.ERROR, { message: "string" == typeof t ? t : t.message }) }, t }(s); return t.EVENTS = lr, t }(),
        dr = function() { var t = function(t) {
                function l() { return t.apply(this, arguments) || this }
                r(l, t); var e = l.prototype; return e.getVertexPositionData = function() { return l._VERTEX_POSITION_DATA = null !== l._VERTEX_POSITION_DATA ? l._VERTEX_POSITION_DATA : [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1] }, e.getIndexData = function() { if (l._INDEX_DATA) return l._INDEX_DATA; for (var t = [], e = this.getVertexPositionData(), i = 0; i < e.length / 3; i += 4) t.push(i, i + 2, i + 1, i, i + 3, i + 2); return l._INDEX_DATA = t }, l.extractOrder = function(t) { return t.order || "RLUDBF" }, e.getTextureCoordData = function(t) { var e = l.extractOrder(t),
                        h = this.getVertexPositionData(),
                        i = this._extractTileConfig(t); return "BFUDRL".split("").map(function(t) { return i[e.indexOf(t)] }).map(function(t, e) { for (var i = parseInt(t.rotation / 90, 10), n = t.flipHorizontal ? [0, 1, 2, 3] : [1, 0, 3, 2], r = 0; r < Math.abs(i); r++) t.flipHorizontal && 0 < i || !t.flipHorizontal && i < 0 ? n.push(n.shift()) : n.unshift(n.pop()); for (var o = h.slice(12 * e, 12 * e + 12), s = [], a = 0; a < 4; a++) s[n[a]] = o.splice(0, 3); return s }).join().split(",").map(function(t) { return parseInt(t, 10) }) }, e.getVertexShaderSource = function() { return "\nattribute vec3 aVertexPosition;\nattribute vec3 aTextureCoord;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nvarying highp vec3 vVertexDirectionVector;\nvoid main(void) {\n\tvVertexDirectionVector = aTextureCoord;\n\tgl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}" }, e.getFragmentShaderSource = function() { return "\nprecision highp float;\nuniform samplerCube uSampler;\nvarying highp vec3 vVertexDirectionVector;\nvoid main(void) {\n\tgl_FragColor = textureCube(uSampler, vVertexDirectionVector);\n}" }, e.updateTexture = function(t, e, i) { var n = l.extractOrder(i),
                        r = {};
                    n.split("").forEach(function(t, e) { r[t] = e }); try { if (e instanceof Array)
                            for (var o = 0; o < 6; o++) { var s = r["RLUDBF" [o]];
                                hr.texImage2D(t, t.TEXTURE_CUBE_MAP_POSITIVE_X + o, e[s]) } else
                                for (var a = this.getMaxCubeMapTextureSize(t, e), h = 0; h < 6; h++) { var u = r["RLUDBF" [h]],
                                        c = this.extractTileFromImage(e, u, a);
                                    hr.texImage2D(t, t.TEXTURE_CUBE_MAP_POSITIVE_X + h, c) } } catch (t) { this._triggerError(t) } }, e.bindTexture = function(t, e, i, n) { t.bindTexture(t.TEXTURE_CUBE_MAP, e), this.updateTexture(t, i, n) }, e.getSourceTileSize = function(t) { var e = this.getDimension(t),
                        i = e.width,
                        n = e.height,
                        r = i / n; return r == 1 / 6 ? i : 6 == r ? n : r == 2 / 3 ? i / 2 : i / 3 }, e.extractTileFromImage = function(t, e, i) { var n = this.getDimension(t).width,
                        r = this.getSourceTileSize(t),
                        o = document.createElement("canvas");
                    o.width = i, o.height = i; var s = o.getContext("2d"),
                        a = n / r,
                        h = r * e % (r * a),
                        u = parseInt(e / a, 10) * r; return s.drawImage(t, h, u, r, r, 0, 0, i, i), o }, e.getMaxCubeMapTextureSize = function(t, e) { var i = nr(),
                        n = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
                        r = this.getSourceTileSize(e); if ("ie" === i.browser.name && 11 === parseInt(i.browser.version, 10) && !Fi.isPowerOfTwo(r))
                        for (var o = 1; o < n; o *= 2)
                            if (!(o < r)) { r = o; break }
                    return "ios" === i.os.name && 9 === parseInt(i.os.version, 10) && (r = 1024), "ios" === i.os.name && 8 === parseInt(i.os.version, 10) && (r = 512), Math.min(n, r) }, l }(fr); return t._VERTEX_POSITION_DATA = null, t._INDEX_DATA = null, t }(),
        pr = function(t) {
            function e() { return t.apply(this, arguments) || this }
            r(e, t); var i = e.prototype; return i.getVertexShaderSource = function() { return "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nvarying highp vec2 vTextureCoord;\nvoid main(void) {\n\tvTextureCoord = aTextureCoord;\n\tgl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}" }, i.getFragmentShaderSource = function() { return "\n#define PI 3.14159265359\nprecision highp float;\nvarying highp vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform bool uIsEAC;\nconst vec2 OPERATE_COORDS_RANGE = vec2(-1.0, 1.0);\nconst vec2 TEXTURE_COORDS_RANGE = vec2(0.0, 1.0);\n// vector type is used for initializing values instead of array.\nconst vec4 TEXTURE_DIVISION_X = vec4(0.0, 1.0 / 3.0, 2.0 / 3.0, 1.0);\nconst vec3 TEXTURE_DIVISION_Y = vec3(0.0, 1.0 / 2.0, 1.0);\nconst float EAC_CONST = 2.0 / PI;\nfloat scale(vec2 domainRange, vec2 targetRange, float val) {\n\tfloat unit = 1.0 / (domainRange[1] - domainRange[0]);\n\treturn targetRange[0] + (targetRange[1] - targetRange[0]) * (val - domainRange[0]) * unit;\n}\nvoid main(void) {\n\tfloat transformedCoordX;\n\tfloat transformedCoordY;\n\n\tif (uIsEAC) {\n\t\tvec2 orgTextureRangeX;\n\t\tvec2 orgTextureRangeY;\n\n\t\t// Apply EAC transform\n\t\tif (vTextureCoord.s >= TEXTURE_DIVISION_X[2]) {\n\t\t\torgTextureRangeX = vec2(TEXTURE_DIVISION_X[2], TEXTURE_DIVISION_X[3]);\n\t\t} else if (vTextureCoord.s >= TEXTURE_DIVISION_X[1]) {\n\t\t\torgTextureRangeX = vec2(TEXTURE_DIVISION_X[1], TEXTURE_DIVISION_X[2]);\n\t\t} else {\n\t\t\torgTextureRangeX = vec2(TEXTURE_DIVISION_X[0], TEXTURE_DIVISION_X[1]);\n\t\t}\n\n\t\tif (vTextureCoord.t >= TEXTURE_DIVISION_Y[1]) {\n\t\t\torgTextureRangeY = vec2(TEXTURE_DIVISION_Y[1], TEXTURE_DIVISION_Y[2]);\n\t\t} else {\n\t\t\torgTextureRangeY = vec2(TEXTURE_DIVISION_Y[0], TEXTURE_DIVISION_Y[1]);\n\t\t}\n\n\t\t// scaling coors by the coordinates following the range from -1.0 to 1.0.\n\t\tfloat px = scale(orgTextureRangeX, OPERATE_COORDS_RANGE, vTextureCoord.s);\n\t\tfloat py = scale(orgTextureRangeY, OPERATE_COORDS_RANGE, vTextureCoord.t);\n\n\t\tfloat qu = EAC_CONST * atan(px) + 0.5;\n\t\tfloat qv = EAC_CONST * atan(py) + 0.5;\n\n\t\t// re-scaling coors by original coordinates ranges\n\t\ttransformedCoordX = scale(TEXTURE_COORDS_RANGE, orgTextureRangeX, qu);\n\t\ttransformedCoordY = scale(TEXTURE_COORDS_RANGE, orgTextureRangeY, qv);\n\t} else {\n\t\t// normal cubemap\n\t\ttransformedCoordX = vTextureCoord.s;\n\t\ttransformedCoordY = vTextureCoord.t;\n\t}\n\n\tgl_FragColor = texture2D(uSampler, vec2(transformedCoordX, transformedCoordY));\n}" }, i.getVertexPositionData = function() { return this._vertices || (this._vertices = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1]), this._vertices }, i.getIndexData = function() { var i = this; return function() { for (var t = [], e = 0; e < i._vertices.length / 3; e += 4) t.push(e, e + 1, e + 2, e, e + 2, e + 3); return t }() }, i.getTextureCoordData = function(t) { for (var i = this, e = t.order || "RLUDFB", n = [], r = 1; 0 <= r; r--)
                    for (var o = 0; o < 3; o++) { var s = [o / 3, r / 2, (o + 1) / 3, r / 2, (o + 1) / 3, (r + 1) / 2, o / 3, (r + 1) / 2];
                        n.push(s) }
                var a = this._extractTileConfig(t); return n = n.map(function(t) { return i._shrinkCoord(t) }).map(function(t, e) { return i._transformCoord(t, a[e]) }), "BFUDRL".split("").map(function(t) { return e.indexOf(t) }).map(function(t) { return n[t] }).reduce(function(t, e) { return t.concat(e) }, []) }, i.updateTexture = function(t, e) { hr.texImage2D(t, t.TEXTURE_2D, this._getPixelSource(e)) }, i.bindTexture = function(t, e, i) { var n = this.getDimension(i),
                    r = n.width,
                    o = n.height,
                    s = Math.max(r, o),
                    a = hr.getMaxTextureSize(t);
                a < s ? this._triggerError("Image width(" + r + ") exceeds device limit(" + a + "))") : (this._initPixelSource(i), t.activeTexture(t.TEXTURE0), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.bindTexture(t.TEXTURE_2D, e), this.updateTexture(t, i)) }, i._transformCoord = function(t, e) { var i = t.slice(); return e.flipHorizontal && (i = this._flipHorizontalCoord(i)), e.rotation && (i = this._rotateCoord(i, e.rotation)), i }, i._shrinkCoord = function(t) { return [t[0] + 0, t[1] + 0, t[2] - 0, t[3] + 0, t[4] - 0, t[5] - 0, t[6] + 0, t[7] - 0] }, i._rotateCoord = function(t, e) { var i, n = parseInt(e / 90, 10) % 4; if (0 == n) return t; return 0 < n ? (i = t.splice(0, 2 * n), t.concat(i)) : (i = t.splice(2 * (4 + n), 2 * -n)).concat(t) }, i._flipHorizontalCoord = function(t) { return [t[2], t[3], t[0], t[1], t[6], t[7], t[4], t[5]] }, e }(fr),
        vr = { INVALID_DEVICE: 10, NO_WEBGL: 11, FAIL_IMAGE_LOAD: 12, FAIL_BIND_TEXTURE: 13, INVALID_RESOURCE: 14, RENDERING_CONTEXT_LOST: 15 },
        mr = { READY: "ready", VIEW_CHANGE: "viewChange", ANIMATION_END: "animationEnd", ERROR: "error" },
        gr = { EQUIRECTANGULAR: "equirectangular", CUBEMAP: "cubemap", CUBESTRIP: "cubestrip", PANORAMA: "panorama", STEREOSCOPIC_EQUI: "stereoequi" },
        _r = { TOP_BOTTOM: "3dv", LEFT_RIGHT: "3dh", NONE: "" },
        yr = -.5 * Math.PI,
        xr = [],
        wr = [],
        Er = []; for (rr = 0; rr <= 60; rr++) { var Tr = (rr / 60 - .5) * Math.PI,
            br = Math.sin(Tr),
            Rr = Math.cos(Tr); for (or = 0; or <= 60; or++) { var Pr = 2 * (or / 60 - .5) * Math.PI + yr,
                Ar = Math.sin(Pr),
                Sr = Math.cos(Pr) * Rr,
                Or = br,
                Cr = Ar * Rr,
                Ir = or / 60,
                Mr = rr / 60; if (xr.push(Ir, Mr), wr.push(2 * Sr, 2 * Or, 2 * Cr), 60 !== or && 60 !== rr) { var Dr = 61 * rr + or,
                    Lr = Dr + 60 + 1;
                Er.push(Dr, Lr, Dr + 1, Lr, Lr + 1, Dr + 1) } } } var Fr = function() { var t = function(s) {
                function t(t) { var e; return (e = s.call(this) || this)._stereoFormat = t, e }
                r(t, s); var e = t.prototype; return e.render = function(t) { var e, i, n = t.gl,
                        r = t.shaderProgram; switch (this._stereoFormat) {
                        case _r.TOP_BOTTOM:
                            e = [1, .5, 0, 0], i = [1, .5, 0, .5]; break;
                        case _r.LEFT_RIGHT:
                            e = [.5, 1, 0, 0], i = [.5, 1, .5, 0]; break;
                        default:
                            e = [1, 1, 0, 0], i = [1, 1, 0, 0] } var o = n.getUniformLocation(r, "uTexScaleOffset");
                    n.uniform4fv(o, [].concat(e, i)), s.prototype.render.call(this, t) }, e.getVertexPositionData = function() { return t._VERTEX_POSITION_DATA }, e.getIndexData = function() { return t._INDEX_DATA }, e.getTextureCoordData = function() { return t._TEXTURE_COORD_DATA }, e.getVertexShaderSource = function() { return "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform float uEye;\nuniform vec4 uTexScaleOffset[2];\nvarying highp vec2 vTextureCoord;\nvoid main(void) {\n\tvec4 scaleOffset = uTexScaleOffset[int(uEye)];\n\tvTextureCoord = aTextureCoord.xy * scaleOffset.xy + scaleOffset.zw;\n\tgl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}" }, e.getFragmentShaderSource = function() { return "\nprecision highp float;\nvarying highp vec2 vTextureCoord;\nuniform sampler2D uSampler;\nvoid main(void) {\n\tgl_FragColor = texture2D(uSampler, vTextureCoord.st);\n}" }, e.updateTexture = function(t, e) { hr.texImage2D(t, t.TEXTURE_2D, this._getPixelSource(e)) }, e.bindTexture = function(t, e, i) { var n = this.getDimension(i),
                        r = n.width,
                        o = n.height,
                        s = Math.max(r, o),
                        a = hr.getMaxTextureSize(t);
                    a < s ? this._triggerError("Image width(" + r + ") exceeds device limit(" + a + "))") : (this._initPixelSource(i), t.activeTexture(t.TEXTURE0), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.bindTexture(t.TEXTURE_2D, e), this.updateTexture(t, i)) }, t }(fr); return t._VERTEX_POSITION_DATA = wr, t._TEXTURE_COORD_DATA = xr, t._INDEX_DATA = Er, t }(),
        Vr = [],
        Nr = [],
        Ur = [],
        zr = function() { var t = function(t) {
                function e() { return t.apply(this, arguments) || this }
                r(e, t); var i = e.prototype; return i.getVertexPositionData = function() { return e._VERTEX_POSITION_DATA }, i.getIndexData = function() { return e._INDEX_DATA }, i.getTextureCoordData = function() { return e._TEXTURE_COORD_DATA }, i.getVertexShaderSource = function() { return "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nvarying highp vec2 vTextureCoord;\nvoid main(void) {\n\tvTextureCoord = aTextureCoord;\n\tgl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}" }, i.getFragmentShaderSource = function() { return "\nprecision highp float;\nvarying highp vec2 vTextureCoord;\nuniform sampler2D uSampler;\nvoid main(void) {\n\tgl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n}" }, i.updateTexture = function(t, e) { hr.texImage2D(t, t.TEXTURE_2D, this._getPixelSource(e)) }, i.bindTexture = function(t, e, i) { var n, r = this.getDimension(i),
                        o = r.width,
                        s = r.height,
                        a = Math.max(o, s),
                        h = hr.getMaxTextureSize(t);
                    h < a && (this._triggerError("Image width(" + o + ") exceeds device texture limit(" + h + "))"), n = s < o ? { width: h, height: h * s / o } : { width: h * o / s, height: h }), this._initPixelSource(i, n), t.activeTexture(t.TEXTURE0), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.bindTexture(t.TEXTURE_2D, e), this.updateTexture(t, i) }, i.updateShaderData = function(t) { var e, i, n, r, o, s = t.imageAspectRatio,
                        a = void 0 === s ? 6 : s; if (6 <= (o = a < 1 ? (r = !0, 1 / a) : (r = !1, a))) { var h = 360 / o;
                        i = 2 * Math.PI, n = Math.tan(x(h / 2)) } else i = o, n = .5;
                    Vr.length = 0, Nr.length = 0, Ur.length = 0; for (var u = [-n, n], c = Math.PI / 2 + (2 * Math.PI - i) / 2, l = 0, f = u.length; l < f; l++)
                        for (e = 0; e <= 60; e++) { var d = c + e / 60 * i,
                                p = Math.cos(d),
                                v = u[l],
                                m = Math.sin(d),
                                g = void 0,
                                _ = void 0; if (_ = r ? (g = 1 - l, e / 60) : (g = e / 60, l), Vr.push(g, _), Nr.push(p, v, m), 0 === l && e < 60) { var y = e + 60 + 1;
                                Ur.push(e, y, e + 1, y, y + 1, e + 1) } } }, e }(fr); return t._VERTEX_POSITION_DATA = Nr, t._TEXTURE_COORD_DATA = Vr, t._INDEX_DATA = Ur, t }(),
        Qr = "undefined" == typeof Promise ? o.Promise : Promise,
        Wr = "vrdisplaypresentchange",
        kr = [0, 0, .5, 1],
        Xr = [.5, 0, .5, 1],
        Br = "left",
        Yr = "right",
        Gr = function() { return function() {
                function t() { var e = this;
                    this.destroy = function() { var t = e._vrDisplay;
                        e.removeEndCallback(e.destroy), t && t.isPresenting && t.exitPresent(), e._clear() }, this._frameData = new window.VRFrameData, this._clear() }
                i(t, [{ key: "context", get: function() { return this._vrDisplay } }]); var e = t.prototype; return e.canRender = function() { return Boolean(this._vrDisplay) }, e.beforeRender = function(t) { t.bindFramebuffer(t.FRAMEBUFFER, null) }, e.afterRender = function() { this._vrDisplay.submitFrame() }, e.getEyeParams = function(t) { var e = this._vrDisplay,
                        i = .5 * t.drawingBufferWidth,
                        n = t.drawingBufferHeight,
                        r = this._frameData;
                    e.getFrameData(r); var o = r.leftViewMatrix,
                        s = r.rightViewMatrix; return d(o, o, this._yawOffset), d(s, s, this._yawOffset), [{ viewport: [0, 0, i, n], mvMatrix: o, pMatrix: r.leftProjectionMatrix }, { viewport: [i, 0, i, n], mvMatrix: s, pMatrix: r.rightProjectionMatrix }] }, e.isPresenting = function() { return Boolean(this._vrDisplay && this._vrDisplay.isPresenting) }, e.addEndCallback = function(t) { window.addEventListener(Wr, t) }, e.removeEndCallback = function(t) { window.removeEventListener(Wr, t) }, e.requestPresent = function(r) { var o = this; return new Qr(function(n, e) { navigator.getVRDisplays().then(function(t) { var i = t.length && t[0];
                            i ? i.capabilities.canPresent ? i.requestPresent([{ source: r }]).then(function() { var t = i.getEyeParameters(Br),
                                    e = i.getEyeParameters(Yr);
                                r.width = 2 * Math.max(t.renderWidth, e.renderWidth), r.height = Math.max(t.renderHeight, e.renderHeight), o._setDisplay(i), n() }) : e(new Error("Display lacking capability to present.")) : e(new Error("No displays available.")) }) }) }, e.setYawOffset = function(t) { this._yawOffset = t }, e._setDisplay = function(t) { var e = (this._vrDisplay = t).getLayers(); if (e.length) { var i = e[0];
                        this._leftBounds = i.leftBounds, this._rightBounds = i.rightBounds }
                    this.addEndCallback(this.destroy) }, e._clear = function() { this._vrDisplay = null, this._leftBounds = kr, this._rightBounds = Xr, this._yawOffset = 0 }, t }() }(),
        Hr = function() { return function() {
                function t() { var e = this;
                    this.destroy = function() { var t = e._xrSession;
                        e.removeEndCallback(e.destroy), t && t.end().then(function() {}, function() {}), e._clear() }, this._clear() }
                i(t, [{ key: "context", get: function() { return this._xrSession } }]); var e = t.prototype; return e.canRender = function(t) { var e = t.getViewerPose(this._xrRefSpace); return Boolean(e) }, e.beforeRender = function(t, e) { var i = e.session.renderState.baseLayer;
                    t.bindFramebuffer(t.FRAMEBUFFER, i.framebuffer) }, e.afterRender = function() {}, e.getEyeParams = function(t, e) { var n = this,
                        i = e.session,
                        r = e.getViewerPose(this._xrRefSpace); if (!r) return null; var o = i.renderState.baseLayer; return r.views.map(function(t) { var e = o.getViewport(t),
                            i = t.transform.inverse.matrix; return st && f(i, i, x(180)), d(i, i, n._yawOffset), { viewport: [e.x, e.y, e.width, e.height], mvMatrix: i, pMatrix: t.projectionMatrix } }) }, e.isPresenting = function() { return this._presenting }, e.addEndCallback = function(t) { var e = this._xrSession;
                    e && e.addEventListener("end", t) }, e.removeEndCallback = function(t) { var e = this._xrSession;
                    e && e.removeEventListener("end", t) }, e.requestPresent = function(t, n) { var r = this; return navigator.xr.requestSession("immersive-vr", { requiredFeatures: ["local"] }).then(function(e) { var i = new window.XRWebGLLayer(e, n); return e.updateRenderState({ baseLayer: i }), e.requestReferenceSpace("local").then(function(t) { r._setSession(e, i, t) }) }) }, e.setYawOffset = function(t) { this._yawOffset = t }, e._setSession = function(t, e, i) { this._xrSession = t, this._xrLayer = e, this._xrRefSpace = i, this._presenting = !0, this.addEndCallback(this.destroy) }, e._clear = function() { this._xrSession = null, this._xrLayer = null, this._xrRefSpace = null, this._presenting = !1, this._yawOffset = 0 }, t }() }(),
        jr = function() { return function() {
                function t() { var i = this;
                    this._onLoop = function() { i._callback.apply(i, arguments), i._rafId = i._context.requestAnimationFrame(i._onLoop) }, this._onLoopNextTick = function() { var t = performance.now();
                        i._callback.apply(i, arguments); var e = performance.now() - t;
                        0 <= i._rafTimer && (clearTimeout(i._rafTimer), i._rafTimer = -1), e < 16 ? i._rafId = i._context.requestAnimationFrame(i._onLoop) : i._rafTimer = setTimeout(i._onLoop, 0) }, this._callback = null, this._context = window, this._rafId = -1, this._rafTimer = -1 } var e = t.prototype; return e.setCallback = function(t) { this._callback = t }, e.setContext = function(t) { this._context = t }, e.start = function() { var t = this._context,
                        e = this._callback;
                    t && e && (0 <= this._rafId || 0 <= this._rafTimer || (this._rafId = st ? t.requestAnimationFrame(this._onLoopNextTick) : t.requestAnimationFrame(this._onLoop))) }, e.stop = function() { 0 <= this._rafId && this._context.cancelAnimationFrame(this._rafId), 0 <= this._rafTimer && clearTimeout(this._rafTimer), this._rafId = -1, this._rafTimer = -1 }, t }() }(),
        qr = "undefined" == typeof Promise ? o.Promise : Promise,
        Kr = gr,
        Zr = ft || 1;
    2 < Zr && (Zr = 2); var Jr = { BIND_TEXTURE: "bindTexture", IMAGE_LOADED: "imageLoaded", ERROR: "error", RENDERING_CONTEXT_LOST: "renderingContextLost", RENDERING_CONTEXT_RESTORE: "renderingContextRestore" },
        $r = { INVALID_DEVICE: 10, NO_WEBGL: 11, FAIL_IMAGE_LOAD: 12, RENDERER_ERROR: 13 },
        to = function() { var t = function(s) {
                function t(t, e, i, n, r, o) { var d; return (d = s.call(this) || this)._renderStereo = function(t, e) { var i = d._vr,
                            n = d.context,
                            r = i.getEyeParams(n, e); if (r) { i.beforeRender(n, e); for (var o = 0, s = [0, 1]; o < s.length; o++) { var a = s[o],
                                    h = r[a];
                                d.mvMatrix = h.mvMatrix, d.pMatrix = h.pMatrix, n.viewport.apply(n, h.viewport), n.uniform1f(d.shaderProgram.uEye, a), d._bindBuffers(), d._draw() }
                            i.afterRender() } }, d.exitVR = function() { var t = d._vr,
                            e = d.context,
                            i = d._animator;
                        t && (t.removeEndCallback(d.exitVR), t.destroy(), d._vr = null, ot && d._restoreStyle(), d.updateViewportDimensions(d.width, d.height), d._updateViewport(), e.bindFramebuffer(e.FRAMEBUFFER, null), d._bindBuffers(), d._shouldForceDraw = !0, i.stop(), i.setContext(window), i.setCallback(d._render.bind(h(d))), i.start()) }, d._onFirstVRFrame = function(t, e) { var i = d._vr,
                            n = d.context,
                            r = d._animator; if (i.canRender(e)) { var o = S(0, 0, -1),
                                s = i.getEyeParams(n, e)[0],
                                a = v(p(), s.mvMatrix),
                                h = v(p(), s.pMatrix),
                                u = m(p(), a),
                                c = m(p(), h),
                                l = y(P(), o, c);
                            y(l, l, u); var f = Fi.yawOffsetBetween(l, S(0, 0, 1));
                            0 !== f && (i.setYawOffset(f), r.setCallback(d._renderStereo)) } }, d.sphericalConfig = r, d.fieldOfView = r.fieldOfView, d.width = e, d.height = i, d._lastQuaternion = null, d._lastYaw = null, d._lastPitch = null, d._lastFieldOfView = null, d.pMatrix = w(), d.mvMatrix = w(), _(d.pMatrix, x(d.fieldOfView), e / i, .1, 100), d.textureCoordBuffer = null, d.vertexBuffer = null, d.indexBuffer = null, d.canvas = d._initCanvas(e, i), d._setDefaultCanvasStyle(), d._wrapper = null, d._wrapperOrigStyle = null, d._renderingContextAttributes = o, d._image = null, d._imageConfig = null, d._imageIsReady = !1, d._shouldForceDraw = !1, d._keepUpdate = !1, d._onContentLoad = d._onContentLoad.bind(h(d)), d._onContentError = d._onContentError.bind(h(d)), d._animator = new jr, d._vr = null, t && d.setImage({ image: t, imageType: r.imageType, isVideo: n, cubemapConfig: r.cubemapConfig }), d }
                r(t, s); var e = t.prototype; return e.setYawPitchControl = function(t) { this._yawPitchControl = t }, e.getContent = function() { return this._image }, e.setImage = function(t) { var e = t.image,
                        i = t.imageType,
                        n = t.isVideo,
                        r = void 0 !== n && n,
                        o = t.cubemapConfig; return this._imageIsReady = !1, this._isVideo = r, this._imageConfig = u({ order: i === Kr.CUBEMAP ? "RLUDBF" : "RLUDFB", tileConfig: { flipHorizontal: !1, rotation: 0 } }, o), this._setImageType(i), this._contentLoader && this._contentLoader.destroy(), r ? (this._contentLoader = new kn, this._keepUpdate = !0) : (this._contentLoader = new Dn, this._keepUpdate = !1), this._contentLoader.set(e), this._image = this._contentLoader.getElement(), this._contentLoader.get().then(this._onContentLoad, this._onContentError).catch(function(t) { return setTimeout(function() { throw t }) }) }, e._setImageType = function(t) { var e = this; if (t && this._imageType !== t) { switch (this._imageType = t, this._isCubeMap = t === Kr.CUBEMAP, this._renderer && this._renderer.off(), t) {
                            case Kr.CUBEMAP:
                                this._renderer = new dr; break;
                            case Kr.CUBESTRIP:
                                this._renderer = new pr; break;
                            case Kr.PANORAMA:
                                this._renderer = new zr; break;
                            case Kr.STEREOSCOPIC_EQUI:
                                this._renderer = new Fr(this.sphericalConfig.stereoFormat); break;
                            default:
                                this._renderer = new Fr(_r.NONE) }
                        this._renderer.on(fr.EVENTS.ERROR, function(t) { e.trigger(Jr.ERROR, { type: $r.RENDERER_ERROR, message: t.message }) }), this._initWebGL() } }, e._initCanvas = function(t, e) { var i = document.createElement("canvas"); return i.width = t, i.height = e, this._onWebglcontextlost = this._onWebglcontextlost.bind(this), this._onWebglcontextrestored = this._onWebglcontextrestored.bind(this), i.addEventListener("webglcontextlost", this._onWebglcontextlost), i.addEventListener("webglcontextrestored", this._onWebglcontextrestored), i }, e._setDefaultCanvasStyle = function() { var t = this.canvas;
                    t.style.bottom = 0, t.style.left = 0, t.style.right = 0, t.style.top = 0, t.style.margin = "auto", t.style.maxHeight = "100%", t.style.maxWidth = "100%", t.style.outline = "none", t.style.position = "absolute" }, e._onContentError = function() { return this._imageIsReady = !1, this._image = null, this.trigger(Jr.ERROR, { type: $r.FAIL_IMAGE_LOAD, message: "failed to load image" }), !1 }, e._triggerContentLoad = function() { this.trigger(Jr.IMAGE_LOADED, { content: this._image, isVideo: this._isVideo, projectionType: this._imageType }) }, e._onContentLoad = function() { return this._imageIsReady = !0, this._triggerContentLoad(), !0 }, e.isImageLoaded = function() { return !!this._image && this._imageIsReady && (!this._isVideo || 2 <= this._image.readyState) }, e.bindTexture = function() { var i = this; return new qr(function(t, e) { i._contentLoader ? i._contentLoader.get().then(function() { i._bindTexture() }, e).then(t) : e("ImageLoader is not initialized") }) }, e.attachTo = function(t) { this.detach(), t.appendChild(this.canvas), this._wrapper = t }, e.forceContextLoss = function() { if (this.hasRenderingContext()) { var t = this.context.getExtension("WEBGL_lose_context");
                        t && t.loseContext() } }, e.detach = function() { this.canvas.parentElement && this.canvas.parentElement.removeChild(this.canvas) }, e.destroy = function() { this._contentLoader && this._contentLoader.destroy(), this._animator.stop(), this.detach(), this.forceContextLoss(), this.off(), this.canvas.removeEventListener("webglcontextlost", this._onWebglcontextlost), this.canvas.removeEventListener("webglcontextrestored", this._onWebglcontextrestored) }, e.hasRenderingContext = function() { return !(!this.context || this.context.isContextLost()) && !(this.context && !this.context.getProgramParameter(this.shaderProgram, this.context.LINK_STATUS)) }, e._initShaderProgram = function() { var t = this.context;
                    this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = null); var e = this._renderer,
                        i = e.getVertexShaderSource(),
                        n = e.getFragmentShaderSource(),
                        r = hr.createShader(t, t.VERTEX_SHADER, i),
                        o = hr.createShader(t, t.FRAGMENT_SHADER, n),
                        s = hr.createProgram(t, r, o); if (!s) throw new Error("Failed to intialize shaders: " + hr.getErrorNameFromWebGLErrorCode(t.getError()));
                    t.useProgram(s), s.vertexPositionAttribute = t.getAttribLocation(s, "aVertexPosition"), t.enableVertexAttribArray(s.vertexPositionAttribute), s.pMatrixUniform = t.getUniformLocation(s, "uPMatrix"), s.mvMatrixUniform = t.getUniformLocation(s, "uMVMatrix"), s.samplerUniform = t.getUniformLocation(s, "uSampler"), s.textureCoordAttribute = t.getAttribLocation(s, "aTextureCoord"), s.uEye = t.getUniformLocation(s, "uEye"), t.enableVertexAttribArray(s.textureCoordAttribute), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT | t.STENCIL_BUFFER_BIT), t.uniform1i(s.samplerUniform, 0), this.shaderProgram = s }, e._onWebglcontextlost = function(t) { t.preventDefault(), this.trigger(Jr.RENDERING_CONTEXT_LOST) }, e._onWebglcontextrestored = function() { this._initWebGL(), this.trigger(Jr.RENDERING_CONTEXT_RESTORE) }, e.updateFieldOfView = function(t) { this.fieldOfView = t, this._updateViewport() }, e.updateViewportDimensions = function(t, e) { var i = !1;
                    this.width = t, this.height = e; var n = t * Zr,
                        r = e * Zr;
                    n !== this.canvas.width && (this.canvas.width = n, i = !0), r !== this.canvas.height && (this.canvas.height = r, i = !0), i && (this._updateViewport(), this._shouldForceDraw = !0) }, e._updateViewport = function() { _(this.pMatrix, x(this.fieldOfView), this.canvas.width / this.canvas.height, .1, 100), this.context.viewport(0, 0, this.context.drawingBufferWidth, this.context.drawingBufferHeight) }, e._initWebGL = function() { var t; try { this._initRenderingContext(), t = this.context, this.updateViewportDimensions(this.width, this.height), this._initShaderProgram() } catch (t) { return this.trigger(Jr.ERROR, { type: $r.NO_WEBGL, message: "no webgl support" }), this.destroy(), void console.error(t) }
                    t.clearColor(0, 0, 0, 0); var e = this._isCubeMap ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D;
                    this.texture && t.deleteTexture(this.texture), this.texture = hr.createTexture(t, e), this._imageType === Kr.CUBESTRIP && t.enable(t.CULL_FACE) }, e._initRenderingContext = function() { if (!this.hasRenderingContext()) { if (!window.WebGLRenderingContext) throw new Error("WebGLRenderingContext not available."); if (this.context = hr.getWebglContext(this.canvas, this._renderingContextAttributes), !this.context) throw new Error("Failed to acquire 3D rendering context") } }, e._initBuffers = function() { var t = this._renderer.getVertexPositionData(),
                        e = this._renderer.getIndexData(),
                        i = this._renderer.getTextureCoordData(this._imageConfig),
                        n = this.context;
                    this.vertexBuffer = hr.initBuffer(n, n.ARRAY_BUFFER, new Float32Array(t), 3, this.shaderProgram.vertexPositionAttribute), this.indexBuffer = hr.initBuffer(n, n.ELEMENT_ARRAY_BUFFER, new Uint16Array(e), 1), this.textureCoordBuffer = hr.initBuffer(n, n.ARRAY_BUFFER, new Float32Array(i), this._isCubeMap ? 3 : 2, this.shaderProgram.textureCoordAttribute), this._bindBuffers() }, e._bindTexture = function() { if (this._imageType === Kr.CUBESTRIP) { var t = this._renderer.getDimension(this._image),
                            e = t.width,
                            i = t.height,
                            n = e && i && e / i != 1.5;
                        this.context.uniform1f(this.context.getUniformLocation(this.shaderProgram, "uIsEAC"), n) } else if (this._imageType === Kr.PANORAMA) { var r = this._renderer.getDimension(this._image),
                            o = r.width,
                            s = r.height,
                            a = o && s && o / s;
                        this._renderer.updateShaderData({ imageAspectRatio: a }) }
                    this._initBuffers(), this._renderer.bindTexture(this.context, this.texture, this._image, this._imageConfig), this._shouldForceDraw = !0, this.trigger(Jr.BIND_TEXTURE) }, e._updateTexture = function() { this._renderer.updateTexture(this.context, this._image, this._imageConfig) }, e.keepUpdate = function(t) { t && !1 === this.isImageLoaded() && (this._shouldForceDraw = !0), this._keepUpdate = t }, e.startRender = function() { this._animator.setCallback(this._render.bind(this)), this._animator.start() }, e.stopRender = function() { this._animator.stop() }, e.renderWithQuaternion = function(t, e) { var i, n, r, o, s, a, h, u, c, l, f, d, p, v, m, g, _, y;
                    this.isImageLoaded() && (!1 === this._keepUpdate && this._lastQuaternion && H(this._lastQuaternion, t) && this.fieldOfView && this.fieldOfView === e && !1 === this._shouldForceDraw || (void 0 !== e && e !== this.fieldOfView && this.updateFieldOfView(e), this.mvMatrix = (i = w(), r = (n = t)[0], o = n[1], s = n[2], a = n[3], l = r * (h = r + r), f = o * h, d = o * (u = o + o), p = s * h, v = s * u, m = s * (c = s + s), g = a * h, _ = a * u, y = a * c, i[0] = 1 - d - m, i[1] = f + y, i[2] = p - _, i[3] = 0, i[4] = f - y, i[5] = 1 - l - m, i[6] = v + g, i[7] = 0, i[8] = p + _, i[9] = v - g, i[10] = 1 - l - d, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, i), this._draw(), this._lastQuaternion = X(t), this._shouldForceDraw && (this._shouldForceDraw = !1))) }, e.renderWithYawPitch = function(t, e, i) { var n;
                    this.isImageLoaded() && (!1 === this._keepUpdate && null !== this._lastYaw && this._lastYaw === t && null !== this._lastPitch && this._lastPitch === e && this.fieldOfView && this.fieldOfView === i && !1 === this._shouldForceDraw || (void 0 !== i && i !== this.fieldOfView && this.updateFieldOfView(i), (n = this.mvMatrix)[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = 1, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 1, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, f(this.mvMatrix, this.mvMatrix, -x(e)), d(this.mvMatrix, this.mvMatrix, -x(t)), this._draw(), this._lastYaw = t, this._lastPitch = e, this._shouldForceDraw && (this._shouldForceDraw = !1))) }, e._render = function() { var t = this._yawPitchControl,
                        e = t.getFov(); if (t.shouldRenderWithQuaternion()) { var i = t.getQuaternion();
                        this.renderWithQuaternion(i, e) } else { var n = t.getYawPitch();
                        this.renderWithYawPitch(n.yaw, n.pitch, e) } }, e._bindBuffers = function() { var t = this.context,
                        e = this.shaderProgram,
                        i = this.vertexBuffer,
                        n = this.textureCoordBuffer;
                    t.bindBuffer(t.ARRAY_BUFFER, i), t.enableVertexAttribArray(e.vertexPositionAttribute), t.vertexAttribPointer(e.vertexPositionAttribute, i.itemSize, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bindBuffer(t.ARRAY_BUFFER, n), t.enableVertexAttribArray(e.textureCoordAttribute), t.vertexAttribPointer(e.textureCoordAttribute, n.itemSize, t.FLOAT, !1, 0, 0) }, e._draw = function() { this._isVideo && this._keepUpdate && this._updateTexture(), this._renderer.render({ gl: this.context, shaderProgram: this.shaderProgram, indexBuffer: this.indexBuffer, mvMatrix: this.mvMatrix, pMatrix: this.pMatrix }) }, e.getProjectionRenderer = function() { return this._renderer }, e.enterVR = function() { var t = this._vr; return dt || navigator.getVRDisplays ? t && t.isPresenting() ? qr.resolve("VR already enabled.") : this._requestPresent() : qr.reject("VR is not available on this browser.") }, e._requestPresent = function() { var i = this,
                        n = this.context,
                        r = this.canvas,
                        o = this._animator;
                    this._vr = dt ? new Hr : new Gr; var s = this._vr; return o.stop(), new qr(function(t, e) { s.requestPresent(r, n).then(function() { s.addEndCallback(i.exitVR), o.setContext(s.context), o.setCallback(i._onFirstVRFrame), ot && i._setWrapperFullscreen(), i._shouldForceDraw = !0, o.start(), t("success") }).catch(function(t) { s.destroy(), i._vr = null, o.start(), e(t) }) }) }, e._setWrapperFullscreen = function() { var t = this._wrapper; if (t) { this._wrapperOrigStyle = t.getAttribute("style"); var e = t.style;
                        e.width = "100vw", e.height = "100vh", e.position = "fixed", e.left = "0", e.top = "0", e.zIndex = "9999" } }, e._restoreStyle = function() { var t = this._wrapper,
                        e = this.canvas;
                    t && (this._wrapperOrigStyle ? t.setAttribute("style", this._wrapperOrigStyle) : t.removeAttribute("style"), this._wrapperOrigStyle = null, e.removeAttribute("style"), this._setDefaultCanvasStyle()) }, t }(s); return t.EVENTS = Jr, t.ERROR_TYPE = $r, t }(),
        eo = "undefined" == typeof Promise ? o.Promise : Promise,
        io = function() { var t = function(s) {
                function a(t, e) { var i; if (void 0 === e && (e = {}), i = s.call(this) || this, !hr.isWebGLAvailable()) return setTimeout(function() { i.trigger(mr.ERROR, { type: vr.NO_WEBGL, message: "no webgl support" }) }, 0), h(i) || h(i); if (!hr.isStableWebGL()) return setTimeout(function() { i.trigger(mr.ERROR, { type: vr.INVALID_DEVICE, message: "blacklisted browser" }) }, 0), h(i) || h(i); if (e.image && e.video) return setTimeout(function() { i.trigger(mr.ERROR, { type: vr.INVALID_RESOURCE, message: "Specifying multi resouces(both image and video) is not valid." }) }, 0), h(i) || h(i);
                    navigator.xr && (navigator.xr.isSessionSupported ? navigator.xr.isSessionSupported("immersive-vr").then(function(t) { dt = t }).catch(function() {}) : navigator.xr.supportsSession && navigator.xr.supportsSession("immersive-vr").then(function(t) { dt = t }).catch(function() {})), i._container = t, i._image = e.image || e.video, i._isVideo = !!e.video, i._projectionType = e.projectionType || gr.EQUIRECTANGULAR, i._cubemapConfig = u({ order: i._projectionType === gr.CUBEMAP ? "RLUDBF" : "RLUDFB", tileConfig: { flipHorizontal: !1, rotation: 0 } }, e.cubemapConfig), i._stereoFormat = e.stereoFormat || _r.TOP_BOTTOM, i._width = e.width || parseInt(window.getComputedStyle(t).width, 10), i._height = e.height || parseInt(window.getComputedStyle(t).height, 10), i._yaw = e.yaw || 0, i._pitch = e.pitch || 0, i._fov = e.fov || 65, i._gyroMode = e.gyroMode || ln.YAWPITCH, i._quaternion = null, i._aspectRatio = 0 !== i._height ? i._width / i._height : 1; var n = e.fovRange || [30, 110],
                        r = a._isValidTouchDirection(e.touchDirection) ? e.touchDirection : On.TOUCH_DIRECTION_ALL,
                        o = u(e, { element: t, yaw: i._yaw, pitch: i._pitch, fov: i._fov, gyroMode: i._gyroMode, fovRange: n, aspectRatio: i._aspectRatio, touchDirection: r }); return i._isReady = !1, i._initYawPitchControl(o), i._initRenderer(i._yaw, i._pitch, i._fov, i._projectionType, i._cubemapConfig), i }
                r(a, s); var t = a.prototype; return t.getVideo = function() { return this._isVideo ? this._photoSphereRenderer.getContent() : null }, t.setVideo = function(t, e) { return void 0 === e && (e = {}), t && this.setImage(t, { projectionType: e.projectionType, isVideo: !0, cubemapConfig: e.cubemapConfig, stereoFormat: e.stereoFormat }), this }, t.getImage = function() { return this._isVideo ? null : this._photoSphereRenderer.getContent() }, t.setImage = function(t, e) { void 0 === e && (e = {}); var i = u({ order: "RLUDBF", tileConfig: { flipHorizontal: !1, rotation: 0 } }, e.cubemapConfig),
                        n = e.stereoFormat || _r.TOP_BOTTOM,
                        r = !!e.isVideo; return this._image && this._isVideo !== r ? console.warn("Currently not supporting to change content type(Image <--\x3e Video)") : t && (this._image = t, this._isVideo = r, this._projectionType = e.projectionType || gr.EQUIRECTANGULAR, this._cubemapConfig = i, this._stereoFormat = n, this._deactivate(), this._initRenderer(this._yaw, this._pitch, this._fov, this._projectionType, this._cubemapConfig)), this }, t.keepUpdate = function(t) { return this._photoSphereRenderer.keepUpdate(t), this }, t.getProjectionType = function() { return this._projectionType }, t.enableSensor = function() { return new eo(function(e, i) { lt && "function" == typeof lt.requestPermission ? lt.requestPermission().then(function(t) { "granted" === t ? e() : i(new Error("permission denied")) }).catch(function(t) { i(t) }) : e() }) }, t.disableSensor = function() { return this }, t.enterVR = function() { var t = this; return this._isReady ? new eo(function(e, i) { t.enableSensor().then(function() { return t._photoSphereRenderer.enterVR() }).then(function(t) { return e(t) }).catch(function(t) { return i(t) }) }) : eo.reject(new Error("PanoViewer is not ready to show image.")) }, t.exitVR = function() { return this._photoSphereRenderer.exitVR(), this }, t._initRenderer = function(t, e, i, n, r) { var o = this;
                    this._photoSphereRenderer = new to(this._image, this._width, this._height, this._isVideo, { initialYaw: t, initialPitch: e, fieldOfView: i, imageType: n, cubemapConfig: r, stereoFormat: this._stereoFormat }), this._photoSphereRenderer.setYawPitchControl(this._yawPitchControl), this._bindRendererHandler(), this._photoSphereRenderer.bindTexture().then(function() { return o._activate() }).catch(function() { o._triggerEvent(mr.ERROR, { type: vr.FAIL_BIND_TEXTURE, message: "failed to bind texture" }) }) }, t._updateYawPitchIfNeeded = function() { if (this._projectionType === a.ProjectionType.PANORAMA) { var t, e, i, n = this._photoSphereRenderer.getContent(),
                            r = n.naturalWidth / n.naturalHeight;
                        r < 1 && (r = 1 / r), i = r < 6 ? (e = Fi.toDegree(r), t = !1, 2 * Fi.toDegree(Math.atan(.5))) : (t = !0, (e = 360) / r); var o = this._yawPitchControl.option("fovRange")[0];
                        this._yawPitchControl.option({ fov: i, yawRange: [-e / 2, e / 2], isCircular: t, pitchRange: [-i / 2, i / 2], fovRange: [o, i] }), this.lookAt({ fov: i }) } }, t._bindRendererHandler = function() { var e = this;
                    this._photoSphereRenderer.on(to.EVENTS.ERROR, function(t) { e.trigger(mr.ERROR, t) }), this._photoSphereRenderer.on(to.EVENTS.RENDERING_CONTEXT_LOST, function(t) { e._deactivate(), e.trigger(mr.ERROR, { type: vr.RENDERING_CONTEXT_LOST, message: "webgl rendering context lost" }) }) }, t._initYawPitchControl = function(t) { var e = this;
                    this._yawPitchControl = new On(t), this._yawPitchControl.on(mr.ANIMATION_END, function(t) { e._triggerEvent(mr.ANIMATION_END, t) }), this._yawPitchControl.on("change", function(t) { e._yaw = t.yaw, e._pitch = t.pitch, e._fov = t.fov, e._quaternion = t.quaternion, e._triggerEvent(mr.VIEW_CHANGE, t) }) }, t._triggerEvent = function(t, e) { var i = e || {}; return this.trigger(t, i) }, t.setUseZoom = function(t) { return "boolean" == typeof t && this._yawPitchControl.option("useZoom", t), this }, t.setUseKeyboard = function(t) { return this._yawPitchControl.option("useKeyboard", t), this }, t.setGyroMode = function(t) { return this._yawPitchControl.option("gyroMode", t), this }, t.setFovRange = function(t) { return this._yawPitchControl.option("fovRange", t), this }, t.getFovRange = function() { return this._yawPitchControl.option("fovRange") }, t.updateViewportDimensions = function(t) { if (void 0 === t && (t = { width: void 0, height: void 0 }), !this._isReady) return this; var e;
                    void 0 !== t.width && void 0 !== t.height || (e = window.getComputedStyle(this._container)); var i = t.width || parseInt(e.width, 10),
                        n = t.height || parseInt(e.height, 10); return i === this._width && n === this._height || (this._width = i, this._height = n, this._aspectRatio = i / n, this._photoSphereRenderer.updateViewportDimensions(i, n), this._yawPitchControl.option("aspectRatio", this._aspectRatio), this._yawPitchControl.updatePanScale({ height: n }), this.lookAt({}, 0)), this }, t.getFov = function() { return this._fov }, t._getHFov = function() { return Fi.toDegree(2 * Math.atan(this._aspectRatio * Math.tan(x(this._fov) / 2))) }, t.getYaw = function() { return this._yaw }, t.getPitch = function() { return this._pitch }, t.getYawRange = function() { return this._yawPitchControl.option("yawRange") }, t.getPitchRange = function() { return this._yawPitchControl.option("pitchRange") }, t.setYawRange = function(t) { return this._yawPitchControl.option("yawRange", t), this }, t.setPitchRange = function(t) { return this._yawPitchControl.option("pitchRange", t), this }, t.setShowPolePoint = function(t) { return this._yawPitchControl.option("showPolePoint", t), this }, t.lookAt = function(t, e) { if (!this._isReady) return this; var i = void 0 !== t.yaw ? t.yaw : this._yaw,
                        n = void 0 !== t.pitch ? t.pitch : this._pitch,
                        r = this._yawPitchControl.option("pitchRange"),
                        o = r[1] - r[0],
                        s = void 0 !== t.fov ? t.fov : this._fov; return o < s && (s = o), this._yawPitchControl.lookAt({ yaw: i, pitch: n, fov: s }, e), 0 === e && this._photoSphereRenderer.renderWithYawPitch(i, n, s), this }, t._activate = function() { this._photoSphereRenderer.attachTo(this._container), this._yawPitchControl.enable(), this.updateViewportDimensions(), this._isReady = !0, this._updateYawPitchIfNeeded(), this._triggerEvent(mr.READY), this._photoSphereRenderer.startRender() }, t._deactivate = function() { this._isReady && (this._photoSphereRenderer.stopRender(), this._yawPitchControl.disable(), this._isReady = !1), this._photoSphereRenderer && (this._photoSphereRenderer.destroy(), this._photoSphereRenderer = null) }, a._isValidTouchDirection = function(t) { return t === a.TOUCH_DIRECTION.NONE || t === a.TOUCH_DIRECTION.YAW || t === a.TOUCH_DIRECTION.PITCH || t === a.TOUCH_DIRECTION.ALL }, t.setTouchDirection = function(t) { return a._isValidTouchDirection(t) && this._yawPitchControl.option("touchDirection", t), this }, t.getTouchDirection = function() { return this._yawPitchControl.option("touchDirection") }, t.destroy = function() { return this._deactivate(), this._yawPitchControl && (this._yawPitchControl.destroy(), this._yawPitchControl = null), this }, a.isSupported = function() { return hr.isWebGLAvailable() && hr.isStableWebGL() }, a.isWebGLAvailable = function() { return hr.isWebGLAvailable() }, a.isGyroSensorAvailable = function(t) { var n;
                    lt ? eo.race([new eo(function(i, t) { n = function(t) { var e = !(null == t.rotationRate.alpha);
                            i(e) }, window.addEventListener("devicemotion", n) }), new eo(function(t, e) { setTimeout(function() { return t(!1) }, 1e3) })]).then(function(e) { window.removeEventListener("devicemotion", n), t && t(e), a.isGyroSensorAvailable = function(t) { return t && t(e), e } }) : t && t(!1) }, a }(s); return t.VERSION = Rn, t.ERROR_TYPE = vr, t.EVENTS = mr, t.PROJECTION_TYPE = gr, t.GYRO_MODE = ln, t.ProjectionType = gr, t.STEREO_FORMAT = _r, t.TOUCH_DIRECTION = { NONE: On.TOUCH_DIRECTION_NONE, YAW: On.TOUCH_DIRECTION_YAW, PITCH: On.TOUCH_DIRECTION_PITCH, ALL: On.TOUCH_DIRECTION_ALL }, t }();
    t.PanoViewer = io, t.VERSION = Rn, Object.defineProperty(t, "__esModule", { value: !0 }) });
//# sourceMappingURL=view360.panoviewer.pkgd.min.js.map