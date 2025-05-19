"use strict";
// Hoiab meeles sees hoitava vee kogust. Käsuga saab vett lisada ja eemaldada, küsida kui palju akvaariumis vett. 
//Kui üle ääre antakse eraldi teada.
class Akvaarium3 {
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
    }
    veeKogus() {
        return this.veekogus;
    }
}
let ak1 = new Akvaarium3(10, 4, 5);
function algus() {
    document.getElementById("ruumala").innerText = ak1.ruumala().toString();
    document.getElementById("veeKogus").max = ak1.ruumala().toString();
    uuenda();
}
function muudaVett(uusKogus) {
    let kogus = parseInt(uusKogus) - ak1.veeKogus();
    ak1.lisaVett(kogus);
    document.getElementById("slider").innerText = ak1.veeKogus().toString();
}
function uuenda() {
    document.getElementById("veeKogus").innerText = ak1.veeKogus().toString();
}
