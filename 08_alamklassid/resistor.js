"use strict";
class AbstractResistor {
    getCurrent(u) {
        return u / this.getResistance();
    }
}
class Resistor extends AbstractResistor {
    r = 0;
    constructor(r) {
        super();
        this.r = r;
    }
    getResistance() {
        return this.r;
    }
}
class Switch extends AbstractResistor {
    on = false;
    setOn(state) {
        this.on = state;
    }
    getResistance() {
        return this.on ? 0 : 1000000;
    }
    getCurrent(u) {
        if (u > 0 && this.on) {
            throw new Error("short circuit"); //Annab veateate kui lühis
        }
        return super.getCurrent(u);
    }
}
//uus massiiv
let circuit = [new Resistor(220), new Switch()];
for (let element of circuit) {
    console.log(element.getResistance());
}
function sumResistance(element) {
    let sum = 0;
    for (let r of element) {
        sum += r.getResistance();
    }
    return sum;
}
console.log("Total resistance", sumResistance(circuit));
circuit[1].setOn(true);
console.log("Total resistance", sumResistance(circuit));
//by default see on väljas, peab sisse lülitama ennem
let s1 = new Switch();
console.log(s1.getResistance());
s1.setOn(true);
console.log(s1.getResistance());
//console.log(s1.getCurrent(5));
let r1 = new Resistor(220);
console.log(r1.getResistance());
