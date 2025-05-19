"use strict";
class ColorBox {
    canvas;
    ctx;
    width = 100;
    height = 100;
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    draw(r, g, b) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}
function getOppositeColor(r, g, b) {
    return [255 - r, 255 - g, 255 - b]; // Vastandvärv, lahutatakse valgest (255,255,255)
}
let colorCanvas = document.getElementById("colorCanvas");
let oppositeCanvas = document.getElementById("oppositeCanvas");
let colorBox = new ColorBox(colorCanvas, colorCanvas.getContext("2d"));
let oppositeBox = new ColorBox(oppositeCanvas, oppositeCanvas.getContext("2d"));
function updateColors() {
    let r = document.getElementById("rangeR").valueAsNumber;
    let g = document.getElementById("rangeG").valueAsNumber;
    let b = document.getElementById("rangeB").valueAsNumber;
    let [or, og, ob] = getOppositeColor(r, g, b);
    this.colorBox.draw(r, g, b);
    this.oppositeBox.draw(or, og, ob);
}
