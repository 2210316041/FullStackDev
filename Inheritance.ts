class VehicleLoan
{
    one():string
    {
        return "Vehicle Loan";
    }
}
class HomeLone extends VehicleLoan
{
two():string
{
    return "Home Loan";
}
}
class GoldenLoan extends HomeLone
{
    three():string
    {
        return "Golden Loan";
    }
}
var a2=new GoldenLoan();
console.log(a2.two());
console.log(a2.one());
console.log(a2.three());
