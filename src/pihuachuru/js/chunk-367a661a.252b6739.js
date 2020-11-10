(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-367a661a"], {
    "01fa": function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAFPklEQVR4Xu2cXWhcRRSAv7PbhDZWG4IW+hAUxT7YCIo0Iq1plopW0T4oxDc1KNmYog1SwSpWVMQHi9pK4m5Qan2zoC9aE0VNTBVB0GobERX/KDTQltCITWN+9sjcu5vmd3N379zdu3rndWfOnPl27sw5Z86MUMJyQ1qrVgvXxZTrERrIcJUK9cClAmuA6qw6EwqjwBlRThDjV5ShjHD0b+W7b5IyWSq1JeiOmrq0PhbnboHbEW4Ganz2OYZyRKE3M817gzvkhE95eZsHAqj5gK7kPPcS40ERNgGxgAaRUeVLMrzJKt4ZaJVx2/1YBXRLWtdMKzsRdgBrbSu7jLxTKF1xYd8nSTGfp5ViBdCGQ1p92VkeFWU3UGdFs+KFjKjw4ula9v/QIhPFi3Fb+ga0Ja0JUdIiXO1XGZvtVflFheTnSen3I7doQDe9rKtW1rBXhYfFAmg/g1iqrYKK8vr4GLu+ekzOF9NHUYA29+j6KuVdoKGYTsvQZmhSuOeLNvm50L4LBtSU1lvjcAjXbqmkMjoNLYNJ+bgQpQsClEjpfSq8IVBVSCdhqaswKcpD/e3ytledPANqTmtSoDtAm8arzn7rZRQ6BpKS9iLIEyAzcxAO/Afg5JhkUFq9zKRlAZk1JwYfVOpnlWeHm8zAncutSXkBZXerrytwQfby9Zg6o5NCY77dbUlAjp1zEQZOpWzlXqHMrzc0fo7GpeykJQElUtqF0FFsrxXVTunubxfjPy4oiwJy3Af4NKwWsm34xuJW2LqYW7IAkON4jjAUNt/KNpT58ozvdrqOhvkO7gJAzT26S5SXglYojPJVeHygTfbO1m0OICeeA7+FIGRRLn4jcbhydjxpDqBESvcgPFsu7ULRr/JMf7s8l9NlBpAJk8oEf5YhEhgKLrOUOKXVXJ4L314A1K33S5y3wqZtOfTRaR4Y6JCDpu8LgFI6KO6pw/++qHJkoF2aZgCZo5n4Cv6odGd023r4fQR+OuP7P85MT3GFOVJyZlBzSneK8KpvsWUU0LkZtl8Dx4ah833/iqjSOdAu+xxAiZT2IdzmX2x5JOTg/DMFT/bB0ZMW9FA+6m+XbWKOgy+BsxZOPC1oVbiIzk2wfQMYOE/1wbc24LhqjP0FtbKlRzfG1PHaK64ECMdhkREaJZHWNsBT+DFMBIOGkx1rUhI9uh/lkTANfjldSgTHGEGvSSKlhxHuWE6psPxeMjhmwMqH0pzWYwLXhgVAPj1KCsfhw3ED6KTAurADKjUcdwIxbBbpc2Hf4ssBJzthxgwgk862wsYMenorVMfhhc9gfMqGRCgjHDOAKauADrZAfa1r7j/R6x9SmeHMALL2ia27GF65C9au9g8pBHAca9r6Im0DUkjguIt0ENu8H0hhgZPdxY4HZigWAylMcJwtxhiKQboahUAKHRwDyHE1AnZWvUAKJRzXSkmWJNyRD1KI4bjhjlIFzOZD2t0LyRsDC3bZsFLdgJmRVKqQ62xII2NQVxNIJNAGHLNAuyFXI62UQfvZkAIIk9qBYzaw2UH7Uh/7GEitG+Hwj/D9sLUx2RQ099gnO4uig8Ms4gUHhw6g6Oh5ZgYufvQcJS/kAC2evJDdzaL0F9jTn5Tnc7SiBKq5S3v+BCpnLYpS8JZOwTOAoiTOubcUozRg9/TCexpw7pOMEsldEtFVBCjuKoKhF11m8XAZN7oO5cHFiy7UeYAUXcn0ACm61OsBUnQt3AOk6GEBD5Cipyk8QDJVosdNPICKnsfxAMlUiR5Y8ggqeqLLIyhTLXrkrQBYlfhM4L8G8uullzz6dAAAAABJRU5ErkJggg=="
    }, "04ee": function (t, e, r) {
    }, "104f": function (t, e, r) {
        "use strict";
        var a = r("04ee"), n = r.n(a);
        n.a
    }, "961a": function (t, e, r) {
        "use strict";
        r.r(e);
        var a = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("div", {staticClass: "apply"}, [a("div", {staticClass: "field-wrap"}, [a("div", {staticClass: "field-item"}, [a("label", [t._v("备注")]), a("div", {staticClass: "ipt"}, [a("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.form.remark,
                    expression: "form.remark"
                }], attrs: {placeholder: "请填写"}, domProps: {value: t.form.remark}, on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.form, "remark", e.target.value)
                    }
                }
            })])])]), a("div", {staticClass: "btn-wrap"}, [a("div", {
                staticClass: "btn bgc-blue",
                on: {
                    click: function (e) {
                        return t.submit()
                    }
                }
            }, [t._v("提交申请")])]), a("van-popup", {
                attrs: {round: !0},
                model: {
                    value: t.showPopup, callback: function (e) {
                        t.showPopup = e
                    }, expression: "showPopup"
                }
            }, [a("div", {staticClass: "popup"}, [a("img", {attrs: {src: r("01fa")}}), a("p", [t._v("提交成功")]), a("div", {
                staticClass: "btn",
                on: {click: t.back}
            }, [t._v("返回")])])])], 1)])
        }, n = [], i = (r("b449"), r("17d6")), s = {
            data: function () {
                return {showPopup: !1, form: {remark: ""}}
            }, methods: {
                back: function () {
                    this.$router.go(-1)
                }, goNext: function () {
                    this.$router.push({path: "/tip"})
                }, checkForm: function () {
                    var t = this;
                    return new Promise((function (e, r) {
                        for (var a in t.form) if (!t.form[a]) {
                            Toast.fail("带*为必填信息"), r();
                            break
                        }
                        e()
                    }))
                }, submit: function () {
                    var t = Object(i["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.$api.registeredActivity({
                                        id: this.$route.query.id,
                                        remarks: this.form.remark
                                    });
                                case 2:
                                    this.showPopup = !0;
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));

                    function e() {
                        return t.apply(this, arguments)
                    }

                    return e
                }()
            }, created: function () {
                var t = Object(i["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })));

                function e() {
                    return t.apply(this, arguments)
                }

                return e
            }()
        }, o = s, u = (r("104f"), r("e90a")), c = Object(u["a"])(o, a, n, !1, null, "4ccca520", null);
        e["default"] = c.exports
    }
}]);
//# sourceMappingURL=chunk-367a661a.252b6739.js.map