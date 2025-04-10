// Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks ning teine massiiv y-koordinaatide hoidmiseks. Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja.

//Lisa klassile käsklus punkti koordinaadipaari lisamiseks. Käsklusena väljasta tekkiva hulknurga ümbermõõt. Kuva tekkinud kujund ekraanile.

// Lisa klassile käsklused kogu kujundi nihutamiseks ning suurendamiseks/vähendamiseks. Võimalda küsida punktide uued asukohad ning külgede pikkused, näita kujundit ekraanil.


class KolmNurk {

    constructor(protected xCords: number[], protected yCords: number[]){}
        // konstruktori sees määratakse objekti algväärtused
    lisa(x:number, y:number): void{
        this.xCords.push(x); this.yCords.push(y);
    }
    
    
}
//k1:KolmNurk määrab k1 objekti tüübi ja new KolmNurk kutsub constructori välja
let k1:KolmNurk = new KolmNurk([20,30,30], [30,40,40]);
let k2:KolmNurk = new KolmNurk([10,30,20], [10,20,30]);
console.log(k1,k2);