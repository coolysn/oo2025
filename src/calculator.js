class Calculator {
    constructor() {
        this.panelContents = "";
    }
    pressButton(button) {
        this.panelContents += button;
    }
    getPanelContents() {
        return this.panelContents;
    }
}
export { Calculator };
