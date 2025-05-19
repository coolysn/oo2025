"use strict";
class Potentsiomeeter {
    nurkMin;
    nurkMax;
    rMin;
    rMax;
    nurk = 0;
    constructor(nurkMin, nurkMax, rMin, rMax) {
        this.nurkMin = nurkMin;
        this.nurkMax = nurkMax;
        this.rMin = rMin;
        this.rMax = rMax;
    }
    muudaNurk(delta) {
        let uusNurk = this.nurk + delta;
        if (uusNurk < this.nurkMin) {
            throw new Error("Liiga väike nurk!");
        }
        if (uusNurk > this.nurkMax) {
            throw new Error("Liiga suur nurk!");
        }
        this.nurk = uusNurk;
    }
    getR() {
        return this.rMin + (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin) * (this.rMax - this.rMin);
    }
}
let p1 = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(30);
console.log(p1);
console.log(p1.getR());
