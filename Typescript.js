var a = "srisai";
var b = 1234;
console.log(a + " " + b);
var Fun = /** @class */ (function () {
    function Fun(s1) {
        console.log(s1);
    }
    Fun.prototype.f2 = function (a1, b1) {
        this.a = a1;
        this.b = b1;
        var c = this.a + this.b;
        console.log(c);
    };
    return Fun;
}());
var t1 = {
    s1: 'Trivikram',
    s2: ['s', 's1'],
    any: [12345, 'ssss'],
    s3: 123456
};
console.log(t1.s1 + " " + t1.s2 + " " + t1.any + " " + t1.s3);
var g = new Fun('Arjun');
g.f2('srisai_24', 123456789);
