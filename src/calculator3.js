class Calculator3 {
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
    }
    getPanelContents() {
        return this.panelContents;
    }
}
export { Calculator3 };
