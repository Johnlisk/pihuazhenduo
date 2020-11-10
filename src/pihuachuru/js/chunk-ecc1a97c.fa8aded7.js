(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-ecc1a97c"], {
    5084: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "index"}, [t.isTeacher ? n("van-search", {
                attrs: {placeholder: "请输入姓名/学号进行搜索"},
                on: {search: t.search},
                model: {
                    value: t.key, callback: function (e) {
                        t.key = e
                    }, expression: "key"
                }
            }) : t._e(), n("ul", [n("van-list", {
                attrs: {
                    finished: t.finished,
                    direction: t.up,
                    offset: "40",
                    "finished-text": "没有更多了"
                }, on: {load: t.getData}, model: {
                    value: t.listLoading, callback: function (e) {
                        t.listLoading = e
                    }, expression: "listLoading"
                }
            }, t._l(t.list, (function (e, i) {
                return n("router-link", {
                    key: i,
                    attrs: {tag: "li", to: "/apply?id=" + e.id + "&isTeacher=" + t.isTeacher}
                }, [n("div", {staticClass: "list-item-info"}, [n("p", [t._v("\n            备案编号：" + t._s(e.formatedId) + "\n            "), n("span", {class: t.status[e.status].color}, [t._v(t._s(t.status[e.status].text))])]), t.isTeacher ? n("p", [t._v("提交人：" + t._s(e.xm))]) : t._e(), n("p", {staticClass: "date"}, [t._v("提交时间：" + t._s(t._f("timeformat")(e.createDate)))])])])
            })), 1)], 1), t.isTeacher ? t._e() : n("div", {staticClass: "btn-wrap"}, [n("div", {
                staticClass: "btn bgc-blue",
                on: {
                    click: function (e) {
                        return t.submit()
                    }
                }
            }, [t._v("出校备案")])]), n("transition", {attrs: {name: "cover"}}, [n("router-view", {staticClass: "second-view"})], 1)], 1)
        }, r = [], s = (n("6c5f"), n("8007"));

        function a(t) {
            if (Array.isArray(t)) return Object(s["a"])(t)
        }

        function o(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }

        var u = n("1fef");

        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function h(t) {
            return a(t) || o(t) || Object(u["a"])(t) || c()
        }

        var f = n("7510"), l = n.n(f), d = {
            data: function () {
                return {
                    isTeacher: !1,
                    list: [],
                    pageNo: 1,
                    pageSize: 10,
                    key: "",
                    listLoading: !1,
                    finished: !1,
                    status: [{color: "bgc-lightblue", text: "未开始"}, {
                        color: "bgc-yellow",
                        text: "当日返校待审核"
                    }, {color: "bgc-blue", text: "当日返校已备案"}, {color: "bgc-red", text: "不通过"}, {
                        color: "bgc-green",
                        text: "非当日返校待审核"
                    }, {color: "bgc-lightblue", text: "非当日返校已备案"}]
                }
            }, beforeRouteUpdate: function (t, e, n) {
                "/apply" == e.fullPath ? (n(), location.reload()) : n()
            }, filters: {
                timeformat: function (t) {
                    return l()(t).format("YYYY-MM-DD HH:mm:ss")
                }
            }, methods: {
                getList: function () {
                    var t = this;
                    this.$api.forRecord_list({pageNo: this.pageNo, pageSize: this.pageSize}).then((function (e) {
                        e.data.length < t.pageSize && (t.finished = !0), t.list = [].concat(h(t.list), h(e.data)), t.pageNo++, t.listLoading = !1
                    }))
                }, getfdyList: function () {
                    var t = this;
                    this.$api.forRecord_fdyList({
                        pageNo: this.pageNo,
                        pageSize: this.pageSize,
                        key: this.key
                    }).then((function (e) {
                        e.data.length < t.pageSize && (t.finished = !0), t.list = [].concat(h(t.list), h(e.data)), t.pageNo++, t.listLoading = !1
                    }))
                }, search: function () {
                    this.finished = !1, this.pageNo = 1, this.list = [], this.listLoading = !0, this.getData()
                }, getData: function () {
                    1 == sessionStorage.getItem("isTeacher") || this.isTeacher ? this.getfdyList() : this.getList()
                }, submit: function () {
                    this.$router.push("/tip")
                }
            }, mounted: function () {
                Object.is(this.$route.params.type, void 0) ? 1 == sessionStorage.getItem("isTeacher") ? this.isTeacher = !0 : this.isTeacher = !1 : +this.$route.params.type ? (this.isTeacher = !0, sessionStorage.setItem("isTeacher", 1)) : (this.isTeacher = !1, sessionStorage.setItem("isTeacher", 0))
            }
        }, g = d, $ = (n("a1ff"), n("e90a")), m = Object($["a"])(g, i, r, !1, null, "03686c87", null);
        e["default"] = m.exports
    }, "5cab": function (t, e, n) {
    }, "6c5f": function (t, e, n) {
        var i = n("e46b");
        i(i.S, "Object", {is: n("8704")})
    }, 7510: function (t, e, n) {
        !function (e, n) {
            t.exports = n()
        }(0, (function () {
            "use strict";
            var t = "millisecond", e = "second", n = "minute", i = "hour", r = "day", s = "week", a = "month",
                o = "quarter", u = "year",
                c = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
                h = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                f = function (t, e, n) {
                    var i = String(t);
                    return !i || i.length >= e ? t : "" + Array(e + 1 - i.length).join(n) + t
                }, l = {
                    s: f, z: function (t) {
                        var e = -t.utcOffset(), n = Math.abs(e), i = Math.floor(n / 60), r = n % 60;
                        return (e <= 0 ? "+" : "-") + f(i, 2, "0") + ":" + f(r, 2, "0")
                    }, m: function (t, e) {
                        var n = 12 * (e.year() - t.year()) + (e.month() - t.month()), i = t.clone().add(n, a),
                            r = e - i < 0, s = t.clone().add(n + (r ? -1 : 1), a);
                        return Number(-(n + (e - i) / (r ? i - s : s - i)) || 0)
                    }, a: function (t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                    }, p: function (c) {
                        return {
                            M: a,
                            y: u,
                            w: s,
                            d: r,
                            D: "date",
                            h: i,
                            m: n,
                            s: e,
                            ms: t,
                            Q: o
                        }[c] || String(c || "").toLowerCase().replace(/s$/, "")
                    }, u: function (t) {
                        return void 0 === t
                    }
                }, d = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                }, g = "en", $ = {};
            $[g] = d;
            var m = function (t) {
                return t instanceof S
            }, p = function (t, e, n) {
                var i;
                if (!t) return g;
                if ("string" == typeof t) $[t] && (i = t), e && ($[t] = e, i = t); else {
                    var r = t.name;
                    $[r] = t, i = r
                }
                return !n && i && (g = i), i || !n && g
            }, y = function (t, e, n) {
                if (m(t)) return t.clone();
                var i = e ? "string" == typeof e ? {format: e, pl: n} : e : {};
                return i.date = t, new S(i)
            }, v = l;
            v.l = p, v.i = m, v.w = function (t, e) {
                return y(t, {locale: e.$L, utc: e.$u, $offset: e.$offset})
            };
            var S = function () {
                function f(t) {
                    this.$L = this.$L || p(t.locale, null, !0), this.parse(t)
                }

                var l = f.prototype;
                return l.parse = function (t) {
                    this.$d = function (t) {
                        var e = t.date, n = t.utc;
                        if (null === e) return new Date(NaN);
                        if (v.u(e)) return new Date;
                        if (e instanceof Date) return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var i = e.match(c);
                            if (i) return n ? new Date(Date.UTC(i[1], i[2] - 1, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, i[7] || 0)) : new Date(i[1], i[2] - 1, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, i[7] || 0)
                        }
                        return new Date(e)
                    }(t), this.init()
                }, l.init = function () {
                    var t = this.$d;
                    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                }, l.$utils = function () {
                    return v
                }, l.isValid = function () {
                    return !("Invalid Date" === this.$d.toString())
                }, l.isSame = function (t, e) {
                    var n = y(t);
                    return this.startOf(e) <= n && n <= this.endOf(e)
                }, l.isAfter = function (t, e) {
                    return y(t) < this.startOf(e)
                }, l.isBefore = function (t, e) {
                    return this.endOf(e) < y(t)
                }, l.$g = function (t, e, n) {
                    return v.u(t) ? this[e] : this.set(n, t)
                }, l.year = function (t) {
                    return this.$g(t, "$y", u)
                }, l.month = function (t) {
                    return this.$g(t, "$M", a)
                }, l.day = function (t) {
                    return this.$g(t, "$W", r)
                }, l.date = function (t) {
                    return this.$g(t, "$D", "date")
                }, l.hour = function (t) {
                    return this.$g(t, "$H", i)
                }, l.minute = function (t) {
                    return this.$g(t, "$m", n)
                }, l.second = function (t) {
                    return this.$g(t, "$s", e)
                }, l.millisecond = function (e) {
                    return this.$g(e, "$ms", t)
                }, l.unix = function () {
                    return Math.floor(this.valueOf() / 1e3)
                }, l.valueOf = function () {
                    return this.$d.getTime()
                }, l.startOf = function (t, o) {
                    var c = this, h = !!v.u(o) || o, f = v.p(t), l = function (t, e) {
                        var n = v.w(c.$u ? Date.UTC(c.$y, e, t) : new Date(c.$y, e, t), c);
                        return h ? n : n.endOf(r)
                    }, d = function (t, e) {
                        return v.w(c.toDate()[t].apply(c.toDate(), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), c)
                    }, g = this.$W, $ = this.$M, m = this.$D, p = "set" + (this.$u ? "UTC" : "");
                    switch (f) {
                        case u:
                            return h ? l(1, 0) : l(31, 11);
                        case a:
                            return h ? l(1, $) : l(0, $ + 1);
                        case s:
                            var y = this.$locale().weekStart || 0, S = (g < y ? g + 7 : g) - y;
                            return l(h ? m - S : m + (6 - S), $);
                        case r:
                        case"date":
                            return d(p + "Hours", 0);
                        case i:
                            return d(p + "Minutes", 1);
                        case n:
                            return d(p + "Seconds", 2);
                        case e:
                            return d(p + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, l.endOf = function (t) {
                    return this.startOf(t, !1)
                }, l.$set = function (s, o) {
                    var c, h = v.p(s), f = "set" + (this.$u ? "UTC" : ""),
                        l = (c = {}, c[r] = f + "Date", c.date = f + "Date", c[a] = f + "Month", c[u] = f + "FullYear", c[i] = f + "Hours", c[n] = f + "Minutes", c[e] = f + "Seconds", c[t] = f + "Milliseconds", c)[h],
                        d = h === r ? this.$D + (o - this.$W) : o;
                    if (h === a || h === u) {
                        var g = this.clone().set("date", 1);
                        g.$d[l](d), g.init(), this.$d = g.set("date", Math.min(this.$D, g.daysInMonth())).toDate()
                    } else l && this.$d[l](d);
                    return this.init(), this
                }, l.set = function (t, e) {
                    return this.clone().$set(t, e)
                }, l.get = function (t) {
                    return this[v.p(t)]()
                }, l.add = function (t, o) {
                    var c, h = this;
                    t = Number(t);
                    var f = v.p(o), l = function (e) {
                        var n = y(h);
                        return v.w(n.date(n.date() + Math.round(e * t)), h)
                    };
                    if (f === a) return this.set(a, this.$M + t);
                    if (f === u) return this.set(u, this.$y + t);
                    if (f === r) return l(1);
                    if (f === s) return l(7);
                    var d = (c = {}, c[n] = 6e4, c[i] = 36e5, c[e] = 1e3, c)[f] || 1, g = this.$d.getTime() + t * d;
                    return v.w(g, this)
                }, l.subtract = function (t, e) {
                    return this.add(-1 * t, e)
                }, l.format = function (t) {
                    var e = this;
                    if (!this.isValid()) return "Invalid Date";
                    var n = t || "YYYY-MM-DDTHH:mm:ssZ", i = v.z(this), r = this.$locale(), s = this.$H, a = this.$m,
                        o = this.$M, u = r.weekdays, c = r.months, f = function (t, i, r, s) {
                            return t && (t[i] || t(e, n)) || r[i].substr(0, s)
                        }, l = function (t) {
                            return v.s(s % 12 || 12, t, "0")
                        }, d = r.meridiem || function (t, e, n) {
                            var i = t < 12 ? "AM" : "PM";
                            return n ? i.toLowerCase() : i
                        }, g = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: o + 1,
                            MM: v.s(o + 1, 2, "0"),
                            MMM: f(r.monthsShort, o, c, 3),
                            MMMM: c[o] || c(this, n),
                            D: this.$D,
                            DD: v.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: f(r.weekdaysMin, this.$W, u, 2),
                            ddd: f(r.weekdaysShort, this.$W, u, 3),
                            dddd: u[this.$W],
                            H: String(s),
                            HH: v.s(s, 2, "0"),
                            h: l(1),
                            hh: l(2),
                            a: d(s, a, !0),
                            A: d(s, a, !1),
                            m: String(a),
                            mm: v.s(a, 2, "0"),
                            s: String(this.$s),
                            ss: v.s(this.$s, 2, "0"),
                            SSS: v.s(this.$ms, 3, "0"),
                            Z: i
                        };
                    return n.replace(h, (function (t, e) {
                        return e || g[t] || i.replace(":", "")
                    }))
                }, l.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, l.diff = function (t, c, h) {
                    var f, l = v.p(c), d = y(t), g = 6e4 * (d.utcOffset() - this.utcOffset()), $ = this - d,
                        m = v.m(this, d);
                    return m = (f = {}, f[u] = m / 12, f[a] = m, f[o] = m / 3, f[s] = ($ - g) / 6048e5, f[r] = ($ - g) / 864e5, f[i] = $ / 36e5, f[n] = $ / 6e4, f[e] = $ / 1e3, f)[l] || $, h ? m : v.a(m)
                }, l.daysInMonth = function () {
                    return this.endOf(a).$D
                }, l.$locale = function () {
                    return $[this.$L]
                }, l.locale = function (t, e) {
                    if (!t) return this.$L;
                    var n = this.clone(), i = p(t, e, !0);
                    return i && (n.$L = i), n
                }, l.clone = function () {
                    return v.w(this.$d, this)
                }, l.toDate = function () {
                    return new Date(this.valueOf())
                }, l.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null
                }, l.toISOString = function () {
                    return this.$d.toISOString()
                }, l.toString = function () {
                    return this.$d.toUTCString()
                }, f
            }();
            return y.prototype = S.prototype, y.extend = function (t, e) {
                return t(e, S, y), y
            }, y.locale = p, y.isDayjs = m, y.unix = function (t) {
                return y(1e3 * t)
            }, y.en = $[g], y.Ls = $, y
        }))
    }, a1ff: function (t, e, n) {
        "use strict";
        var i = n("5cab"), r = n.n(i);
        r.a
    }
}]);
//# sourceMappingURL=chunk-ecc1a97c.fa8aded7.js.map