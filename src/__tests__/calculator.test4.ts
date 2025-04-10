import { Calculator4 } from "../calculator4";

let calcObj: Calculator4 | null = null;

beforeEach(() => {
    calcObj! = new Calculator4();
});


test("delete last character", () => {
    calcObj!.pressButton("5");
    calcObj!.pressButton("3");
    calcObj!.pressButton("C"); // Kustutame viimase märgi
    expect(calcObj!.getPanelContents()).toBe("5");
});

test("clear empty panel", () => {
    calcObj!.pressButton("C"); // Kui midagi pole, siis ei juhtu midagi
    expect(calcObj!.getPanelContents()).toBe("");
});
