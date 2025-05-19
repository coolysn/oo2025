"use strict";
class Resistor {
    constructor(r, g, startx, endx, y) {
        this.r = r;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 40;
        this.u = 0;
        this.i = 0;
        this.voimsus = 0;
        this.width = this.endx - this.startx;
        this.draw();
    }
    draw() {
        this.g.clearRect(this.startx, this.y - this.height / 2, this.width, this.height + 20);
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx + this.width / 4, this.y);
        this.g.rect(this.startx + this.width / 4, this.y - this.height / 3, this.width / 2, this.height * 2 / 3);
        this.g.moveTo(this.startx + this.width * 3 / 4, this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();
        this.g.fillText(this.r + " Ω", this.startx + this.width / 3, this.y + 3);
        this.g.fillText(this.voimsus + " W, ", this.startx + this.width / 3, this.y + this.height - 10);
        this.g.fillText(this.u + " V, " + this.i.toFixed(3) + " A", this.startx + this.width / 4, this.y - this.height / 3 - 2);
    }
    setR(r) {
        this.r = r;
        this.calculateCurrent();
        this.draw();
    }
    getR() {
        return this.r;
    }
    setU(u) {
        this.u = u;
        this.calculateCurrent();
        this.draw();
    }
    getU() {
        return this.u;
    }
    setW(voimsus) {
        this.voimsus = voimsus;
        this.calculateCurrent();
        this.draw();
    }
    getW() {
        return this.voimsus;
    }
    calculateCurrent() {
        this.voimsus = this.u * this.r;
        this.i = this.u / this.r;
    }
}
