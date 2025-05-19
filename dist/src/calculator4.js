class Calculator4 {
    constructor() {
        this.panelContents = '';
    }
    pressButton(button) {
        if (/^[0-9+*/-]$/.test(button)) {
            this.panelContents += button;
        }
        else if (button === "C") {
            this.panelContents = this.panelContents.slice(0, -1); // Kustutame viimase märgi
        }
    }
    getPanelContents() {
        return this.panelContents;
    }
}
export { Calculator4 };
