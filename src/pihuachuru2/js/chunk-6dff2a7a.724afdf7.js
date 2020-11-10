(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6dff2a7a"], {
    "0cf8": function (t, e, s) {
    }, "0f05": function (t, e, s) {
    }, "1cf5": function (t, e, s) {
        "use strict";
        var a = s("0f05"), i = s.n(a);
        i.a
    }, "440b": function (t, e, s) {
        "use strict";
        var a = s("0cf8"), i = s.n(a);
        i.a
    }, 7510: function (t, e, s) {
        !function (e, s) {
            t.exports = s()
        }(0, (function () {
            "use strict";
            var t = "millisecond", e = "second", s = "minute", a = "hour", i = "day", n = "week", r = "month",
                o = "quarter", c = "year",
                l = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
                u = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                f = function (t, e, s) {
                    var a = String(t);
                    return !a || a.length >= e ? t : "" + Array(e + 1 - a.length).join(s) + t
                }, d = {
                    s: f, z: function (t) {
                        var e = -t.utcOffset(), s = Math.abs(e), a = Math.floor(s / 60), i = s % 60;
                        return (e <= 0 ? "+" : "-") + f(a, 2, "0") + ":" + f(i, 2, "0")
                    }, m: function (t, e) {
                        var s = 12 * (e.year() - t.year()) + (e.month() - t.month()), a = t.clone().add(s, r),
                            i = e - a < 0, n = t.clone().add(s + (i ? -1 : 1), r);
                        return Number(-(s + (e - a) / (i ? a - n : n - a)) || 0)
                    }, a: function (t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                    }, p: function (l) {
                        return {
                            M: r,
                            y: c,
                            w: n,
                            d: i,
                            D: "date",
                            h: a,
                            m: s,
                            s: e,
                            ms: t,
                            Q: o
                        }[l] || String(l || "").toLowerCase().replace(/s$/, "")
                    }, u: function (t) {
                        return void 0 === t
                    }
                }, m = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                }, p = "en", v = {};
            v[p] = m;
            var h = function (t) {
                return t instanceof y
            }, _ = function (t, e, s) {
                var a;
                if (!t) return p;
                if ("string" == typeof t) v[t] && (a = t), e && (v[t] = e, a = t); else {
                    var i = t.name;
                    v[i] = t, a = i
                }
                return !s && a && (p = a), a || !s && p
            }, g = function (t, e, s) {
                if (h(t)) return t.clone();
                var a = e ? "string" == typeof e ? {format: e, pl: s} : e : {};
                return a.date = t, new y(a)
            }, x = d;
            x.l = _, x.i = h, x.w = function (t, e) {
                return g(t, {locale: e.$L, utc: e.$u, $offset: e.$offset})
            };
            var y = function () {
                function f(t) {
                    this.$L = this.$L || _(t.locale, null, !0), this.parse(t)
                }

                var d = f.prototype;
                return d.parse = function (t) {
                    this.$d = function (t) {
                        var e = t.date, s = t.utc;
                        if (null === e) return new Date(NaN);
                        if (x.u(e)) return new Date;
                        if (e instanceof Date) return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var a = e.match(l);
                            if (a) return s ? new Date(Date.UTC(a[1], a[2] - 1, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, a[7] || 0)) : new Date(a[1], a[2] - 1, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, a[7] || 0)
                        }
                        return new Date(e)
                    }(t), this.init()
                }, d.init = function () {
                    var t = this.$d;
                    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                }, d.$utils = function () {
                    return x
                }, d.isValid = function () {
                    return !("Invalid Date" === this.$d.toString())
                }, d.isSame = function (t, e) {
                    var s = g(t);
                    return this.startOf(e) <= s && s <= this.endOf(e)
                }, d.isAfter = function (t, e) {
                    return g(t) < this.startOf(e)
                }, d.isBefore = function (t, e) {
                    return this.endOf(e) < g(t)
                }, d.$g = function (t, e, s) {
                    return x.u(t) ? this[e] : this.set(s, t)
                }, d.year = function (t) {
                    return this.$g(t, "$y", c)
                }, d.month = function (t) {
                    return this.$g(t, "$M", r)
                }, d.day = function (t) {
                    return this.$g(t, "$W", i)
                }, d.date = function (t) {
                    return this.$g(t, "$D", "date")
                }, d.hour = function (t) {
                    return this.$g(t, "$H", a)
                }, d.minute = function (t) {
                    return this.$g(t, "$m", s)
                }, d.second = function (t) {
                    return this.$g(t, "$s", e)
                }, d.millisecond = function (e) {
                    return this.$g(e, "$ms", t)
                }, d.unix = function () {
                    return Math.floor(this.valueOf() / 1e3)
                }, d.valueOf = function () {
                    return this.$d.getTime()
                }, d.startOf = function (t, o) {
                    var l = this, u = !!x.u(o) || o, f = x.p(t), d = function (t, e) {
                        var s = x.w(l.$u ? Date.UTC(l.$y, e, t) : new Date(l.$y, e, t), l);
                        return u ? s : s.endOf(i)
                    }, m = function (t, e) {
                        return x.w(l.toDate()[t].apply(l.toDate(), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), l)
                    }, p = this.$W, v = this.$M, h = this.$D, _ = "set" + (this.$u ? "UTC" : "");
                    switch (f) {
                        case c:
                            return u ? d(1, 0) : d(31, 11);
                        case r:
                            return u ? d(1, v) : d(0, v + 1);
                        case n:
                            var g = this.$locale().weekStart || 0, y = (p < g ? p + 7 : p) - g;
                            return d(u ? h - y : h + (6 - y), v);
                        case i:
                        case"date":
                            return m(_ + "Hours", 0);
                        case a:
                            return m(_ + "Minutes", 1);
                        case s:
                            return m(_ + "Seconds", 2);
                        case e:
                            return m(_ + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, d.endOf = function (t) {
                    return this.startOf(t, !1)
                }, d.$set = function (n, o) {
                    var l, u = x.p(n), f = "set" + (this.$u ? "UTC" : ""),
                        d = (l = {}, l[i] = f + "Date", l.date = f + "Date", l[r] = f + "Month", l[c] = f + "FullYear", l[a] = f + "Hours", l[s] = f + "Minutes", l[e] = f + "Seconds", l[t] = f + "Milliseconds", l)[u],
                        m = u === i ? this.$D + (o - this.$W) : o;
                    if (u === r || u === c) {
                        var p = this.clone().set("date", 1);
                        p.$d[d](m), p.init(), this.$d = p.set("date", Math.min(this.$D, p.daysInMonth())).toDate()
                    } else d && this.$d[d](m);
                    return this.init(), this
                }, d.set = function (t, e) {
                    return this.clone().$set(t, e)
                }, d.get = function (t) {
                    return this[x.p(t)]()
                }, d.add = function (t, o) {
                    var l, u = this;
                    t = Number(t);
                    var f = x.p(o), d = function (e) {
                        var s = g(u);
                        return x.w(s.date(s.date() + Math.round(e * t)), u)
                    };
                    if (f === r) return this.set(r, this.$M + t);
                    if (f === c) return this.set(c, this.$y + t);
                    if (f === i) return d(1);
                    if (f === n) return d(7);
                    var m = (l = {}, l[s] = 6e4, l[a] = 36e5, l[e] = 1e3, l)[f] || 1, p = this.$d.getTime() + t * m;
                    return x.w(p, this)
                }, d.subtract = function (t, e) {
                    return this.add(-1 * t, e)
                }, d.format = function (t) {
                    var e = this;
                    if (!this.isValid()) return "Invalid Date";
                    var s = t || "YYYY-MM-DDTHH:mm:ssZ", a = x.z(this), i = this.$locale(), n = this.$H, r = this.$m,
                        o = this.$M, c = i.weekdays, l = i.months, f = function (t, a, i, n) {
                            return t && (t[a] || t(e, s)) || i[a].substr(0, n)
                        }, d = function (t) {
                            return x.s(n % 12 || 12, t, "0")
                        }, m = i.meridiem || function (t, e, s) {
                            var a = t < 12 ? "AM" : "PM";
                            return s ? a.toLowerCase() : a
                        }, p = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: o + 1,
                            MM: x.s(o + 1, 2, "0"),
                            MMM: f(i.monthsShort, o, l, 3),
                            MMMM: l[o] || l(this, s),
                            D: this.$D,
                            DD: x.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: f(i.weekdaysMin, this.$W, c, 2),
                            ddd: f(i.weekdaysShort, this.$W, c, 3),
                            dddd: c[this.$W],
                            H: String(n),
                            HH: x.s(n, 2, "0"),
                            h: d(1),
                            hh: d(2),
                            a: m(n, r, !0),
                            A: m(n, r, !1),
                            m: String(r),
                            mm: x.s(r, 2, "0"),
                            s: String(this.$s),
                            ss: x.s(this.$s, 2, "0"),
                            SSS: x.s(this.$ms, 3, "0"),
                            Z: a
                        };
                    return s.replace(u, (function (t, e) {
                        return e || p[t] || a.replace(":", "")
                    }))
                }, d.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, d.diff = function (t, l, u) {
                    var f, d = x.p(l), m = g(t), p = 6e4 * (m.utcOffset() - this.utcOffset()), v = this - m,
                        h = x.m(this, m);
                    return h = (f = {}, f[c] = h / 12, f[r] = h, f[o] = h / 3, f[n] = (v - p) / 6048e5, f[i] = (v - p) / 864e5, f[a] = v / 36e5, f[s] = v / 6e4, f[e] = v / 1e3, f)[d] || v, u ? h : x.a(h)
                }, d.daysInMonth = function () {
                    return this.endOf(r).$D
                }, d.$locale = function () {
                    return v[this.$L]
                }, d.locale = function (t, e) {
                    if (!t) return this.$L;
                    var s = this.clone(), a = _(t, e, !0);
                    return a && (s.$L = a), s
                }, d.clone = function () {
                    return x.w(this.$d, this)
                }, d.toDate = function () {
                    return new Date(this.valueOf())
                }, d.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null
                }, d.toISOString = function () {
                    return this.$d.toISOString()
                }, d.toString = function () {
                    return this.$d.toUTCString()
                }, f
            }();
            return g.prototype = y.prototype, g.extend = function (t, e) {
                return t(e, y, g), g
            }, g.locale = _, g.isDayjs = h, g.unix = function (t) {
                return g(1e3 * t)
            }, g.en = v[p], g.Ls = v, g
        }))
    }, "93ac": function (t, e, s) {
        t.exports = s.p + "img/commom_icon_chenggong@2x.cd443ad3.png"
    }, "9c8a": function (t, e, s) {
        "use strict";
        s.r(e);
        var a = function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "index"}, [s("section", {staticClass: "info"}, [t.id ? s("p", [t._v("\n      备案编号：" + t._s(t.form.formatedId) + "\n      "), s("span", {
                class: t.status[t.formStatus].color,
                staticStyle: {float: "right"}
            }, [t._v(t._s(t.status[t.formStatus].text))])]) : t._e(), s("p", [s("span", [t._v("姓名：")]), s("span", [t._v(t._s(t.info.xm))])]), s("p", [s("span", [t._v("学号：")]), s("span", [t._v(t._s(t.info.xh))])]), s("p", [s("span", [t._v("性别：")]), s("span", [t._v(t._s(t.info.xb ? "男" : "女"))])]), s("p", [s("span", [t._v("学院：")]), s("span", [t._v(t._s(t.info.xxmc))])]), s("p", [s("span", [t._v("专业：")]), s("span", [t._v(t._s(t.info.zymc))])]), t.info.xz ? s("p", [s("span", [t._v("学历：")]), s("span", [t._v(t._s(3 == t.info.xz ? "专科" : "本科"))])]) : t._e(), s("p", [s("span", [t._v("年级：")]), s("span", [t._v(t._s(t.info.rxnj))])])]), t.id && t.canPending ? s("section", {staticClass: "info"}, [s("p", [s("span", [t._v("联系方式：")]), s("span", [t._v(t._s(t.form.lxfs))])]), s("p", [s("span", [t._v("辅导员姓名：")]), s("span", [t._v(t._s(t.form.fdyxm))])]), s("p", [s("span", [t._v("出校事由：")]), s("span", [t._v(t._s(t.form.cxsy))])]), s("p", [s("span", [t._v("出校日期：")]), s("span", [t._v(t._s(t.form.cxrq))])]), s("p", [s("span", [t._v("出校起始时间：")]), s("span", [t._v(t._s(t.form.startTime))])]), s("p", [s("span", [t._v("出校结束时间：")]), s("span", [t._v(t._s(t.form.endTime))])]), s("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == t.form.backType,
                    expression: "form.backType==2"
                }]
            }, [s("span", [t._v("返校日期：")]), s("span", [t._v(t._s(t.form.fxrq))])]), s("p", [s("span", [t._v("出校后行动轨迹：")]), s("span", [t._v(t._s(t.form.trace))])]), s("p", [s("span", [t._v("本人郑重承诺，如实填写出校后详细行动轨迹，不前往其他无关地方。")]), s("span", {
                staticStyle: {
                    display: "block",
                    "margin-top": "10px"
                }
            }, [t._v("答：" + t._s(1 == t.form.promise ? "是" : "否"))])]), s("p", [s("span", [t._v("是否当日返校")]), s("span", {
                staticStyle: {
                    display: "block",
                    "margin-top": "10px"
                }
            }, [t._v("答：" + t._s(1 == t.form.backType ? "当天返回" : "当天不返回"))])])]) : t._e(), t.canPending ? t._e() : [s("header", [t._v("个人信息")]), s("div", {staticClass: "field-wrap"}, [s("div", {staticClass: "field-item"}, [s("label", [t._v("联系方式")]), s("div", {staticClass: "ipt"}, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.form.lxfs,
                    expression: "form.lxfs"
                }],
                attrs: {type: "text", placeholder: "请填写"},
                domProps: {value: t.form.lxfs},
                on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.form, "lxfs", e.target.value)
                    }
                }
            })])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("辅导员姓名")]), s("div", {staticClass: "ipt"}, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.form.fdyxm,
                    expression: "form.fdyxm"
                }],
                attrs: {type: "text", placeholder: "请填写"},
                domProps: {value: t.form.fdyxm},
                on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.form, "fdyxm", e.target.value)
                    }
                }
            })])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("出校事由")]), s("div", {staticClass: "ipt"}, [s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.form.cxsy,
                    expression: "form.cxsy"
                }], attrs: {placeholder: "请填写"}, domProps: {value: t.form.cxsy}, on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.form, "cxsy", e.target.value)
                    }
                }
            })])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("出校日期")]), s("div", {staticClass: "ipt"}, [s("span", {
                class: t.form.cxrq ? "" : "colorCCC",
                on: {
                    click: function (e) {
                        return t.openPicker(0)
                    }
                }
            }, [t._v(t._s(t.cxrqText ? t.cxrqText : "请选择"))]), s("i", {staticClass: "iconfont icon-jiantou9"})])]), s("div", {
                staticClass: "field-item",
                on: {
                    click: function (e) {
                        return t.openPicker(1)
                    }
                }
            }, [s("label", [t._v("出校起始时间")]), s("div", {staticClass: "ipt"}, [s("span", {class: t.form.startTime ? "" : "colorCCC"}, [t._v(t._s(t.form.startTime ? t.form.startTime : "请选择"))]), s("i", {staticClass: "iconfont icon-jiantou9"})])]), s("div", {
                staticClass: "field-item",
                on: {
                    click: function (e) {
                        return t.openPicker(2)
                    }
                }
            }, [s("label", [t._v("出校结束时间")]), s("div", {staticClass: "ipt"}, [s("span", {class: t.form.endTime ? "" : "colorCCC"}, [t._v(t._s(t.form.endTime ? t.form.endTime : "请选择"))]), s("i", {staticClass: "iconfont icon-jiantou9"})])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("出校后行动轨迹")]), s("div", {staticClass: "ipt"}, [s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.form.trace,
                    expression: "form.trace"
                }], attrs: {placeholder: "请填写"}, domProps: {value: t.form.trace}, on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.form, "trace", e.target.value)
                    }
                }
            })])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("本人郑重承诺，如实填写出校后详细行动轨迹，不前往其他无关地方。")]), s("div", {
                staticClass: "ipt",
                on: {
                    click: function (e) {
                        return t.openCard(0)
                    }
                }
            }, [s("span", {class: t.promiseTypeName ? "" : "colorCCC"}, [t._v(t._s(t.promiseTypeName ? t.promiseTypeName : "请选择"))]), s("i", {staticClass: "iconfont icon-jiantou9"})])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("是否当日返校")]), s("div", {
                staticClass: "ipt",
                on: {
                    click: function (e) {
                        return t.openCard(1)
                    }
                }
            }, [s("span", {class: t.leaveTypeName ? "" : "colorCCC"}, [t._v(t._s(t.leaveTypeName ? t.leaveTypeName : "请选择"))]), s("i", {staticClass: "iconfont icon-jiantou9"})])]), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == t.form.backType,
                    expression: "form.backType==2"
                }], staticClass: "field-item", on: {
                    click: function (e) {
                        return t.openPicker(3)
                    }
                }
            }, [s("label", [t._v("返校日期")]), s("div", {staticClass: "ipt"}, [s("span", {
                class: t.form.fxrq ? "" : "colorCCC",
                on: {
                    click: function (e) {
                        return t.openPicker(0)
                    }
                }
            }, [t._v(t._s(t.fxrqText ? t.fxrqText : "请选择"))]), s("i", {staticClass: "iconfont icon-jiantou9"})])])])], t.id && 1 != t.formStatus && t.isEdit ? s("section", {staticClass: "info"}, [s("header", {staticStyle: {"padding-left": "0"}}, [t._v("审核")]), s("p", [s("span", [t._v("备案状态：")]), s("span", [t._v(t._s(t.status[t.formStatus].text))])]), s("p", [s("span", [t._v("审核意见：")]), s("span", [t._v(t._s(t.detailStatus.approvalRemarks || "暂无"))])]), s("p", [s("span", [t._v("出入校状态：")]), s("span", [t._v(t._s(t.leaveStatusList[t.detailStatus.leaveStatus]))])]), s("p", [s("span", [t._v("备注：")]), s("span", [t._v(t._s(t.detailStatus.remarks || "暂无"))])]), s("p", [s("span", [t._v("审核人姓名：")]), s("span", [t._v(t._s(t.detailStatus.approvalUserName))])]), s("p", [s("span", [t._v("审核时间：")]), s("span", [t._v(t._s(t.detailStatus.approvalTime))])])]) : t._e(), t.id && 1 != t.formStatus && !t.isEdit && t.isTeacher ? [s("header", [t._v("审核")]), s("div", {staticClass: "field-wrap"}, [s("div", {staticClass: "field-item"}, [s("label", [t._v("审核状态")]), s("div", {
                staticClass: "ipt",
                on: {
                    click: function (e) {
                        return t.openCard(2)
                    }
                }
            }, [s("span", {class: t.detailStatus.status ? "" : "colorCCC"}, [t._v(t._s(t.detailStatus.status ? t.status[t.detailStatus.status].text : "请选择"))]), s("i", {staticClass: "iconfont icon-jiantou9"})])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("审核意见")]), s("div", {staticClass: "ipt"}, [s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.detailStatus.approvalRemarks,
                    expression: "detailStatus.approvalRemarks"
                }],
                attrs: {placeholder: "请填写"},
                domProps: {value: t.detailStatus.approvalRemarks},
                on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.detailStatus, "approvalRemarks", e.target.value)
                    }
                }
            })])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("出入校状态")]), s("div", {
                staticClass: "ipt",
                on: {
                    click: function (e) {
                        return t.openCard(3)
                    }
                }
            }, [s("span", {class: t.detailStatus.leaveStatus ? "" : "colorCCC"}, [t._v(t._s(t.detailStatus.leaveStatus ? t.leaveStatusList[t.detailStatus.leaveStatus] : "请选择"))]), s("i", {staticClass: "iconfont icon-jiantou9"})])]), s("div", {staticClass: "field-item"}, [s("label", [t._v("备注")]), s("div", {staticClass: "ipt"}, [s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.detailStatus.remarks,
                    expression: "detailStatus.remarks"
                }], attrs: {placeholder: "请填写"}, domProps: {value: t.detailStatus.remarks}, on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.detailStatus, "remarks", e.target.value)
                    }
                }
            })])])])] : t._e(), t.isTeacher ? s("div", [1 == t.formStatus ? s("div", {staticClass: "btns"}, [s("div", {
                staticClass: "btn",
                on: {
                    click: function (e) {
                        return t.openDialog(3)
                    }
                }
            }, [t._v("备案不通过")]), s("div", {
                staticClass: "btn blue", on: {
                    click: function (e) {
                        return t.openDialog(2)
                    }
                }
            }, [t._v("备案通过")])]) : [t.isEdit ? s("div", {staticClass: "btn-wrap"}, [s("div", {
                staticClass: "btn bgc-blue",
                on: {
                    click: function (e) {
                        return t.editTeacher()
                    }
                }
            }, [t._v("编辑")])]) : s("div", {staticClass: "btns"}, [s("div", {
                staticClass: "btn",
                on: {
                    click: function (e) {
                        t.isEdit = !0
                    }
                }
            }, [t._v("取消")]), s("div", {
                staticClass: "btn blue",
                on: {click: t.makesure}
            }, [t._v("确认")])])]], 2) : s("div", [t.id ? [1 == t.formStatus || 3 == t.formStatus ? s("div", {staticClass: "btn-wrap"}, [t.canPending ? s("div", {
                staticClass: "btn bgc-blue",
                on: {
                    click: function (e) {
                        return t.canHandle()
                    }
                }
            }, [t._v("修改出校备案")]) : s("div", {
                staticClass: "btn bgc-blue", on: {
                    click: function (e) {
                        return t.submit()
                    }
                }
            }, [t._v("提交")])]) : t._e()] : s("div", {staticClass: "btn-wrap"}, [s("div", {
                staticClass: "btn bgc-blue",
                on: {
                    click: function (e) {
                        return t.submit()
                    }
                }
            }, [t._v("提交")])])], 2), t.cardMaskShow ? s("div", {staticClass: "cardmask"}, [s("transition", {attrs: {name: "cardpull"}}, [t.cardShow ? s("div", {staticClass: "message-box-wrap"}, [s("div", {staticClass: "message-box"}, [0 == t.popType ? s("div", {staticClass: "message"}, t._l(t.promiseList, (function (e, a) {
                return s("div", {
                    key: a, staticClass: "card", on: {
                        click: function (e) {
                            return t.selectPop(a)
                        }
                    }
                }, [t._v(t._s(e))])
            })), 0) : t._e(), 1 == t.popType ? s("div", {staticClass: "message"}, t._l(t.leaveSchoolList, (function (e, a) {
                return s("div", {
                    key: a, staticClass: "card", on: {
                        click: function (e) {
                            return t.selectPop(a)
                        }
                    }
                }, [t._v(t._s(e))])
            })), 0) : t._e(), 2 == t.popType ? s("div", {staticClass: "message"}, t._l(t.status, (function (e, a) {
                return e.canChange.includes(+t.currStatus) ? s("div", {
                    key: a,
                    staticClass: "card",
                    on: {
                        click: function (e) {
                            return t.selectPop(a)
                        }
                    }
                }, [t._v(t._s(e.text))]) : t._e()
            })), 0) : t._e(), 3 == t.popType ? s("div", {staticClass: "message"}, t._l(t.leaveStatusList, (function (e, a) {
                return 0 != a ? s("div", {
                    key: a, staticClass: "card", on: {
                        click: function (e) {
                            return t.selectPop(a)
                        }
                    }
                }, [t._v(t._s(e))]) : t._e()
            })), 0) : t._e(), s("div", {staticClass: "btn-group-2"}, [s("div", {
                staticClass: "cancel-btn",
                on: {click: t.closeCard}
            }, [t._v("取消")])])])]) : t._e()])], 1) : t._e(), s("van-popup", {
                attrs: {position: "bottom"},
                model: {
                    value: t.showPicker, callback: function (e) {
                        t.showPicker = e
                    }, expression: "showPicker"
                }
            }, [0 == t.openPickerType ? s("van-datetime-picker", {
                attrs: {
                    type: "date",
                    title: "选择出校日期",
                    formatter: t.formatter
                }, on: {cancel: t.onCancel, confirm: t.onConfirm}, model: {
                    value: t.form.cxrq, callback: function (e) {
                        t.$set(t.form, "cxrq", e)
                    }, expression: "form.cxrq"
                }
            }) : 1 == t.openPickerType ? s("van-datetime-picker", {
                attrs: {
                    type: "time",
                    title: "选择出校起始时间",
                    "min-hour": 6,
                    "max-hour": 22
                },
                on: {cancel: t.onCancel, confirm: t.onConfirm},
                model: {
                    value: t.form.startTime, callback: function (e) {
                        t.$set(t.form, "startTime", e)
                    }, expression: "form.startTime"
                }
            }) : 2 == t.openPickerType ? s("van-datetime-picker", {
                attrs: {
                    type: "time",
                    title: "选择出校结束时间",
                    "min-hour": 6,
                    "max-hour": 22
                },
                on: {cancel: t.onCancel, confirm: t.onConfirm},
                model: {
                    value: t.form.endTime, callback: function (e) {
                        t.$set(t.form, "endTime", e)
                    }, expression: "form.endTime"
                }
            }) : s("van-datetime-picker", {
                attrs: {type: "date", title: "选择返校日期", formatter: t.formatter},
                on: {cancel: t.onCancel, confirm: t.onConfirm},
                model: {
                    value: t.form.fxrq, callback: function (e) {
                        t.$set(t.form, "fxrq", e)
                    }, expression: "form.fxrq"
                }
            })], 1), s("message-box-second", {
                attrs: {title: t.title},
                on: {change: t.goback},
                model: {
                    value: t.messageShow, callback: function (e) {
                        t.messageShow = e
                    }, expression: "messageShow"
                }
            }), s("van-dialog", {
                attrs: {title: "温馨提示", message: "出校备案已通过，系统将会通知学生", "show-cancel-button": ""},
                on: {
                    cancel: function (e) {
                        t.dialogShow = !1
                    }, confirm: t.makesure
                },
                model: {
                    value: t.dialogShow, callback: function (e) {
                        t.dialogShow = e
                    }, expression: "dialogShow"
                }
            }, [3 == t.statusType ? s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.detailStatus.approvalRemarks,
                    expression: "detailStatus.approvalRemarks"
                }],
                staticStyle: {
                    padding: "10px",
                    margin: "10px",
                    "background-color": "#f5f5f5",
                    border: "none",
                    width: "calc(100% - 20px)",
                    height: "100px"
                },
                attrs: {placeholder: "请输入拒绝意见"},
                domProps: {value: t.detailStatus.approvalRemarks},
                on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.detailStatus, "approvalRemarks", e.target.value)
                    }
                }
            }) : t._e()])], 2)
        }, i = [];

        function n(t, e) {
            if (null == t) return {};
            var s, a, i = {}, n = Object.keys(t);
            for (a = 0; a < n.length; a++) s = n[a], e.indexOf(s) >= 0 || (i[s] = t[s]);
            return i
        }

        function r(t, e) {
            if (null == t) return {};
            var s, a, i = n(t, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                for (a = 0; a < r.length; a++) s = r[a], e.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s])
            }
            return i
        }

        s("b449");
        var o = s("17d6"), c = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    directives: [{name: "show", rawName: "v-show", value: t.show, expression: "show"}],
                    staticClass: "mask"
                }, [a("transition", {attrs: {name: "fade"}}, [a("div", {staticClass: "message-box"}, [a("img", {
                    attrs: {
                        src: s("93ac"),
                        alt: ""
                    }
                }), a("div", {staticClass: "title"}, [t._v(t._s(t.title))]), a("div", {staticClass: "btn-group-2"}, [a("div", {
                    staticClass: "ensure-btn",
                    on: {click: t.ensure}
                }, [t._v("我知道了")])])])])], 1)
            }, l = [], u = {
                model: {prop: "show", event: "change"},
                props: {
                    show: {type: Boolean, default: !1},
                    hasCancel: {type: Boolean, default: !0},
                    title: {type: String, default: "温馨提示"}
                },
                data: function () {
                    return {}
                },
                methods: {
                    ensure: function () {
                        this.$emit("change", !1)
                    }
                }
            }, f = u, d = (s("1cf5"), s("e90a")), m = Object(d["a"])(f, c, l, !1, null, "3f7fd78f", null), p = m.exports,
            v = s("7510"), h = s.n(v), _ = {
                components: {"message-box-second": p}, data: function () {
                    return {
                        currStatus: "",
                        isTeacher: !1,
                        isEdit: !0,
                        dialogShow: !1,
                        id: "",
                        statusType: "",
                        leaveStatus: "",
                        approvalRemarks: "",
                        remarks: "",
                        canPending: !1,
                        status: [{color: "bgc-lightblue", text: "未开始", canChange: []}, {
                            color: "bgc-yellow",
                            text: "当日返校待审核",
                            canChange: [1, 2, 3, 4, 5]
                        }, {color: "bgc-blue", text: "当日返校已备案", canChange: [1, 2, 3, 4, 5]}, {
                            color: "bgc-red",
                            text: "当日返校备案不通过",
                            canChange: [1, 3, 4, 5]
                        }, {color: "bgc-green", text: " 非当日返校待审核", canChange: [1, 2, 3, 4]}, {
                            color: "bgc-lightblue",
                            text: "非当日返校已备案",
                            canChange: [1, 2, 3, 4, 5]
                        }],
                        info: JSON.parse(sessionStorage.getItem("USERINFO")) || {},
                        form: {
                            lxfs: "",
                            fdyxm: "",
                            cxsy: "",
                            cxrq: new Date,
                            fxrq: new Date,
                            startTime: "",
                            endTime: "",
                            trace: "",
                            promise: "",
                            backType: ""
                        },
                        detailStatus: {id: "", status: "", approvalRemarks: "", leaveStatus: "", remarks: ""},
                        cardMaskShow: !1,
                        cardShow: !1,
                        popType: 0,
                        showPicker: !1,
                        openPickerType: 0,
                        messageShow: !1,
                        title: "提交成功",
                        promiseList: ["是", "否"],
                        leaveSchoolList: ["当天返回", "当天不返回"],
                        leaveStatusList: ["", "未离校", "已离校", "已返校", "已过期"]
                    }
                }, methods: {
                    openCard: function (t) {
                        var e = this;
                        this.popType = t, this.cardMaskShow = !this.cardMaskShow, setTimeout((function () {
                            e.cardShow = !e.cardShow
                        }), 100)
                    }, closeCard: function () {
                        var t = this;
                        this.cardShow = !this.cardShow, setTimeout((function () {
                            t.cardMaskShow = !t.cardMaskShow
                        }), 200)
                    }, openPicker: function (t) {
                        this.openPickerType = t, this.showPicker = !0
                    }, onConfirm: function (t, e) {
                        switch (this.openPickerType) {
                            case 0:
                                this.$set(this.form, "cxrq", t);
                                break;
                            case 1:
                                this.$set(this.form, "startTime", t);
                                break;
                            case 2:
                                this.$set(this.form, "endTime", t);
                                break;
                            case 3:
                                this.$set(this.form, "fxrq", t);
                                break
                        }
                        this.showPicker = !1
                    }, onCancel: function () {
                        this.showPicker = !1
                    }, selectPop: function (t) {
                        0 == this.popType ? this.$set(this.form, "promise", t + 1) : 1 == this.popType ? this.$set(this.form, "backType", t + 1) : 2 == this.popType ? this.$set(this.detailStatus, "status", t) : 3 == this.popType && this.$set(this.detailStatus, "leaveStatus", t), this.closeCard()
                    }, checkForm: function () {
                        var t = this;
                        return new Promise((function (e, s) {
                            for (var a in t.form) if (!t.form[a]) {
                                t.$toast.fail("请输入完整信息"), s();
                                break
                            }
                            e()
                        }))
                    }, submit: function () {
                        var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                            var e, s = this;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.checkForm();
                                    case 2:
                                        e = JSON.parse(JSON.stringify(this.form)), this.$set(e, "cxrq", h()(e.cxrq).format("YYYY-MM-DD")), 2 == this.form.backType ? this.$set(e, "fxrq", h()(e.fxrq).format("YYYY-MM-DD")) : this.$delete(e, "fxrq"), this.$set(e, "startTime", "".concat(e.cxrq, " ").concat(e.startTime, ":00")), this.$set(e, "endTime", "".concat(e.cxrq, " ").concat(e.endTime, ":00")), this.$api.forRecord_submit({data: e}).then((function (t) {
                                            t.result ? s.messageShow = !0 : s.$toast.fail(t)
                                        }));
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }

                        return e
                    }(), goback: function () {
                        this.messageShow = !1, this.id ? location.reload() : this.$router.go(-2)
                    }, getDetail: function () {
                        var t = this;
                        this.$api.forRecord_detail({id: this.$route.query.id}).then((function (e) {
                            if (e.result) {
                                t.info = e.student;
                                var s = e.data, a = s.approvalRemarks, i = s.leaveStatus, n = s.remarks,
                                    r = s.approvalUserName, o = s.approvalTime, c = s.id, l = s.formatedId, u = s.status,
                                    f = s.lxfs, d = s.fdyxm, m = s.cxsy, p = s.cxrq, v = s.fxrq, _ = s.startTime,
                                    g = s.endTime, x = s.trace, y = s.promise, C = s.backType;
                                t.form = {
                                    id: c,
                                    formatedId: l,
                                    status: u,
                                    lxfs: f,
                                    fdyxm: d,
                                    cxsy: m,
                                    cxrq: p,
                                    fxrq: v,
                                    startTime: _,
                                    endTime: g,
                                    trace: x,
                                    promise: y,
                                    backType: C
                                }, t.detailStatus = {
                                    status: u,
                                    id: c,
                                    approvalRemarks: a,
                                    leaveStatus: i,
                                    remarks: n,
                                    approvalUserName: r,
                                    approvalTime: o
                                }, t.$set(t.form, "startTime", h()(t.form.startTime).format("HH:mm")), t.$set(t.form, "endTime", h()(t.form.endTime).format("HH:mm")), t.currStatus = u
                            } else t.$toast.fail(e.msg)
                        }))
                    }, canHandle: function () {
                        this.canPending = !this.canPending
                    }, openDialog: function (t) {
                        this.dialogShow = !0, this.statusType = t
                    }, makesure: function () {
                        var t = this, e = this.detailStatus,
                            s = (e.approvalTime, e.approvalUserName, r(e, ["approvalTime", "approvalUserName"]));
                        this.statusType && (s["status"] = this.statusType), this.$api.forRecord_approval(s).then((function (e) {
                            t.$toast("提交成功"), setTimeout((function () {
                                location.reload()
                            }), 1e3)
                        }))
                    }, editTeacher: function () {
                        this.isEdit = !this.isEdit
                    }
                }, computed: {
                    formStatus: function () {
                        return this.form.status
                    }, cxrqText: function () {
                        return this.form.cxrq ? h()(this.form.cxrq).format("YYYY-MM-DD") : "请选择"
                    }, fxrqText: function () {
                        return this.form.fxrq ? h()(this.form.fxrq).format("YYYY-MM-DD") : "请选择"
                    }, promiseTypeName: function () {
                        return 1 == this.form.promise ? "是" : 2 == this.form.promise ? "否" : void 0
                    }, leaveTypeName: function () {
                        return 1 == this.form.backType ? "当天返回" : 2 == this.form.backType ? "当天不返回" : void 0
                    }
                }, created: function () {
                    this.$route.query.id && (this.id = this.$route.query.id, this.canPending = !0, this.getDetail()), this.isTeacher = JSON.parse(this.$route.query.isTeacher)
                }
            }, g = _, x = (s("440b"), Object(d["a"])(g, a, i, !1, null, "3f95988e", null));
        e["default"] = x.exports
    }
}]);
//# sourceMappingURL=chunk-6dff2a7a.724afdf7.js.map