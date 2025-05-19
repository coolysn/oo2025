"use strict";
// Klass akvaariumi tarbeks. pikkus, laius, korgus on cm. Käsklus ruumala väljastamiseks.
// Ruumala valem: pikkus* kõrgus*laius
class Akvaarium {
    constructor(pikkus, laius, korgus) {
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
    }
    ruumala() {
        let V = this.pikkus * this.laius * this.korgus;
        return V;
    }
}
let ak1 = new Akvaarium(6, 4, 5);
console.log(ak1.ruumala());
