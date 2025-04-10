export class Calculator5 {
    protected panelContents: string = '';

    pressButton(button: string): void {
        if (/^[0-9+*/-]$/.test(button)) { //Regulaaravaldis, kontrollib kas number või märk
            this.panelContents += button;
        } else if (button === "=") {
            try {
                this.panelContents = eval(this.panelContents).toString();
            } catch {
                this.panelContents = "Error";
            }
        } else if (button === "C") {
            this.panelContents = this.panelContents.slice(0, -1);
        } else if (button === "AC") {
            this.panelContents = "";
        }
    }

    getPanelContents(): string {
        return this.panelContents;
    }
}
