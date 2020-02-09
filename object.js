//object syntax
//properties and method
//propertyname:datatype=constant
var Example = /** @class */ (function () {
    function Example() {
        this.one = 'class';
        this.two = 123456;
    }
    Example.prototype.fun1 = function (a) {
        console.log(a + " " + this.one);
    };
    return Example;
}());
var a = new Example();
console.log(a.one);
a.fun1('s');
var ref = {
    first: 24,
    second: 'string',
    three: true,
    fun1: function () {
        console.log("this function");
    }
};
ref.fun1();
