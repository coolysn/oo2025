"use strict";
class CharCounter {
    adder;
    //Takes adder onject as a parameter and stores it in a protected variable
    constructor(adder) {
        this.adder = adder;
    }
    //add number of words to the character give to the Adder
    //method which designed to take a string (word)
    addWordCharacters(word) {
        this.adder.add(word.length);
    }
    getCharacterCount() {
        return this.adder.getSum();
    }
}
class SimpleAdder {
    sum = 0; //algne sum on 0. Peab defineerima
    add(nr) { this.sum += nr; } // lisa uus arv summale
    getSum() {
        return this.sum;
    }
    reset() {
        this.sum = 0;
    }
}
let adder1 = new SimpleAdder();
let counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
//adder1.add(3);
//adder1.add(5);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());
