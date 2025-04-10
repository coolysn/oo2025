//Hulknurk
//Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks
//ning teine massiiv y-koordinaatide hoidmiseks. 
//Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.
//Lisa klassile käsklus punkti koordinaadipaari lisamiseks. 
// Käsklusena väljasta tekkiva hulknurga ümbermõõt. Kuva tekkinud kujund ekraanile.
class Kolmnurk{
    
     protected xKoord: number[];
     protected yKoord: number[];

     constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number){
        this.xKoord = [x1, x2, x3];
        this.yKoord = [y1, y2, y3];
     }
     getKolmnurk(): {x: number[], y:number[]} {
        return {x: this.xKoord, y: this.yKoord};
    }
    addNew(): (x: number[], y: number[] ): void{ 
        this.xKoord.push(x);
        this.yKoord.push(y);
    }
}


let kolmnurk = new Kolmnurk(1,0,3,0,2,3);
console.log(kolmnurk.getKolmnurk());

let kolmnurk2 = new Kolmnurk(2,0,4,1,5,2);
console.log(kolmnurk2.getKolmnurk());

