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
    return vektor;
}());
var v1 = new vektor(3, 5);
v1.kuva();
console.log(v1.pikkus());
