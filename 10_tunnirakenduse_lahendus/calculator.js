"use strict";
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
var BaseCalculator = /** @class */ (function () {
    function BaseCalculator() {
        this.panelContents = '0';
    }
    BaseCalculator.prototype.getPanelContents = function () {
        return this.panelContents;
    };
    BaseCalculator.prototype.clear = function () {
        this.panelContents = '0';
    };
    return BaseCalculator;
}());
var SimpleCalculator = /** @class */ (function (_super) {
    __extends(SimpleCalculator, _super);
    function SimpleCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleCalculator.prototype.pressButton = function (button) {
        if (/^[0-9+*\/.^-]$/.test(button)) { // Include ^ operator
            // Et alguses poleks null ees
            if (this.panelContents === '0' && /[0-9]/.test(button)) {
                this.panelContents = button;
                return;
            }
            if (button === '-' && this.panelContents.length > 0) {
                var lastChar = this.panelContents[this.panelContents.length - 1];
                if (!/[+*\/.^-]/.test(lastChar)) {
                    this.panelContents += button;
                }
            }
            else {
                this.panelContents += button;
            }
        }
        else if (button === "=") {
            try {
                var expression = this.panelContents.replace(/\^/g, '**'); // Replace ^ with ** for exponentiation
                var evaluate = new Function("return ".concat(expression));
                this.panelContents = evaluate().toString();
            }
            catch (_a) {
                this.panelContents = "Error";
            }
        }
        else if (button === "C") {
            this.panelContents = this.panelContents.slice(0, -1);
        }
        else if (button === "AC") {
            this.clear();
        }
    };
    return SimpleCalculator;
}(BaseCalculator));
// klassid keeruliste funktsioonide jaoks
var SinFunction = /** @class */ (function () {
    function SinFunction() {
    }
    SinFunction.prototype.apply = function (value) {
        if (!value || value === '0')
            return '0';
        var num = new Function("return ".concat(value))();
        return isNaN(num) ? "Error" : Math.sin(num).toFixed(8).replace(/\.?0+$/, '');
    };
    return SinFunction;
}());
var CosFunction = /** @class */ (function () {
    function CosFunction() {
    }
    CosFunction.prototype.apply = function (value) {
        if (!value || value === '0')
            return '1';
        var num = new Function("return ".concat(value))();
        return isNaN(num) ? "Error" : Math.cos(num).toFixed(8).replace(/\.?0+$/, '');
    };
    return CosFunction;
}());
var TanFunction = /** @class */ (function () {
    function TanFunction() {
    }
    TanFunction.prototype.apply = function (value) {
        if (!value || value === '0')
            return '0';
        var num = new Function("return ".concat(value))();
        return isNaN(num) ? "Error" : Math.tan(num).toFixed(8).replace(/\.?0+$/, '');
    };
    return TanFunction;
}());
var SqrtFunction = /** @class */ (function () {
    function SqrtFunction() {
    }
    SqrtFunction.prototype.apply = function (value) {
        if (!value || value === '0')
            return '0';
        var num = new Function("return ".concat(value))();
        if (isNaN(num) || num < 0)
            return "Error";
        return Math.sqrt(num).toFixed(8).replace(/\.?0+$/, '');
    };
    return SqrtFunction;
}());
var ExponentiationFunction = /** @class */ (function () {
    function ExponentiationFunction() {
    }
    ExponentiationFunction.prototype.apply = function (value) {
        if (!value || value === '0')
            return '0'; // Return 0 for empty or zero input
        var num = new Function("return ".concat(value))();
        return isNaN(num) ? "Error" : Math.pow(num, 2).toString(); // Ensure proper string conversion
    };
    return ExponentiationFunction;
}());
// lõpuks kombineeriv klass
var UnifiedCalculator = /** @class */ (function (_super) {
    __extends(UnifiedCalculator, _super);
    function UnifiedCalculator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sin = new SinFunction();
        _this.cos = new CosFunction();
        _this.tan = new TanFunction();
        _this.sqrt = new SqrtFunction();
        _this.exp = new ExponentiationFunction();
        return _this;
    }
    UnifiedCalculator.prototype.pressButton = function (button) {
        if (["sin", "cos", "tan", "sqrt", "exp"].includes(button)) {
            this.applyScientificFunction(button);
        }
        else {
            _super.prototype.pressButton.call(this, button);
        }
    };
    UnifiedCalculator.prototype.applyScientificFunction = function (func) {
        var currentValue = this.panelContents;
        var result;
        switch (func) {
            case "sin":
                result = this.sin.apply(currentValue);
                break;
            case "cos":
                result = this.cos.apply(currentValue);
                break;
            case "tan":
                result = this.tan.apply(currentValue);
                break;
            case "sqrt":
                result = this.sqrt.apply(currentValue);
                break;
            case "exp":
                result = this.exp.apply(currentValue);
                break;
            default:
                result = "Error";
        }
        this.panelContents = result;
    };
    return UnifiedCalculator;
}(SimpleCalculator));
export { UnifiedCalculator };
