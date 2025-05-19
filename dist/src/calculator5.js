class AbstractCalculator {
    constructor() {
        this.panelContents = '';
    }
    getPanelContents() {
        return this.panelContents;
    }
}
export class UnifiedCalculator extends AbstractCalculator {
    pressButton(button) {
        if (/^[0-9+*/-]$/.test(button)) {
            this.panelContents += button;
        }
        else if (button === "=") {
            try {
                this.panelContents = eval(this.panelContents).toString();
            }
            catch {
                this.panelContents = "Error";
            }
        }
        else if (button === "C") {
            this.panelContents = this.panelContents.slice(0, -1);
        }
        else if (button === "AC") {
            this.panelContents = "";
        }
        else if (["sin", "cos", "tan"].includes(button)) {
            try {
                const number = eval(this.panelContents);
                if (button === "sin")
                    this.panelContents = Math.sin(number).toString();
                else if (button === "cos")
                    this.panelContents = Math.cos(number).toString();
                else if (button === "tan")
                    this.panelContents = Math.tan(number).toString();
            }
            catch {
                this.panelContents = "Error";
            }
        }
        else {
            this.panelContents += button;
        }
    }
}
