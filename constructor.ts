//constructor(parameter:datatype,parameter1:datatype......)
class Example1
{
    one:string;
    two:number;
    constructor(one:string,two:number)
    {
this.one=one;
this.two=two;

    }
}
var b=new Example1('srisai',24);
console.log(b.one+b.two);