// Klass akvaariumi tarbeks. pikkus, laius, korgus on cm. Käsklus ruumala väljastamiseks.
// Ruumala valem: pikkus* kõrgus*laius
class Akvaarium{
    constructor(protected pikkus:number, protected laius:number, protected korgus:number){
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
    }
    
    ruumala():number{
        let V:number= this.pikkus * this.laius * this.korgus
        return V;
    }

}

let ak1:Akvaarium = new Akvaarium(6,4,5);
console.log(ak1.ruumala());