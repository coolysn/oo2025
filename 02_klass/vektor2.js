var vektor = /** @class */ (function () {
    function vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    vektor.prototype.pikkus = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    vektor.prototype.liida = function (teine) {
        return new vektor(this.x + teine.x, this.y + teine.y);
    };
    //loo käsklus vektori korrutamiseks arvuga (kahega)
    vektor.prototype.korruta = function (koef) {
        return new vektor(this.x * koef, this.y * koef);
    };
    vektor.prototype.suurendaX = function () {
        this.x += 1;
    };
    //Leia kahe vektori skalaarkorrutis
    vektor.prototype.skalaarkorrutis = function (teine) {
        return this.x * teine.x + this.y * teine.y;
    };
    return vektor;
}());
//Loo massiiv neljast vektorist 
//Leia nende kõigi summa
var vektorid = [
    new vektor(1, 3),
    new vektor(1, 5),
    new vektor(3, 3),
    new vektor(2, 1),
];
var koht = vektorid[0];
for (var i = 1; i < vektorid.length; i++) {
    koht = koht.liida(vektorid[i]);
}
koht.kuva();
var v1 = new vektor(3, 5);
var vagun = new vektor(9, -4);
var energia = v1.skalaarkorrutis(vagun);
console.log(energia);
v1.suurendaX();
v1.kuva();
v1.kuva();
console.log(v1.pikkus());
var v3 = v1.liida(new vektor(1, 2));
v3.kuva();
v1.korruta(4).kuva();
