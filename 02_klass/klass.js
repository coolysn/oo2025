var VabaLangemine = /** @class */ (function () {
    function VabaLangemine(algKiirus) {
        if (algKiirus === void 0) { algKiirus = 0; }
        this.algKiirus = algKiirus;
        this.g = 9.81; // Gravitatsioonikiirendus (m/s²)
    }
    //Keha hetkekiirus pärast t sekundit,  valem: v = v0 + g * t
    VabaLangemine.prototype.getSpeed = function (t) {
        return this.algKiirus + this.g * t;
    };
    //Keha läbitud teepikkus pärast t sekundit, valem: s = v0 * t + (1/2) * g * t²
    VabaLangemine.prototype.getDistance = function (t) {
        return this.algKiirus * t + 0.5 * this.g * t * t;
    };
    //Kontrollib, kas keha on maapinnale jõudnud
    VabaLangemine.prototype.hasHitGround = function (kõrgus, t) {
        return this.getDistance(t) >= kõrgus;
    };
    return VabaLangemine;
}());
var keha1 = new VabaLangemine(5);
var keha2 = new VabaLangemine(10);
var kõrgus = 70;
var aeg = 3;
console.log("Keha 1 kiirus pärast", aeg, "sek:", keha1.getSpeed(aeg), "m/s");
console.log("Keha 1 teepikkus pärast", aeg, "sek:", keha1.getDistance(aeg), "m");
console.log("Kas keha 1 on maapinnale jõudnud?", keha1.hasHitGround(kõrgus, aeg));
console.log("Keha 2 kiirus pärast", aeg, "sek:", keha2.getSpeed(aeg), "m/s");
console.log("Keha 2 teepikkus pärast", aeg, "sek:", keha2.getDistance(aeg), "m");
console.log("Kas keha 2 on maapinnale jõudnud?", keha2.hasHitGround(kõrgus, aeg));
