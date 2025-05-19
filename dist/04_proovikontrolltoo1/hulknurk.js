"use strict";
//Hulknurk
//Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks
//ning teine massiiv y-koordinaatide hoidmiseks. 
//Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.
//Lisa klassile käsklus punkti koordinaadipaari lisamiseks. 
// Käsklusena väljasta tekkiva hulknurga ümbermõõt. Kuva tekkinud kujund ekraanile.
class Kolmnurk {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.xKoord = [x1, x2, x3];
        this.yKoord = [y1, y2, y3];
    }
    getKolmnurk() {
        return { x: this.xKoord, y: this.yKoord };
    }
}
void {
    this: .xKoord.push(x),
    this: .yKoord.push(y)
};
let kolmnurk = new Kolmnurk(1, 0, 3, 0, 2, 3);
console.log(kolmnurk.getKolmnurk());
let kolmnurk2 = new Kolmnurk(2, 0, 4, 1, 5, 2);
console.log(kolmnurk2.getKolmnurk());
