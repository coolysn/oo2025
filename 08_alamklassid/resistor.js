var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    Switch.prototype.getResistance = function () {
        return this.on ? 0 : 1000000;
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0 && this.on) {
            throw new Error("short circuit"); //Annab veateate kui lühis
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
//uus massiiv
var circuit = [new Resistor(220), new Switch()];
for (var _i = 0, circuit_1 = circuit; _i < circuit_1.length; _i++) {
    var element = circuit_1[_i];
    console.log(element.getResistance());
}
function sumResistance(element) {
    var sum = 0;
    for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
        var r = element_1[_i];
        sum += r.getResistance();
    }
    return sum;
}
console.log("Total resistance", sumResistance(circuit));
circuit[1].setOn(true);
console.log("Total resistance", sumResistance(circuit));
//by default see on väljas, peab sisse lülitama ennem
var s1 = new Switch();
console.log(s1.getResistance());
s1.setOn(true);
console.log(s1.getResistance());
//console.log(s1.getCurrent(5));
var r1 = new Resistor(220);
console.log(r1.getResistance());
