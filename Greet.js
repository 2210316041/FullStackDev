var Greet = /** @class */ (function () {
    function Greet(a) {
        this.string1 = "srisai";
        this.h = a;
        console.log(this.h);
    }
    Greet.prototype.g1 = function () {
        console.log(this.string1);
    };
    Greet.prototype.g2 = function () {
        this.string1 = 'harish';
        console.log(this.string1);
    };
    return Greet;
}());
var a2 = new Greet('havish');
a2.g1();
a2.g2();
