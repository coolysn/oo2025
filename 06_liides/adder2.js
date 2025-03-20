var CharCounter = /** @class */ (function () {
    //Takes adder onject as a parameter and stores it in a protected variable
    function CharCounter(adder) {
        this.adder = adder;
    }
    //add number of words to the character give to the Adder
    //method which designed to take a string (word)
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        this.sum = 0; //algne sum on 0. Peab defineerima
        this.count = 0;
    }
    //will track how many numbers have been added
    CountingAdder.prototype.add = function (nr) {
        this.sum += nr; // lisa uus arv summale
        this.count++; //increment count
    };
    CountingAdder.prototype.getSum = function () {
        return this.sum;
    };
    CountingAdder.prototype.getAverage = function () {
        if (this.count > 0) {
            return this.sum / this.count;
        }
        return 0;
    };
    return CountingAdder;
}());
var adder1 = new CountingAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
//adder1.add(3);
//adder1.add(5);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());
