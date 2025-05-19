//Tekstide sarnasus 
class Tekst {
    public sisu: string;
    constructor(sisu: string){
        this.sisu = sisu;
    }

    sumbolOsakaal(sumbol: string): number {
        if (!sumbol || sumbol.length !== 1 || !sumbol.match(/[^\s]/)) return 0;
    
        const normalized = this.sisu.toLowerCase(); 
        const otsitav = sumbol.toLowerCase();
    
        let loendur = 0;
        for (let i = 0; i < normalized.length; i++) {
            if (normalized[i] === otsitav) {
                loendur++;
            }
        }
    
        return normalized.length > 0 ? Math.round((loendur / normalized.length) * 100) / 100 : 0;
    }
    
    osakaaludeSumma(teine: Tekst, tahed: string): number {
        let summa = 0;

        for (let i = 0; i < tahed.length; i++) {
            const t = tahed[i];
            const osakaal1 = this.sumbolOsakaal(t);
            const osakaal2 = teine.sumbolOsakaal(t);
            summa += Math.abs(osakaal1 - osakaal2);
        }
         return Math.round(summa * 100) / 100;
    }
}

class Tekstihaldur {

    protected tekstid: Tekst[];
    constructor() {
        this.tekstid = [];
    }

    lisaTekst(sisu: string) {
        this.tekstid.push(new Tekst(sisu));
    }

    sarnasuseJarjestus(vordlus: Tekst, tahed: string): { tekst: Tekst; vahe: number }[] {
        return this.tekstid
            .filter(t => t !== vordlus) //välistab võrdlusteksti
            .map(t => ({
                tekst: t,
                vahe: vordlus.osakaaludeSumma(t, tahed)}))
            .sort((a, b) => a.vahe - b.vahe); // järjekorra määramine
    }
}

const tekst1 = new Tekst("banana banana");
const tekst2 = new Tekst("aabbe");
const tahed = "ae";

const vahe = tekst1.osakaaludeSumma(tekst2, tahed);
console.log(vahe);

