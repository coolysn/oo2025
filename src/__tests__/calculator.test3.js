import { Calculator } from "../calculator3";
let calcObj = null;
beforeEach(() => {
    calcObj = new Calculator();
});
test("simple addition", () => {
    calcObj.pressButton("4");
    calcObj.pressButton("+");
    calcObj.pressButton("3");
    calcObj.pressButton("=");
    expect(calcObj.getPanelContents()).toBe("7");
});
