export class Calculator5 {
    constructor() {
        this.panelContents = '';
    }
    pressButton(button) {
        if (/^[0-9+*/-]$/.test(button)) {
            this.panelContents += button;
        }
        else if (button === "=") {
            try {
                this.panelContents = eval(this.panelContents).toString();
            }
            catch (_a) {
                this.panelContents = "Error";
            }
        }
        else if (button === "C") {
            this.panelContents = this.panelContents.slice(0, -1);
        }
        else if (button === "AC") {
            this.panelContents = "";
        }
    }
    getPanelContents() {
        return this.panelContents;
    }
}
