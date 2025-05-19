abstract class BaseCalculator {
    protected panelContents: string = '0';

    abstract pressButton(button: string): void;

    getPanelContents(): string {
        return this.panelContents;
    }

    clear() {
        this.panelContents = '0';
    }
}

class SimpleCalculator extends BaseCalculator {
    pressButton(button: string): void {
        if (/^[0-9+*\/.^-]$/.test(button)) { // checks if the button is a number or operator
            // Et alguses poleks null ees
            if (this.panelContents === '0' && /[0-9]/.test(button)) {
                this.panelContents = button;
                return;
            }
            if (button === '-' && this.panelContents.length > 0) {
                const lastChar = this.panelContents[this.panelContents.length - 1];
                if (!/[+*\/.^-]/.test(lastChar)) { // if the last character is not an operator
                    this.panelContents += button;
                }
            } else {
                this.panelContents += button;
            }
        } else if (button === "=") {
            try {
                const expression = this.panelContents.replace(/\^/g, '**');
                const evaluate = new Function(`return ${expression}`);
                this.panelContents = evaluate().toString();
            } catch {
                this.panelContents = "Error";
            }
        } else if (button === "C") {
            this.panelContents = this.panelContents.slice(0, -1);
        } else if (button === "AC") {
            this.clear();
        }
    }
}

// klassid keeruliste funktsioonide jaoks
class SinFunction {
    apply(value: string): string {
        if (!value || value === '0') return '0';
        const num = new Function(`return ${value}`)();
        return isNaN(num) ? "Error" : Math.sin(num).toFixed(8).replace(/\.?0+$/, '');
    }
}

class CosFunction {
    apply(value: string): string {
        if (!value || value === '0') return '1';
        const num = new Function(`return ${value}`)();
        return isNaN(num) ? "Error" : Math.cos(num).toFixed(8).replace(/\.?0+$/, '');
    }
}

class TanFunction {
    apply(value: string): string {
        if (!value || value === '0') return '0';
        const num = new Function(`return ${value}`)();
        return isNaN(num) ? "Error" : Math.tan(num).toFixed(8).replace(/\.?0+$/, '');
    }
}

class SqrtFunction {
    apply(value: string): string {
        if (!value || value === '0') return '0';
        const num = new Function(`return ${value}`)();
        if (isNaN(num) || num < 0) return "Error";
        return Math.sqrt(num).toFixed(8).replace(/\.?0+$/, '');
    }
}

class ExponentiationFunction {
    apply(value: string): string {
        if (!value || value === '0') return '0'; // Return 0 for empty or zero input
        const num = new Function(`return ${value}`)();
        return isNaN(num) ? "Error" : Math.pow(num, 2).toString(); // Ensure proper string conversion
    }
}

// lõpuks kombineeriv klass
class UnifiedCalculator extends SimpleCalculator {
    private sin = new SinFunction();
    private cos = new CosFunction();
    private tan = new TanFunction();
    private sqrt = new SqrtFunction();
    private exp = new ExponentiationFunction();

    override pressButton(button: string): void {
        if (["sin", "cos", "tan", "sqrt", "exp"].includes(button)) {
            this.applyScientificFunction(button);
        } else {
            super.pressButton(button);
        }
    }

    private applyScientificFunction(func: string) {
        const currentValue = this.panelContents;
        let result: string;

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