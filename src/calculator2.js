class Calculator2 {
    constructor() {
        this.panelContents = '';
    }
    pressButton(button) {
        if (/^[0-9+*/-]$/.test(button)) { //Regulaaravaldis, kontrollib kas number või märk
            this.panelContents += button;
        }
    }
    getPanelContents() {
        return this.panelContents;
    }
}
export { Calculator2 };
