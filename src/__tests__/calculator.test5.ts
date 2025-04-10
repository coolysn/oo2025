import { Calculator5 } from "../calculator5";

let calcObj: Calculator5 | null = null;

beforeEach(() => {
    calcObj = new Calculator5();
});


test("clear all input", () => {
    calcObj!.pressButton("9");
    calcObj!.pressButton("+");
    calcObj!.pressButton("1");
    calcObj!.pressButton("AC"); // Kustutame kõik
    expect(calcObj!.getPanelContents()).toBe("");
});
