"use strict";
class vektor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    kuva() {
        console.log(this.x, this.y);
    }
    pikkus() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
let v1 = new vektor(3, 5);
v1.kuva();
console.log(v1.pikkus());
