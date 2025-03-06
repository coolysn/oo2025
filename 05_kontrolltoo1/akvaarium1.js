// Klass akvaariumi tarbeks. pikkus, laius, korgus on cm. Käsklus ruumala väljastamiseks.
// Ruumala valem: pikkus* kõrgus*laius
var Akvaarium = /** @class */ (function () {
    function Akvaarium(pikkus, laius, korgus) {
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
    }
    Akvaarium.prototype.ruumala = function () {
        var V = this.pikkus * this.laius * this.korgus;
        return V;
    };
    return Akvaarium;
}());
var ak1 = new Akvaarium(6, 4, 5);
console.log(ak1.ruumala());
