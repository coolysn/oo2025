"use strict";
//Loo käsk kontrollimaks, kas parameetrina antud pinge on vastava takisti puhul lubatud - st. kas pingestamisel eralduv võimsus jääb lubatud maksimuvõimsuse piiresse
class Resistor {
    constructor(r, maxP) {
        this.r = 0;
        this.maxP = 0;
        this.r = r;
        this.maxP = maxP;
    }
    getCurrent(u) {
        return u / this.r;
    }
    getPower(u) {
        return u * this.getCurrent(u);
    }
    isVoltageAllowed(u) {
        return this.getPower(u) <= this.maxP;
    }
}
//Koosta takistitest massiiv. Koosta funktsioon, mis loob uue massiivi takistitest, mille lubatud võimsus jääb etteantud pinge korral lubatud piiresse.
let r1 = new Resistor(220, 0.25);
let r2 = new Resistor(220, 0.5);
let r3 = new Resistor(220, 1.0);
console.log(r1.getPower(10));
console.log(r1.isVoltageAllowed(12));
let rs = [r1, r2, r3];
let v1 = [];
for (let r of rs) {
    if (r.isVoltageAllowed(10)) {
        v1.push(r);
    }
}
console.log(v1);
//Teine variant
console.log(rs.filter(r => r.isVoltageAllowed(10)));
