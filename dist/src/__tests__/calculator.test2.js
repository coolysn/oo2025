import { Calculator2 } from "../calculator2";
let calcObj = null;
beforeEach(() => {
    calcObj = new Calculator2();
});
test("empty int", () => {
    expect(calcObj.getPanelContents()).toBe("");
});
test("addition input", () => {
    calcObj.pressButton("4");
    calcObj.pressButton("+");
    calcObj.pressButton("3");
    expect(calcObj.getPanelContents()).toBe("4+3");
});
