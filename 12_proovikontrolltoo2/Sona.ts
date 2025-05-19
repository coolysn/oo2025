//liides mille ainus meetod saab sisendiks tähe ja tagastab selle esinemise arvu
export interface Taheloendaja {
    loendaTaht(taht: string): number;
}

export class Sona implements Taheloendaja {
    private sisu: string;

    constructor(sisu: string) {
        this.sisu = sisu;
    }

    loendaTaht(taht: string): number {
        let loend: number = 0;
        for (let i = 0; i < this.sisu.length; i++) {
            if (this.sisu[i] === taht) {
                loend++;
            }
        }
        return loend;
    }
}