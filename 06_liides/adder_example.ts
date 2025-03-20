
interface Adder{
    add(nr:number):void; //A method to add a number
    getSum():number; //returns current sum
    reset():void; 
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

class SimpleAdder implements Adder{
    protected sum: number=0; //algne sum on 0. Peab defineerima
    add(nr:number){this.sum+=nr;} // lisa uus arv summale
    getSum():number{ //tagastab hetke summa
        return this.sum
    }
    reset(){
        this.sum=0;
    }
}

let adder1:Adder=new SimpleAdder();
let counter1: CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");

console.log(counter1.getCharacterCount());

//adder1.add(3);
//adder1.add(5);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());