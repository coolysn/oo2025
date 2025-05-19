"use strict";
class CharCounter {
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
class CountingAdder {
    constructor() {
        this.sum = 0; //algne sum on 0. Peab defineerima
        this.count = 0;
    }
    //will track how many numbers have been added
    add(nr) {
        this.sum += nr; // lisa uus arv summale
        this.count++; //increment count
    }
    getSum() {
        return this.sum;
    }
    getAverage() {
        if (this.count > 0) {
            return this.sum / this.count;
        }
        return 0;
    }
}
let adder1 = new CountingAdder();
let counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
