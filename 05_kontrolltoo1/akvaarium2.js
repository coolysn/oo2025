"use strict";
// Hoiab meeles sees hoitava vee kogust. Käsuga saab vett lisada, küsida kui palju akvaariumis vett. 
//Kui üle ääre antakse eraldi teada. veekogus on ruumala
class Akvaarium2 {
    pikkus;
    laius;
    korgus;
    veekogus;
    constructor(pikkus, laius, korgus) {
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
        this.veekogus = 0;
    }
    ruumala() {
        return this.pikkus * this.laius * this.korgus;
    }
    lisaVett(kogus) {
        if (this.veekogus + kogus > this.ruumala()) {
            console.log("Hoiatus: Vesi läheb üle ääre!");
            this.veekogus = this.ruumala();
        }
        else if (this.veekogus + kogus <= this.ruumala()) {
            this.veekogus += kogus;
        }
    }
    veeKogus() {
        return this.veekogus;
    }
}
let ak1 = new Akvaarium2(6, 4, 5);
console.log(ak1.ruumala());
console.log("Vett on akvaariumis ", ak1.veeKogus(), "liitrit.");
ak1.lisaVett(20);
console.log("Vett on akvaariumis ", ak1.veeKogus(), "liitrit.");
ak1.lisaVett(50);
console.log("Vett on akvaariumis ", ak1.veeKogus(), "liitrit.");
ak1.lisaVett(100);
console.log("Vett on akvaariumis ", ak1.veeKogus(), "liitrit.");
