import { Taheloendaja } from "./Sona";
import { Sona } from "./Sona";

//Lauses tähe esinemissageduse loendamisel liidetakse kokku vastava tähe esinemissagedused lause sõnades.
export class Lause implements Taheloendaja {
    private sonad: Sona[];

    constructor(tekst: string){ //split osa jagab teksti sõnadeks (ükskõik kui palju eraldajaid +/)
        const sonaTekstid = tekst.trim().split(/\s+/); //Trim eemaldab tühikud
        this.sonad = sonaTekstid.map(s => new Sona(s)); //Map iga saadud s jaoks uus  Sona Objekt
    }

    loendaTaht(taht: string): number {
        let kokku = 0;
        for (const sona of this.sonad) {
            kokku += sona.loendaTaht(taht);
        }
        return kokku;
    }
}