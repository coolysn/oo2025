class Calculator2 {
    private panelContents: string = '';

    pressButton(button: string): void {
        if (/^[0-9+*/-]$/.test(button)) {
            this.panelContents += button;
        }
    }

    getPanelContents(): string {
        return this.panelContents;
    }
}

export { Calculator2 };
