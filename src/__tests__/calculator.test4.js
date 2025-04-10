import { Calculator } from "../calculator4";
let calcObj = null;
beforeEach(() => {
    calcObj = new Calculator();
});
test("delete last character", () => {
    calcObj.pressButton("5");
    calcObj.pressButton("3");
    calcObj.pressButton("C"); // Kustutame viimase märgi
    expect(calcObj.getPanelContents()).toBe("5");
});
test("clear empty panel", () => {
    calcObj.pressButton("C"); // Kui midagi pole, siis ei juhtu midagi
    expect(calcObj.getPanelContents()).toBe("");
});
