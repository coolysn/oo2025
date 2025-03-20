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
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; //algne sum on 0. Peab defineerima
    }
    SimpleAdder.prototype.add = function (nr) { this.sum += nr; }; // lisa uus arv summale
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    SimpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
//adder1.add(3);
//adder1.add(5);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());
