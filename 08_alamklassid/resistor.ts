
abstract class AbstractResistor {
    abstract getResistance(): number;

    getCurrent (u:number):number{
        return u/this.getResistance();
    }
}

class Resistor extends AbstractResistor{
    r: number=0;
    
    constructor(r:number){
        super();
        this.r=r;
    }

    getResistance():number {
        return this.r;
    }
}

class Switch extends AbstractResistor{
    private on: boolean = false;

    setOn(state: boolean){
        this.on=state;
    }
    getResistance():number {
        return this.on ? 0 : 1000000;
    }
    getCurrent(u: number): number {
        if (u>0 && this.on){
            throw new Error("short circuit"); //Annab veateate kui lühis
        }
        return super.getCurrent(u); 
    }
}
//uus massiiv
let circuit: AbstractResistor[] = [new Resistor(220), new Switch()];

for (let element of circuit){
    console.log(element.getResistance());
}

function sumResistance(element: AbstractResistor[]): number{ //Selleks et lisada for tsüklisse
    let sum=0;

    for (let r of element){
        sum += r.getResistance()
    }
    return sum;
}

console.log("Total resistance", sumResistance(circuit));
(circuit[1] as Switch). setOn(true);
console.log("Total resistance", sumResistance(circuit));

//by default see on väljas, peab sisse lülitama ennem
let s1= new Switch();
console.log(s1.getResistance());
s1.setOn(true);
console.log(s1.getResistance());
//console.log(s1.getCurrent(5));
let r1:AbstractResistor=new Resistor(220);
console.log(r1.getResistance()); 


