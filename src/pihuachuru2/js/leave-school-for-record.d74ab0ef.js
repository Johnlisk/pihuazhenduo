(function (e) {
    function t(t) {
        for (var r, o, s = t[0], c = t[1], u = t[2], p = 0, l = []; p < s.length; p++) o = s[p], Object.prototype.hasOwnProperty.call(a, o) && a[o] && l.push(a[o][0]), a[o] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        f && f(t);
        while (l.length) l.shift()();
        return i.push.apply(i, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
                var s = n[o];
                0 !== a[s] && (r = !1)
            }
            r && (i.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }

    var r = {}, o = {"leave-school-for-record": 0}, a = {"leave-school-for-record": 0}, i = [];

    function s(e) {
        return c.p + "js/" + ({}[e] || e) + "." + {
            "chunk-068ec06a": "13210389",
            "chunk-367a661a": "252b6739",
            "chunk-6dff2a7a": "724afdf7",
            "chunk-ecc1a97c": "fa8aded7"
        }[e] + ".js"
    }

    function c(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }

    c.e = function (e) {
        var t = [], n = {"chunk-068ec06a": 1, "chunk-367a661a": 1, "chunk-6dff2a7a": 1, "chunk-ecc1a97c": 1};
        o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function (t, n) {
            for (var r = "css/" + ({}[e] || e) + "." + {
                "chunk-068ec06a": "59ce9b8b",
                "chunk-367a661a": "c14e4298",
                "chunk-6dff2a7a": "cdbcb0ec",
                "chunk-ecc1a97c": "d448e1ec"
            }[e] + ".css", a = c.p + r, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var u = i[s], p = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (p === r || p === a)) return t()
            }
            var l = document.getElementsByTagName("style");
            for (s = 0; s < l.length; s++) {
                u = l[s], p = u.getAttribute("data-href");
                if (p === r || p === a) return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
                var r = t && t.target && t.target.src || a,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = r, delete o[e], f.parentNode.removeChild(f), n(i)
            }, f.href = a;
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(f)
        })).then((function () {
            o[e] = 0
        })));
        var r = a[e];
        if (0 !== r) if (r) t.push(r[2]); else {
            var i = new Promise((function (t, n) {
                r = a[e] = [t, n]
            }));
            t.push(r[2] = i);
            var u, p = document.createElement("script");
            p.charset = "utf-8", p.timeout = 120, c.nc && p.setAttribute("nonce", c.nc), p.src = s(e);
            var l = new Error;
            u = function (t) {
                p.onerror = p.onload = null, clearTimeout(f);
                var n = a[e];
                if (0 !== n) {
                    if (n) {
                        var r = t && ("load" === t.type ? "missing" : t.type), o = t && t.target && t.target.src;
                        l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", l.name = "ChunkLoadError", l.type = r, l.request = o, n[1](l)
                    }
                    a[e] = void 0
                }
            };
            var f = setTimeout((function () {
                u({type: "timeout", target: p})
            }), 12e4);
            p.onerror = p.onload = u, document.head.appendChild(p)
        }
        return Promise.all(t)
    }, c.m = e, c.c = r, c.d = function (e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, c.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) c.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "", c.oe = function (e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [], p = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var l = 0; l < u.length; l++) t(u[l]);
    var f = p;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("c035")
    }, "000c": function (e, t, n) {
        e.exports = {greyColor: "#eee", blueColor: "#4199FF"}
    }, "0b73": function (e, t, n) {
    }, "0d5e": function (e, t, n) {
        "use strict";
        n("5ab2"), n("6d57"), n("e10e"), n("b449");
        var r = n("17d6"), o = (n("f548"), n("b081")), a = n("8bbf"), i = n.n(a), s = n("cebe"), c = n.n(s),
            u = n("fed1"), p = n.n(u);

        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function (t) {
                    Object(o["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var d = i.a.prototype;
        c.a.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8", c.a.defaults.timeout = 3e4, c.a.interceptors.request.use((function (e) {
            var t = p.a.parse(e.data);
            "true" !== t.isNoShowLoading && d.$toast({type: "loading", duration: 0});
            var n = {}, r = sessionStorage.getItem("ClientCode"), o = sessionStorage.getItem("UserId"),
                a = sessionStorage.getItem("UserToken"), i = sessionStorage.getItem("UserSfzh");
            return r && (n["XPS-ClientCode"] = r), o && (n["XPS-UserId"] = o), a && (n["XPS-UserToken"] = a) && (n["XPS-Token"] = a), i && (n["XPS-SFZH"] = i), /micromessenger/i.test(navigator.userAgent) && sessionStorage.getItem("weixinCode") && (n["XPS-LoginType"] = "WEIXIN"), e = f({}, e, {headers: f({}, e.headers, {}, n)}), e
        }), (function (e) {
            return d.$toast.fail("请求错误\n请稍后重试"), Promise.reject(e)
        })), c.a.interceptors.response.use((function (e) {
            d.$toast.clear();
            var t = e.data, n = e.config, r = p.a.parse(n.data);
            if ("1" === t.result || "4" === t.result || "1" === t.status || 200 === t.code) return t;
            if ("99" === t.result) {
                var o = sessionStorage.getItem("ClientCode") || "";
                sessionStorage.clear(), sessionStorage.setItem("ClientCode", o), /micromessenger/i.test(navigator.userAgent) && sessionStorage.getItem("weixinCode") ? setTimeout((function () {
                    var e = location, t = e.origin, n = e.pathname, r = e.hash,
                        o = "".concat(t, "/").concat(n).concat(r),
                        a = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx37000c7e0e7a056a&redirect_uri=".concat(encodeURIComponent(o), "&response_type=code&scope=snsapi_base#wechat_redirect");
                    location.replace(a)
                }), 0) : setTimeout((function () {
                    var e = location.href;
                    location.href = "/h5/dist/login/index.html#/login?redirect=".concat(encodeURIComponent(e))
                }), 2e3)
            }
            return "true" !== r.isShowErrorMsg && d.$toast.fail(t.msg || t.message), Promise.reject(t)
        }), (function (e) {
            var t = e.config;
            return d.$toast.clear(), t.params.isFirstLoading ? (document.getElementById("app").style.display = "none", document.body.innerHTML = "\n            <p style='position: absolute;top: 50%;left: 0;transform: translateY(-50%);width: 100%;font-size: 16px;text-align: center;'>\n            网络连接异常，请<a href='javascript:location.reload();' style='color:blue;text-decoration:underline;'>刷新</a>。\n            </p>\n        ") : d.$toast.fail("网络连接异常，请检查网络设置"), Promise.reject(e)
        }));
        var g = function () {
            var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r, o, a, i, s = arguments;
                return regeneratorRuntime.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = s.length > 0 && void 0 !== s[0] ? s[0] : "get", n = s.length > 1 && void 0 !== s[1] ? s[1] : "", r = s.length > 2 && void 0 !== s[2] ? s[2] : {}, o = s.length > 3 && void 0 !== s[3] ? s[3] : {}, a = "/", /^\/api/.test(n) && (a = "/ext"), e.prev = 6, e.next = 9, c()({
                                method: t,
                                url: n,
                                baseURL: a,
                                headers: o,
                                params: "get" === t ? r : {},
                                data: "post" === t ? "string" === typeof r ? r : p.a.stringify(r) : {}
                            });
                        case 9:
                            return i = e.sent, e.abrupt("return", i);
                        case 13:
                            return e.prev = 13, e.t0 = e["catch"](6), e.abrupt("return", Promise.reject(e.t0));
                        case 16:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[6, 13]])
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }();
        t["a"] = {
            get: function (e, t, n) {
                return g("get", e, t, n)
            }, post: function (e, t, n) {
                return g("post", e, t, n)
            }
        }
    }, "1f9f": function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0d5e"), o = {
            forRecord_list: function (e) {
                return r["a"].get("/app/enterRecordation/list", e)
            }, forRecord_submit: function (e) {
                return r["a"].get("/app/enterRecordation/submit", e)
            }, forRecord_detail: function (e) {
                return r["a"].get("/app/enterRecordation/detail", e)
            }, forRecord_fdyList: function (e) {
                return r["a"].get("/app/enterRecordation/fdyList", e)
            }, forRecord_approval: function (e) {
                return r["a"].get("/app/enterRecordation/approval", e)
            }
        };
        t["default"] = o
    }, "41e8": function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0d5e"), o = {
            epidemic_getSurvey: function (e) {
                return r["a"].get("/app/health/getSurvey", e)
            }, epidemic_submitSurvey: function (e) {
                return r["a"].post("/app/health/submitSurvey", e)
            }, epidemic_getHistory: function (e) {
                return r["a"].get("/app/health/getHistory", e)
            }
        };
        t["default"] = o
    }, "5e19": function (e, t, n) {
        "use strict";
        var r = n("0b73"), o = n.n(r);
        o.a
    }, 6389: function (e, t) {
        e.exports = VueRouter
    }, "6dcc": function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0d5e"), o = {
            visitorAppointment_getCollege: function (e) {
                return r["a"].post("/app/visitSchool/getCollege", e)
            }, visitorAppointment_addVisit: function (e) {
                return r["a"].post("/app/visitSchool/addVisit", e)
            }, visitorAppointment_sweepCode: function (e) {
                return r["a"].post("/app/visitSchool/sweepCode", e)
            }, visitorAppointment_delVisit: function (e) {
                return r["a"].post("/app/visitSchool/delVisit", e)
            }, visitorAppointment_getVisitType: function (e) {
                return r["a"].post("/app/visitSchool/getVisitType", e)
            }
        };
        t["default"] = o
    }, 7742: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0d5e"), o = {
            temperature_list: function (e) {
                return r["a"].post("/app/bodyTemperature/list", e)
            }, temperature_more: function (e) {
                return r["a"].post("/app/bodyTemperature/more", e)
            }, temperature_update: function (e) {
                return r["a"].post("/app/bodyTemperature/update", e)
            }, temperature_dealList: function (e) {
                return r["a"].post("/app/bodyTemperature/dealList", e)
            }, temperature_saveHandle: function (e) {
                return r["a"].post("/app/bodyTemperature/saveHandle", e)
            }, temperature_handleDetail: function (e) {
                return r["a"].post("/app/bodyTemperature/handleDetail", e)
            }, temperature_unformedList: function (e) {
                return r["a"].post("/app/bodyTemperature/unformedList", e)
            }, temperature_sendPush: function (e) {
                return r["a"].post("/app/bodyTemperature/sendPush", e)
            }
        };
        t["default"] = o
    }, 7804: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0d5e"), o = {
            getPassInfo: function (e) {
                return r["a"].post("/app/passCertificate/getPassInfo", e)
            }, fillForm: function (e) {
                return r["a"].post("/app/passCertificate/fillForm", e)
            }, clockin_clockIn: function (e) {
                return r["a"].post("/app/passCertificate/confirmPass", e)
            }, sendSmsCode: function (e) {
                return r["a"].post("/app/passCertificate/sendSmsCode", e)
            }, authorityCheck: function (e) {
                return r["a"].post("/app/passCertificate/authorityCheck", e)
            }, getUserRecord: function (e) {
                return r["a"].post("/app/passCertificate/getUserRecord", e)
            }, sendPush: function (e) {
                return r["a"].post("/app/enterRecordation/sendPush", e)
            }
        };
        t["default"] = o
    }, "783e": function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0d5e"), o = {
            getLoginUserInfo: function (e) {
                return r["a"].post("/app/wechatlogin/getLoginUserInfo", e)
            }
        };
        t["default"] = o
    }, 8247: function (e, t, n) {
        e.exports = n.p + "img/default_avatar.2af8449e.png"
    }, "8bbf": function (e, t) {
        e.exports = Vue
    }, "95af": function (e, t) {
        e.exports = "data:image/gif;base64,R0lGODlhIAAgAIAAAP///wAAACH5BAEAAAAALAAAAAAgACAAAAIehI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC5sFADs="
    }, 9649: function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, a08a: function (e, t, n) {
        var r = {
            "./clockin.js": "edf2",
            "./common.js": "cfc6",
            "./enterScan.js": "7804",
            "./epidemic.js": "41e8",
            "./forRecord.js": "1f9f",
            "./login.js": "783e",
            "./peopleFlow.js": "b317",
            "./temperature.js": "7742",
            "./visitorAppointment.js": "6dcc"
        };

        function o(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }

        o.keys = function () {
            return Object.keys(r)
        }, o.resolve = a, e.exports = o, o.id = "a08a"
    }, b317: function (e, t, n) {
        "use strict";
        n.r(t);
        n("5ab2"), n("6d57"), n("e10e");
        var r = n("b081"), o = n("0d5e");

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function (t) {
                    Object(r["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var s = {
            peopleFlow_passMonitoringCenter: function (e) {
                return o["a"].post("/app/passCertificate/passMonitoringCenter", i({}, e, {isNoShowLoading: !0}))
            }
        };
        t["default"] = s
    }, b6bc: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAADSCAIAAADScXJWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIyNDhGQzFERTVGNTExRTdCRDI4QTA0M0IyOUQ0QUU4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIyNDhGQzFFRTVGNTExRTdCRDI4QTA0M0IyOUQ0QUU4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjI0OEZDMUJFNUY1MTFFN0JEMjhBMDQzQjI5RDRBRTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjI0OEZDMUNFNUY1MTFFN0JEMjhBMDQzQjI5RDRBRTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7BLK6MAAALNUlEQVR42uyd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"
    }, c035: function (e, t, n) {
        "use strict";
        n.r(t);
        n("cc57"), n("e10e"), n("6d57"), n("1385");
        var r = n("f04e"), o = (n("8340"), n("c70d")), a = (n("c1a3"), n("613b")), i = (n("4536"), n("f45e")),
            s = (n("7caa"), n("e401")), c = (n("58bf"), n("ef55")), u = (n("f704"), n("e892")),
            p = (n("5575"), n("a959")), l = (n("e44b"), n("6648"), n("5f54"), n("f0e6"), n("8bbf")), f = n.n(l),
            d = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "app"}}, [e.hasTopBar ? n("TopBar") : e._e(), n("transition", {attrs: {name: "fade"}}, [n("keep-alive", [e.$route.meta.keepAlive ? n("router-view", {
                    staticClass: "main-view",
                    class: {"main-view-hasTopbar": e.hasTopBar}
                }) : e._e()], 1)], 1), n("transition", {attrs: {name: "fade"}}, [e.$route.meta.keepAlive ? e._e() : n("router-view", {
                    staticClass: "main-view",
                    class: {"main-view-hasTopbar": e.hasTopBar}
                })], 1)], 1)
            }, g = [], h = function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("header", {staticClass: "topbar"}, [r("a", {
                    staticClass: "back-btn", on: {
                        click: function (t) {
                            return t.preventDefault(), e.historyHandler(t)
                        }
                    }
                }, [r("img", {attrs: {src: n("9649"), alt: ""}}), r("span", [e._v("返回")])])])
            }, A = [], I = {
                data: function () {
                    return {}
                }, methods: {
                    historyHandler: function () {
                        this.$router.go(-1)
                    }
                }
            }, m = I, v = (n("5e19"), n("e90a")), b = Object(v["a"])(m, h, A, !1, null, "2e9c2e4e", null), S = b.exports,
            C = {
                components: {TopBar: S}, computed: {
                    hasTopBar: function () {
                        return !1
                    }
                }
            }, k = C, y = Object(v["a"])(k, d, g, !1, null, "66e2be28", null), w = y.exports, E = n("6389"), Q = n.n(E);
        f.a.use(Q.a);
        var O = function () {
                return n.e("chunk-ecc1a97c").then(n.bind(null, "5084"))
            }, B = function () {
                return n.e("chunk-367a661a").then(n.bind(null, "961a"))
            }, D = function () {
                return n.e("chunk-6dff2a7a").then(n.bind(null, "9c8a"))
            }, j = function () {
                return n.e("chunk-068ec06a").then(n.bind(null, "c5f5"))
            }, R = new Q.a({
                routes: [{
                    path: "/:type",
                    name: "home",
                    component: O,
                    meta: {title: "出校备案", keepAlive: !1},
                    children: [{
                        path: "/apply",
                        name: "apply",
                        component: D,
                        meta: {title: "备案详情", keepAlive: !1}
                    }, {path: "/record", name: "record", component: B, meta: {title: "申请记录", keepAlive: !1}}, {
                        path: "/tip",
                        name: "tip",
                        component: j,
                        meta: {title: "出校承诺书", keepAlive: !1}
                    }]
                }]
            }), x = n("a08a"), J = x.keys().reduce((function (e, t) {
                var n = x(t).default;
                return Object.assign(e, n)
            }), {}), P = J, M = (n("f548"), n("c0c3"), n("9e76"), n("9dd9"), n("9a33"), n("d886")),
            T = (n("06a2"), n("ec71")), U = (n("b449"), n("17d6")), N = f.a.prototype, V = {
                setMetaTitle: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if (document.title = e, this.isIOS()) {
                        var t = document.createElement("iframe");
                        t.style.visibility = "hidden", t.setAttribute("src", n("95af"));
                        var r = function e() {
                            setTimeout((function () {
                                t.removeEventListener("load", e), document.body.removeChild(t)
                            }), 0)
                        };
                        t.addEventListener("load", r), document.body.appendChild(t)
                    }
                }, uploadPhoto: function () {
                    var e = Object(U["a"])(regeneratorRuntime.mark((function e(t) {
                        var n, r, o, a, i, s, c, u, p, l;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", Promise.reject());
                                case 2:
                                    if (n = /image\/jpe?g|image\/png|image\/gif/, r = t.type, o = t.size, n.test(r)) {
                                        e.next = 7;
                                        break
                                    }
                                    return N.$toast("上传图片类型不符合要求，请重新选择"), e.abrupt("return", Promise.reject());
                                case 7:
                                    return a = 1, o > 1048576 && (i = o / 1048576, a = 1 / i), e.prev = 9, e.next = 12, Promise.all([G(t), H(t)]);
                                case 12:
                                    return s = e.sent, c = Object(T["a"])(s, 2), u = c[0], p = c[1], e.next = 18, L(u, p, r, a);
                                case 18:
                                    return l = e.sent, e.abrupt("return", l);
                                case 22:
                                    return e.prev = 22, e.t0 = e["catch"](9), N.$toast(e.t0.message || "上传图片失败"), e.abrupt("return", Promise.reject(e.t0));
                                case 26:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[9, 22]])
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    return t
                }(), validateUrlInfo: function (e, t, n) {
                    var r = e.query, o = r.isLogin, a = r.needClientCode, i = r.needLogin, s = r.token,
                        c = r["XPS-ClientCode"], u = r["XPS-UserId"];
                    if (c ? sessionStorage.setItem("ClientCode", c) : sessionStorage.getItem("ClientCode") || this.gotoStaticPage("tips.html?type=error"), o) if (u && (sessionStorage.setItem("UserId", u), s && ("string" !== Object(M["a"])(s).toLowerCase() && (s = s[s.length - 1]), sessionStorage.setItem("UserToken", encodeURIComponent(s)))), sessionStorage.getItem("UserId")) n(); else {
                        var p = N.$utils.getQueryString("code");
                        if (sessionStorage.setItem("weixinCode", p), /micromessenger/i.test(navigator.userAgent) && p) {
                            var l = {code: p};
                            "enterManageHome" === e.name && (l.agentNum = 3), N.$api.getLoginUserInfo(l).then((function (e) {
                                "string" === typeof e.item.departments && (e.item.departments = JSON.parse(e.item.departments)), sessionStorage.setItem("USERINFO", JSON.stringify(e.item)), sessionStorage.setItem("UserId", e.item.id), n()
                            }))
                        } else if (a || i) this.gotoStaticPage("tips.html?type=needLogin"); else {
                            var f = location.href;
                            location.href = "/h5/dist/login/index.html#/login?redirect=".concat(encodeURIComponent(f))
                        }
                    } else n()
                }, gotoStaticPage: function (e) {
                    var t = "", n = location.href.split("#")[0], r = n.split("/");
                    t = "/".concat(r[r.length - 3], "/").concat(r[r.length - 2], "/").concat(e), location.href = t
                }, debounce: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3, r = null;
                    return function () {
                        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        var s = t;
                        null !== r && clearTimeout(r), r = setTimeout((function () {
                            e.apply(s, a)
                        }), n)
                    }
                }, throttle: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3, r = Date.now();
                    return function () {
                        var o = t, a = Date.now();
                        if (a - r >= n) {
                            for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++) s[c] = arguments[c];
                            e.apply(o, s), r = Date.now()
                        }
                    }
                }, isIOS: function () {
                    var e = navigator.userAgent.toLowerCase();
                    return /iphone|ipad|ipod/.test(e)
                }, getQueryString: function (e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), n = window.location.search.substr(1).match(t),
                        r = "";
                    return null != n && (r = n[2]), t = null, n = null, null == r || "" == r || "undefined" == r ? "" : r
                }, makeIMEI: function () {
                    var e = navigator.userAgent, t = "";
                    t = e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1 || e.indexOf("iPod") > -1 ? "IOS" : "ANDROID";
                    for (var n = "", r = 0; r < 8; r++) n += Math.floor(10 * Math.random());
                    return t + "H5" + n
                }
            };

        function G(e) {
            var t = new FileReader;
            return t.readAsDataURL(e), new Promise((function (e, n) {
                t.onload = function (t) {
                    e(t.target.result)
                }, t.onerror = function () {
                    n(new Error("读取文件失败"))
                }
            }))
        }

        function H(e) {
            return new Promise((function (t) {
                EXIF.getData(e, (function () {
                    t(EXIF.getTag(this, "Orientation"))
                }))
            }))
        }

        function Z() {
            var e = /CPU iPhone OS (.*) like Mac OS/i.exec(navigator.userAgent);
            if (e && e[1]) {
                var t = e[1].split("_")[0];
                return t >= 13
            }
            return !1
        }

        function L(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            return new Promise((function (o, a) {
                var i = new Image;
                i.src = e, i.onload = function () {
                    var e, a, i, s, c = 0;
                    e = this.naturalWidth, a = this.naturalHeight;
                    var u = document.createElement("canvas");
                    u.width = i = e, u.height = s = a;
                    var p = u.getContext("2d");
                    if (!Z()) switch (t) {
                        case 3:
                            c = 180, e = -i, a = -s;
                            break;
                        case 6:
                            c = 90, u.width = s, u.height = i, e = i, a = -s;
                            break;
                        case 8:
                            c = 270, u.width = s, u.height = i, e = -i, a = s;
                            break
                    }
                    p.rotate(c * Math.PI / 180), p.drawImage(this, 0, 0, e, a);
                    var l = u.toDataURL(n, r), f = l.replace("data:" + n + ";base64,", "");
                    o(f)
                }, i.onerror = function () {
                    a(new Error("加载图片失败"))
                }
            }))
        }

        var F = {};
        s["a"].setDefaultOptions({duration: 2e3}), f.a.use(s["a"]), function (e, t) {
            Date.prototype.format = function (e) {
                var t = {
                    "M+": this.getMonth() + 1,
                    "d+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "S+": this.getMilliseconds()
                };
                for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
                return e
            }, t.addEventListener("error", (function (e) {
                var t = e.target;
                "img" === t.tagName.toLowerCase() && ("avatar" === t.getAttribute("type") ? t.src = n("8247") : t.src = n("b6bc"))
            }), !0)
        }(window, document);
        var X = n("c730");
        Object(X["a"])("".concat("", "service-worker.js"), {
            ready: function () {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            }, registered: function () {
                console.log("Service worker has been registered.")
            }, cached: function () {
                console.log("Content has been cached for offline use.")
            }, updatefound: function () {
                console.log("New content is downloading.")
            }, updated: function () {
                console.log("New content is available; please refresh.")
            }, offline: function () {
                console.log("No internet connection found. App is running in offline mode.")
            }, error: function (e) {
                console.error("Error during service worker registration:", e)
            }
        });
        n("000c");
        var Y = [p["a"], u["a"], c["a"], s["a"], i["a"], a["a"], o["a"], r["a"]];
        Y.reduce((function (e, t) {
            return e ? e.use(t) : f.a.use(t)
        }), null), f.a.prototype.$utils = V, f.a.prototype.$api = P, f.a.prototype.$isDev = !1, f.a.config.productionTip = !1, Object.keys(F).forEach((function (e) {
            f.a.filter(e, F[e])
        })), R.beforeEach((function (e, t, n) {
            var r = e.meta.title;
            r && V.setMetaTitle(r), "/" === e.path || "home" === e.name ? V.validateUrlInfo(e, t, n) : n()
        })), new f.a({
            router: R, render: function (e) {
                return e(w)
            }, data: function () {
                return {homeShowBackBtn: !0}
            }
        }).$mount("#app")
    }, cebe: function (e, t) {
        e.exports = axios
    }, cfc6: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0d5e"), o = {
            common_uploadPhoto: function (e) {
                return r["a"].post("/app/user/uploadPhoto", e)
            }, common_getQywxJsSdkInfo: function (e) {
                return r["a"].post("/app/settings/getQywxJsSdkInfo", e)
            }, common_getOpenId: function (e) {
                return r["a"].post("/app/visitSchool/getOpenId", e)
            }, common_getAreaList: function (e) {
                return r["a"].post("/app/health/getAreaList", e)
            }
        };
        t["default"] = o
    }, edf2: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0d5e"), o = {
            clockin_list: function (e) {
                return r["a"].post("/app/entranceClockIn/list", e)
            }, clockin_clockIn: function (e) {
                return r["a"].post("/app/entranceClockIn/clockIn", e)
            }
        };
        t["default"] = o
    }
});
//# sourceMappingURL=leave-school-for-record.d74ab0ef.js.map