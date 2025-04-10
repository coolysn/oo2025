class Calculator4 {
    private panelContents: string = '';

    pressButton(button: string): void {
        if (/^[0-9+*/-]$/.test(button)) {
            this.panelContents += button;
        } else if (button === "C") {
            this.panelContents = this.panelContents.slice(0, -1); // Kustutame viimase märgi
        }
    }

    getPanelContents(): string {
        return this.panelContents;
    }
}

export { Calculator4 };
