var a:string="srisai";
var b:number=1234
console.log(a+" "+b);
class Fun 
{
    a:string;
    b:number;
    constructor(s1:string)
    {
        console.log(s1);
    }
    f2(a1:string,b1:number):any
    {
        this.a=a1;
        this.b=b1;
        var c=this.a+this.b;
        console.log(c);
    }
  

}
var t1={
    s1:'Trivikram',
    s2:['s','s1'],
    any:[12345,'ssss'],
    s3:123456
}
console.log(t1.s1+" "+t1.s2+" "+t1.any+" "+t1.s3);
var g=new Fun('Arjun');
g.f2('srisai_24',123456789);