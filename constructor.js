//constructor(parameter:datatype,parameter1:datatype......)
var Example1 = /** @class */ (function () {
    function Example1(one, two) {
        this.one = one;
        this.two = two;
    }
    return Example1;
}());
var b = new Example1('srisai', 24);
console.log(b.one + b.two);
