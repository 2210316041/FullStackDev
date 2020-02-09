//object syntax

//properties and method
//propertyname:datatype=constant
class Example
{
    one:string='class';
    
    two:number=123456;
    fun1(a:string):any {
        console.log(a+" "+this.one);
            }
}
var a=new Example()
console.log(a.one);
a.fun1('s');
var ref={
    first:24,
    second:'string',
    three:true,
    fun1():any {
console.log("this function");
    }
}
ref.fun1();


