const { Lause } = require("../12_proovikontrolltoo2/Lause");

describe("Lause", () => {
  const lause = new Lause("pere armastab ema");

  test("loendab tähe 'a' esinemisi", () => {
    expect(lause.loendaTaht("a")).toBe(4); 
  });

  test("loendab tähe 'p' esinemisi", () => {
    expect(lause.loendaTaht("p")).toBe(1);
  });

  test("loendab tähe 'e' esinemisi", () => {
    expect(lause.loendaTaht("e")).toBe(3); 
  });
});