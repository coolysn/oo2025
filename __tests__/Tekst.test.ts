const { Sonatekst, Lausetekst } = require("../12_proovikontrolltoo2/Tekst");

describe("Sonatekst", () => {
  const sona = new Sonatekst("pere");

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

describe("Lausetekst", () => {
  const lause = new Lausetekst("tere tule tule");

  test("loendab tähe 'e' esinemisi", () => {
    expect(lause.loendaTaht("e")).toBe(4); // "tere tule tule"
  });

  test("loendab tähe 'l' esinemisi", () => {
    expect(lause.loendaTaht("l")).toBe(2);
  });

  test("kas sõnaobjektid jagavad samu Sonatekst objekte", () => {
    const lauseObj = new Lausetekst("tere tere");
    const objid = lauseObj["sonaObjektid"];
    expect(objid[0]).toBe(objid[1]); // peaks viitama samale objektile
  });
});
