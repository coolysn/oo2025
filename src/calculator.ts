class Calculator {
    private panelContents: string = "";
  
    pressButton(button: string): void {
      this.panelContents += button;
    }
  
    getPanelContents(): string {
      return this.panelContents;
    }
  }
  
  export { Calculator };
  