class Calculator3 {
    private panelContents: string = '';

    pressButton(button: string): void {
        if (/^[0-9+*/-]$/.test(button)) {
            this.panelContents += button;
        } else if (button === "=") {
            try {
                this.panelContents = eval(this.panelContents).toString();
            } catch {
                this.panelContents = "Error";
            }
        }
    }

    getPanelContents(): string {
        return this.panelContents;
    }
}

export { Calculator3 };
