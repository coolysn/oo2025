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
var AbstractDrink = /** @class */ (function () {
    function AbstractDrink() {
    }
    AbstractDrink.prototype.getDescription = function () {
        return "See jook maksab ".concat(this.getPrice(), "  \u20AC"); //by default siin kui pole alamklassil
    };
    return AbstractDrink;
}());
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee(size) {
        var _this = _super.call(this) || this;
        _this.size = size;
        return _this;
    }
    Coffee.prototype.getPrice = function () {
        switch (this.size) {
            case "väike": return 2.5;
            case "keskmine": return 3.5;
            case "suur": return 5;
            default: return 0;
        }
    };
    Coffee.prototype.getDescription = function () {
        return "Kohv ".concat(this.size, " maksab ").concat(this.getPrice(), " \u20AC");
    };
    return Coffee;
}(AbstractDrink));
var Juice = /** @class */ (function (_super) {
    __extends(Juice, _super);
    function Juice(ml) {
        var _this = _super.call(this) || this;
        _this.ml = ml;
        return _this;
    }
    Juice.prototype.getPrice = function () {
        return this.ml * 0.01; //1 ml maksab 0.01 €
    };
    Juice.prototype.getDescription = function () {
        return "".concat(this.ml, " ml mahla maksab ").concat(this.getPrice(), " \u20AC"); //returns formatted text string
    };
    return Juice;
}(AbstractDrink));
//Jookide massiiv
var drinks = [
    new Coffee("väike"),
    new Coffee("suur"),
    new Juice(250),
    new Juice(500)
];
//Iga joogi kirjeldus
for (var _i = 0, drinks_1 = drinks; _i < drinks_1.length; _i++) {
    var drink = drinks_1[_i];
    console.log(drink.getDescription());
}
function totalPrice(drinks) {
    var sum = 0;
    for (var _i = 0, drinks_2 = drinks; _i < drinks_2.length; _i++) {
        var drink = drinks_2[_i];
        sum += drink.getPrice();
    }
    return sum;
}
console.log("Kogu hind:", totalPrice(drinks), "€");
