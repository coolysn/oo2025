// Hoiab meeles sees hoitava vee kogust. Käsuga saab vett lisada ja eemaldada, küsida kui palju akvaariumis vett. 
//Kui üle ääre antakse eraldi teada.
var Akvaarium3 = /** @class */ (function () {
    function Akvaarium3(pikkus, laius, korgus) {
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
        this.veekogus = 0;
    }
    Akvaarium3.prototype.ruumala = function () {
        return this.pikkus * this.laius * this.korgus;
    };
    Akvaarium3.prototype.lisaVett = function (kogus) {
        if (this.veekogus + kogus > this.ruumala()) {
            alert("Hoiatus: Vesi läheb üle ääre!");
            this.veekogus = this.ruumala();
        }
        else if (this.veekogus + kogus <= 0) {
            alert("Hoiatus: vesi sai otsa!");
        }
        else if (this.veekogus + kogus <= this.ruumala()) {
            this.veekogus += kogus;
        }
        uuenda();
    };
    Akvaarium3.prototype.veeKogus = function () {
        return this.veekogus;
    };
    return Akvaarium3;
}());
var ak1 = new Akvaarium3(10, 4, 5);
function algus() {
    document.getElementById("ruumala").innerText = ak1.ruumala().toString();
    document.getElementById("veeKogus").max = ak1.ruumala().toString();
    uuenda();
}
function muudaVett(uusKogus) {
    var kogus = parseInt(uusKogus) - ak1.veeKogus();
    ak1.lisaVett(kogus);
    document.getElementById("slider").innerText = ak1.veeKogus().toString();
}
function uuenda() {
    document.getElementById("veeKogus").innerText = ak1.veeKogus().toString();
}
