"use strict";
const { Calculator5 } = require("../src/calculator5");
// @ts-ignore
let calcObj = null;
beforeEach(() => {
    calcObj = new Calculator5();
});
test("clear all input", () => {
    calcObj.pressButton("9");
    calcObj.pressButton("+");
    calcObj.pressButton("1");
    calcObj.pressButton("AC"); // Kustutame kõik
    expect(calcObj.getPanelContents()).toBe("");
});
