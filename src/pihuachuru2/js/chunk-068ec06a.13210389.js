(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-068ec06a"], {
    "157e": function (t, c, e) {
        "use strict";
        var s = e("e236"), n = e.n(s);
        n.a
    }, c5f5: function (t, c, e) {
        "use strict";
        e.r(c);
        var s = function () {
            var t = this, c = t.$createElement, e = t._self._c || c;
            return e("div", {staticClass: "index"}, [e("div", {staticClass: "content"}, [e("p", {staticClass: "title"}, [t._v("本人郑重承诺：")]), e("p", [t._v("1.真实准确填报“出校备案”相关信息。")]), e("p", [t._v("2.出校后按报备轨迹出行，不前往疫情中高风险地区或其他存在风险的地点，坚持点对点出行。")]), e("p", [t._v("3.出校后注意安全，不扎堆、不聚集，按规定佩戴口罩，接触公共物品后勤洗手。")]), e("p", [t._v("4.遵守疫情防控的法律法规和出校相关要求,从官方渠道了解有关信息，不造谣、不信谣、不传谣。")]), e("p", [t._v("5.如隐瞒情况造成危及公共安全后果，本人将承担相应的法律责任。")]), e("div", {staticClass: "tip-wrap"}, [e("van-checkbox", {
                attrs: {"checked-color": "#4199FF"},
                model: {
                    value: t.checked, callback: function (c) {
                        t.checked = c
                    }, expression: "checked"
                }
            }), e("div", {staticClass: "tip"}, [t._v("我已阅读并承诺上述内容")])], 1)]), e("div", {staticClass: "btns"}, [e("div", {
                staticClass: "btn",
                on: {
                    click: function (c) {
                        return t.$router.go(-1)
                    }
                }
            }, [t._v("取消")]), e("div", {
                staticClass: "btn blue",
                class: t.checked ? "blue" : "grey",
                on: {
                    click: function (c) {
                        t.checked && t.$router.push("/apply")
                    }
                }
            }, [t._v("下一步")])])])
        }, n = [], a = {
            data: function () {
                return {checked: !1}
            }, method: {
                goback: function () {
                    this.$router.go(-1)
                }, nextStep: function () {
                    this.$router.push("/apply")
                }
            }
        }, i = a, o = (e("157e"), e("e90a")), u = Object(o["a"])(i, s, n, !1, null, "2b1189d2", null);
        c["default"] = u.exports
    }, e236: function (t, c, e) {
    }
}]);
//# sourceMappingURL=chunk-068ec06a.13210389.js.map