class BaseCalculator {
    constructor() {
        this.panelContents = '0';
    }
    getPanelContents() {
        return this.panelContents;
    }
    clear() {
        this.panelContents = '0';
    }
}
class SimpleCalculator extends BaseCalculator {
    pressButton(button) {
        if (/^[0-9+*\/.-]$/.test(button)) {
            // Et alguses poleks null ees
            if (this.panelContents === '0' && /[0-9]/.test(button)) {
                this.panelContents = button;
                return;
            }
            if (button === '-' && this.panelContents.length > 0) {
                const lastChar = this.panelContents[this.panelContents.length - 1];
                if (!/[+*\/.-]/.test(lastChar)) {
                    this.panelContents += button;
                }
            }
            else {
                this.panelContents += button;
            }
        }
        else if (button === "=") {
            try {
                const evaluate = new Function(`return ${this.panelContents}`);
                this.panelContents = evaluate().toString();
            }
            catch {
                this.panelContents = "Error";
            }
        }
        else if (button === "C") {
            this.panelContents = this.panelContents.slice(0, -1);
        }
        else if (button === "AC") {
            this.clear();
        }
    }
}
// klassid keeruliste funktsioonide jaoks
class SinFunction {
    apply(value) {
        if (!value || value === '0')
            return '0';
        const num = new Function(`return ${value}`)();
        return isNaN(num) ? "Error" : Math.sin(num).toFixed(8).replace(/\.?0+$/, '');
    }
}
class CosFunction {
    apply(value) {
        if (!value || value === '0')
            return '1';
        const num = new Function(`return ${value}`)();
        return isNaN(num) ? "Error" : Math.cos(num).toFixed(8).replace(/\.?0+$/, '');
    }
}
class TanFunction {
    apply(value) {
        if (!value || value === '0')
            return '0';
        const num = new Function(`return ${value}`)();
        return isNaN(num) ? "Error" : Math.tan(num).toFixed(8).replace(/\.?0+$/, '');
    }
}
class SqrtFunction {
    apply(value) {
        if (!value || value === '0')
            return '0';
        const num = new Function(`return ${value}`)();
        if (isNaN(num) || num < 0)
            return "Error";
        return Math.sqrt(num).toFixed(8).replace(/\.?0+$/, '');
    }
}
class ExponentiationFunction {
    apply(value) {
        if (!value || value === '0')
            return '1'; // Any number to the power of 0 is 1
        const num = new Function(`return ${value}`)();
        return isNaN(num) ? "Error" : Math.pow(num, 2).toFixed(8).replace(/\.?0+$/, '');
    }
}
// lõpuks kombineeriv klass
class UnifiedCalculator extends SimpleCalculator {
    constructor() {
        super(...arguments);
        this.sin = new SinFunction();
        this.cos = new CosFunction();
        this.tan = new TanFunction();
        this.sqrt = new SqrtFunction();
        this.exp = new ExponentiationFunction();
    }
    pressButton(button) {
        if (["sin", "cos", "tan", "sqrt", "exp"].includes(button)) {
            this.applyScientificFunction(button);
        }
        else {
            super.pressButton(button);
        }
    }
    applyScientificFunction(func) {
        const currentValue = this.panelContents;
        let result;
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
    }
}
export { UnifiedCalculator };
