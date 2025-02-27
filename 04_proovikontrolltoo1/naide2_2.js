var Hulknurk2 = /** @class */ (function () {
    function Hulknurk2(xd, yd) {
        this.xd = xd;
        this.yd = yd;
    }
    Hulknurk2.prototype.lisa = function (x, y) {
        this.xd.push(x);
        this.yd.push(y);
    };
    Hulknurk2.prototype.vahemaa = function (x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Hulknurk2.prototype.ymbermoot = function () {
        var v = 0;
        for (var nr = 1; nr < this.xd.length; nr++) {
            v += this.vahemaa(this.xd[nr - 1], this.yd[nr - 1], this.xd[nr], this.yd[nr]);
        }
        v += this.vahemaa(this.xd[this.xd.length - 1], this.yd[this.yd.length - 1], this.xd[0], this.yd[0]);
        return v;
    };
    Hulknurk2.prototype.joonista = function (g) {
        g.beginPath();
        g.moveTo(this.xd[0], this.yd[0]);
        for (var nr = 1; nr < this.xd.length; nr++) {
            g.lineTo(this.xd[nr], this.yd[nr]);
        }
        g.lineTo(this.xd[0], this.yd[0]);
        g.stroke();
    };
    return Hulknurk2;
}());
