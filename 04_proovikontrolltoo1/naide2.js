"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hulknurk = void 0;
var Hulknurk = /** @class */ (function () {
    function Hulknurk(xd, yd) {
        this.xd = xd;
        this.yd = yd;
    }
    Hulknurk.prototype.lisa = function (x, y) {
        this.xd.push(x);
        this.yd.push(y);
    };
    Hulknurk.prototype.vahemaa = function (x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Hulknurk.prototype.ymbermoot = function () {
        var v = 0;
        for (var nr = 1; nr < this.xd.length; nr++) {
            v += this.vahemaa(this.xd[nr - 1], this.yd[nr - 1], this.xd[nr], this.yd[nr]);
        }
        v += this.vahemaa(this.xd[this.xd.length - 1], this.yd[this.yd.length - 1], this.xd[0], this.yd[0]);
        return v;
    };
    Hulknurk.prototype.joonista = function (g) {
        for (var nr = 1; nr < this.xd.length; nr++) {
            g.moveTo(this.xd[nr - 1], this.yd[nr - 1]);
            g.lineTo(this.xd[nr], this.yd[nr]);
        }
        g.stroke();
    };
    return Hulknurk;
}());
exports.Hulknurk = Hulknurk;
var h1 = new Hulknurk([50, 30, 40], [40, 30, 50]);
var h2 = new Hulknurk([50, 10, 40], [20, 30, 30]);
h1.lisa(75, 35);
console.log(h1, h1.ymbermoot());
console.log(h2);
