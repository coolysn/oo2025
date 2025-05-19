"use strict";
class vektor {
    x;
    y;
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
    liida(teine) {
        return new vektor(this.x + teine.x, this.y + teine.y);
    }
    //loo käsklus vektori korrutamiseks arvuga (kahega)
    korruta(koef) {
        return new vektor(this.x * koef, this.y * koef);
    }
    suurendaX() {
        this.x += 1;
    }
    //Leia kahe vektori skalaarkorrutis
    skalaarkorrutis(teine) {
        return this.x * teine.x + this.y * teine.y;
    }
}
//Loo massiiv neljast vektorist 
//Leia nende kõigi summa
let vektorid = [
    new vektor(1, 3),
    new vektor(1, 5),
    new vektor(3, 3),
    new vektor(2, 1),
];
let koht = vektorid[0];
for (let i = 1; i < vektorid.length; i++) {
    koht = koht.liida(vektorid[i]);
}
koht.kuva();
let v1 = new vektor(3, 5);
let vagun = new vektor(9, -4);
let energia = v1.skalaarkorrutis(vagun);
console.log(energia);
v1.suurendaX();
v1.kuva();
v1.kuva();
console.log(v1.pikkus());
let v3 = v1.liida(new vektor(1, 2));
v3.kuva();
v1.korruta(4).kuva();
