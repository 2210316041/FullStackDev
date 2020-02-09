var String1 = 'srisai';
var A = 1234;
console.log(String1);
console.log(A);
var A1 = /** @class */ (function () {
    function A1(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    A1.prototype.f1 = function (m1, m2) {
        return (m1 + "" + m2);
    };
    return A1;
}());
var t = new A1('srisai', 24, 24);
console.log(t.f1('srisai', 24));
console.log(t.p1 + " " + t.p2 + " " + t.p3);
