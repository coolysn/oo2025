"use strict";
class Hulknurk2 {
    constructor(xd, yd) {
        this.xd = xd;
        this.yd = yd;
    }
    lisa(x, y) {
        this.xd.push(x);
        this.yd.push(y);
    }
    vahemaa(x1, y1, x2, y2) {
        let dx = x2 - x1;
        let dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }
    ymbermoot() {
        let v = 0;
        for (let nr = 1; nr < this.xd.length; nr++) {
            v += this.vahemaa(this.xd[nr - 1], this.yd[nr - 1], this.xd[nr], this.yd[nr]);
        }
        v += this.vahemaa(this.xd[this.xd.length - 1], this.yd[this.yd.length - 1], this.xd[0], this.yd[0]);
        return v;
    }
    joonista(g) {
        g.beginPath();
        g.moveTo(this.xd[0], this.yd[0]);
        for (let nr = 1; nr < this.xd.length; nr++) {
            g.lineTo(this.xd[nr], this.yd[nr]);
        }
        g.lineTo(this.xd[0], this.yd[0]);
        g.stroke();
    }
}
