"use strict";
//Array
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
class StoringAdder {
    store = []; //arrays hoidmine
    add(nr) {
        this.store.push(nr); //instead of updating a running total, nr stored individually
    }
    getSum() {
        let sum = 0;
        //iterated through all stored numbers and add them to the sum
        for (let amount of this.store) {
            sum += amount;
        }
        return sum;
    }
    getAverage() {
        if (this.store.length > 0) {
            return this.getSum() / this.store.length;
        }
        return 0;
    }
    getRange() {
        if (this.store.length == 0) {
            return 0;
        }
        let minimum = this.store[0];
        let maximum = minimum;
        for (let amount of this.store) {
            if (amount < minimum) {
                minimum = amount;
            }
            if (amount > maximum) {
                maximum = amount;
            }
            ;
        }
        return maximum - minimum;
    }
}
let adder1 = new StoringAdder();
let counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
