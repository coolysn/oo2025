import { Sona } from "../12_proovikontrolltoo2/Sona";
describe("Sona", () => {
    const sona = new Sona("pere");
    test("loendab tähe 'a' esinemisi", () => {
        expect(sona.loenda("a")).toBe(0);
    });
    test("loendab tähe 'p' esinemisi", () => {
        expect(sona.loenda("p")).toBe(1);
    });
    test("loendab tähe 'e' esinemisi", () => {
        expect(sona.loenda("e")).toBe(2);
    });
});
