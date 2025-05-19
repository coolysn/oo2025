const { Sona } = require("../12_proovikontrolltoo2/Sona");

describe("Sona", () => {
  const sona = new Sona("pere");

  test("loendab tähe 'a' esinemisi", () => {
    expect(sona.loendaTaht("a")).toBe(0);
  });

  test("loendab tähe 'p' esinemisi", () => {
    expect(sona.loendaTaht("p")).toBe(1);
  });

  test("loendab tähe 'e' esinemisi", () => {
    expect(sona.loendaTaht("e")).toBe(2);
  });
});
