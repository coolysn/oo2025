import { Taheloendaja } from "./Sona";

export abstract class Tekst implements Taheloendaja {
    abstract kysiSisu(): string; //iga tekst peab teadma kuidas sisu anda

    //mitukorda täht esineb sisus
    loendaTaht(taht: string): number {
        const sisu = this.kysiSisu();
        let loend = 0;
        for(let i = 0; i < sisu.length; i++) {
            if (sisu[i] === taht) {
                loend++;
            }
        }
        return loend;
    }
}

//uus versioon Sona klassist
export class Sonatekst extends Tekst {
    private sisu: string;
    
    constructor(sisu: string) {
        super();
        this.sisu = sisu;
    }

    kysiSisu(): string {
        return this.sisu;
    }
}

// Lause tekstina
export class Lausetekst extends Tekst {
    private sonaObjektid: Sonatekst[];

    constructor(lause: string) {
        super();

        const sonaMap = new Map<string, Sonatekst>();
        const sonaTekstid = lause.trim().split(/\s+/);

        this.sonaObjektid = sonaTekstid.map(tekst => {
            if (!sonaMap.has(tekst)) {
                sonaMap.set(tekst, new Sonatekst(tekst));
            }
            return sonaMap.get(tekst)!;
        });
    }   //Kui lauses on sõna mitu korda, nt "tere tulemast tere"
        // siis "tere" ei looda kaks korda, vaid jagatakse sama objekti.
    //.map(...) käib läbi kõik sõnad lauses ja tagastab iga sõna jaoks vastava Sonatekst objekti
    // kui olemas, võtab olemasoleva, muidu loob uue.
    kysiSisu(): string {
        return this.sonaObjektid.map(s => s.kysiSisu()).join(" ");
    }
}