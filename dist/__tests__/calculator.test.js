"use strict";
const { Calculator } = require("../src/calculator");
let calculatorInstance = null;
beforeEach(() => {
    calculatorInstance = new Calculator();
});
test("empty int", () => {
    expect(calculatorInstance.getPanelContents()).toBe("");
});
test("simple input", () => {
    calculatorInstance.pressButton("8");
    calculatorInstance.pressButton("9");
    expect(calculatorInstance.getPanelContents()).toBe("89");
});
