function sum(a, b) {
    return a + b;
}
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.Add = function (a, b) {
        return sum(a, b);
    };
    return Demo;
}());
