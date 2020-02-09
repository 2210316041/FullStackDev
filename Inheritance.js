var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VehicleLoan = /** @class */ (function () {
    function VehicleLoan() {
    }
    VehicleLoan.prototype.one = function () {
        return "Vehicle Loan";
    };
    return VehicleLoan;
}());
var HomeLone = /** @class */ (function (_super) {
    __extends(HomeLone, _super);
    function HomeLone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeLone.prototype.two = function () {
        return "Home Loan";
    };
    return HomeLone;
}(VehicleLoan));
var GoldenLoan = /** @class */ (function (_super) {
    __extends(GoldenLoan, _super);
    function GoldenLoan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoldenLoan.prototype.three = function () {
        return "Golden Loan";
    };
    return GoldenLoan;
}(HomeLone));
var a2 = new GoldenLoan();
console.log(a2.two());
console.log(a2.one());
console.log(a2.three());
