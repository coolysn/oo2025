//Libisev keskmine
//Koosta funktsioon kolme arvu aritmeetilise keskmise leidmiseks. Katseta.
function keskmine(a, b, c) {
    var k = (a + b + c) / 3;
    return k;
}
console.log(keskmine(3, 2, 3));
//Koosta funktsioon massiivi libiseva keskmise leidmiseks. 
//Väljundiks on massiiv, mis on sisendist kahe elemendi võrra lühem ning 
// mille iga elemendi väärtuseks on sisendmassiivi vastava elemendi ning
//selle järgmise ja ülejärgmise elemendi keskmine.
function libisevkeskmine(massiiv) {
    var tulemus = [];
    for (var i = 0; i < massiiv.length - 2; i++) {
        var keskmine_1 = ((massiiv[i] + massiiv[i + 1] + massiiv[i + 2]) / 3);
        tulemus.push(keskmine_1);
    }
    return tulemus;
}
console.log(libisevkeskmine([1, 2, 3, 4, 5, 6]));
console.log(libisevkeskmine([10, 20, 30, 40, 50]));
//Koosta klass, mille eksemplarile saab vastava käsuga lisada arve.
//Teise käsuga saab küsida nende arvude libiseva keskmise massiivi vastavalt eelmise punkti juhendile.
//Koosta kood nõnda, et uue arvu lisamisel eksemplarile tehtaks uusi arvutusi võimalikult vähe (st. ei arvutataks kogu tulemust massiivi algusest uuesti)
var LibisevKeskmine = /** @class */ (function () {
    function LibisevKeskmine() {
        this.arvud = [];
        this.keskmised = [];
    }
    LibisevKeskmine.prototype.addNew = function (arv) {
        this.arvud.push(arv);
        if (this.arvud.length >= 3) {
            var viimane = this.arvud.length - 1;
            var uusKeskmine = (this.arvud[viimane] + this.arvud[viimane - 1] + this.arvud[viimane - 2]) / 3;
            this.keskmised.push(uusKeskmine);
        }
    };
    LibisevKeskmine.prototype.getKeskmised = function () {
        return this.keskmised;
    };
    return LibisevKeskmine;
}());
var keskmineArvutaja = new LibisevKeskmine();
keskmineArvutaja.addNew(1);
keskmineArvutaja.addNew(2);
keskmineArvutaja.addNew(3);
keskmineArvutaja.addNew(4);
keskmineArvutaja.addNew(5);
keskmineArvutaja.addNew(6);
console.log(keskmineArvutaja.getKeskmised());
