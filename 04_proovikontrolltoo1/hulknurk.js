//Hulknurk
//Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks
//ning teine massiiv y-koordinaatide hoidmiseks. 
//Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.
var Kolmnurk = /** @class */ (function () {
    function Kolmnurk(x1, y1, x2, y2, x3, y3) {
        this.xKoord = [x1, x2, x3];
        this.yKoord = [y1, y2, y3];
    }
    Kolmnurk.prototype.getKolmnurk = function () {
        return { x: this.xKoord, y: this.yKoord };
    };
    return Kolmnurk;
}());
var kolmnurk = new Kolmnurk(1, 0, 3, 0, 2, 3);
console.log(kolmnurk.getKolmnurk());
var kolmnurk2 = new Kolmnurk(2, 0, 4, 1, 5, 2);
console.log(kolmnurk2.getKolmnurk());

