class ColorBox{
    private width: number = 100;
    private height: number = 100;

    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D) {}
    draw(r: number, g: number, b: number) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}

function getOppositeColor(r: number, g: number, b: number): [number, number, number] {
    return [255 - r, 255 - g, 255 - b]; // Vastandvärv, lahutatakse valgest (255,255,255)
}

let colorCanvas = document.getElementById("colorCanvas") as HTMLCanvasElement;
let oppositeCanvas = document.getElementById("oppositeCanvas") as HTMLCanvasElement;

let colorBox = new ColorBox(colorCanvas, colorCanvas.getContext("2d")!);
let oppositeBox = new ColorBox(oppositeCanvas, oppositeCanvas.getContext("2d")!);

function updateColors() {
    let r = (document.getElementById("rangeR") as HTMLInputElement).valueAsNumber;
    let g = (document.getElementById("rangeG") as HTMLInputElement).valueAsNumber;
    let b = (document.getElementById("rangeB")as HTMLInputElement).valueAsNumber;
    
    let [or, og, ob] = getOppositeColor(r, g, b);
    
    this.colorBox.draw(r, g, b);
    this.oppositeBox.draw(or, og, ob);
}