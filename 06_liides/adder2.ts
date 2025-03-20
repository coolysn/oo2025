interface Adder{
    add(nr:number):void; //A method to add a number
    getSum():number; //returns current sum
    //reset():void; 
    getAverage():number;
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

class CountingAdder implements Adder{
    protected sum: number=0; //algne sum on 0. Peab defineerima
    protected count: number=0; 
    //will track how many numbers have been added

    add(nr:number){
        this.sum+=nr;  // lisa uus arv summale
        this.count++; //increment count
    }
        
    getSum():number{ //tagastab hetke summa
        return this.sum
    }
    
    getAverage():number{
        if(this.count>0){
            return this.sum/this.count;
        }
        return 0;
    }
}

let adder1:Adder=new CountingAdder();
let counter1: CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");

console.log(counter1.getCharacterCount());

console.log(adder1.getAverage());
