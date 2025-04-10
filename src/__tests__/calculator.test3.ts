import { Calculator3 } from "../calculator3";

let calcObj: Calculator3 | null = null;

beforeEach(() => {
    calcObj! = new Calculator3();
});

test("simple addition", () => {
    calcObj!.pressButton("4");
    calcObj!.pressButton("+");
    calcObj!.pressButton("3");
    calcObj!.pressButton("=");
    expect(calcObj!.getPanelContents()).toBe("7");
});
