//Array

interface Adder{
    add(nr:number):void; //A method to add a number
    getSum():number; //returns current sum
    //reset():void; 
    getAverage():number;
    getRange():number;
}

class CharCounter{
    //Takes adder onject as a parameter and stores it in a protected variable
    constructor(protected adder: Adder){}
        //add number of words to the character give to the Adder
        //method which designed to take a string (word)
        addWordCharacters(word: String): void{
            this.adder.add(word.length);
        }

        getCharacterCount():number{
            return this.adder.getSum();
        }
    }

class StoringAdder implements Adder{
    protected store: number[]=[]; //arrays hoidmine

    add(nr:number){
       this.store.push(nr); //instead of updating a running total, nr stored individually

    }
        
    getSum():number{ //tagastab hetke summa
        let sum:number = 0;
        //iterated through all stored numbers and add them to the sum
        for(let amount of this.store){sum+=amount;}
        return sum;
    }
    
    getAverage():number{
        if(this.store.length>0){
            return this.getSum()/this.store.length;
        }
        return 0;
    }
    getRange():number{
        if(this.store.length==0){return 0;}
        let minimum: number= this.store[0];
        let maximum: number= minimum;
        for(let amount of this.store){
            if(amount<minimum){minimum=amount;}
            if(amount>maximum){maximum=amount};
        }
        return maximum-minimum;
    }
}


let adder1:StoringAdder=new StoringAdder();
let counter1: CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");

console.log(counter1.getCharacterCount());

console.log(adder1.getAverage());

console.log(adder1.getRange());