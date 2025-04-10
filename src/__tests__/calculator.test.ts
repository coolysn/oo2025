import { Calculator } from "../calculator";

let calcObj: Calculator | null = null;

beforeEach(() => {
    calcObj = new Calculator();
});

test("empty int", () => {
    expect(calcObj!.getPanelContents()).toBe("");
});

test("simple input", () => {
    calcObj!.pressButton("8");
    calcObj!.pressButton("9");
    expect(calcObj!.getPanelContents()).toBe("89");
});
