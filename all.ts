var String1:string='srisai'
var A:number=1234
console.log(String1);
console.log(A);
class A1
{
    p1:string
    p2:number
    p3:number
    constructor(p1:string,p2:number,p3:number)
    {
        this.p1=p1;
        this.p2=p2;
        this.p3=p3;
    }
    f1(m1:string,m2:number):string{
        return (m1+""+m2);
    }
    
}
var t=new A1('srisai',24,24);
console.log(t.f1('srisai',24));
console.log(t.p1+" "+t.p2+" "+t.p3);