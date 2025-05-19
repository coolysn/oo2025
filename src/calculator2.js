class Calculator2 {
    panelContents = '';
    pressButton(button) {
        if (/^[0-9+*/-]$/.test(button)) {
            this.panelContents += button;
        }
    }
    getPanelContents() {
        return this.panelContents;
    }
}
export { Calculator2 };
