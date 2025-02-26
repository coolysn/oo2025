var ColorBox = /** @class */ (function () {
    function ColorBox(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
    }
    ColorBox.prototype.draw = function (r, g, b) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
        this.ctx.fillRect(0, 0, this.width, this.height);
    };
    return ColorBox;
}());
function getOppositeColor(r, g, b) {
    return [255 - r, 255 - g, 255 - b]; // Vastandvärv, lahutatakse valgest (255,255,255)
}
var colorCanvas = document.getElementById("colorCanvas");
var oppositeCanvas = document.getElementById("oppositeCanvas");
var colorBox = new ColorBox(colorCanvas, colorCanvas.getContext("2d"));
var oppositeBox = new ColorBox(oppositeCanvas, oppositeCanvas.getContext("2d"));
function updateColors() {
    var r = document.getElementById("rangeR").valueAsNumber;
    var g = document.getElementById("rangeG").valueAsNumber;
    var b = document.getElementById("rangeB").valueAsNumber;
    var _a = getOppositeColor(r, g, b), or = _a[0], og = _a[1], ob = _a[2];
    this.colorBox.draw(r, g, b);
    this.oppositeBox.draw(or, og, ob);
}
