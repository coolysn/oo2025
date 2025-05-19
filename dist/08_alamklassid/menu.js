"use strict";
class AbstractDrink {
    getDescription() {
        return `See jook maksab ${this.getPrice()}  €`; //by default siin kui pole alamklassil
    }
}
class Coffee extends AbstractDrink {
    constructor(size) {
        super();
        this.size = size;
    }
    getPrice() {
        switch (this.size) {
            case "väike": return 2.5;
            case "keskmine": return 3.5;
            case "suur": return 5;
            default: return 0;
        }
    }
    getDescription() {
        return `Kohv ${this.size} maksab ${this.getPrice()} €`;
    }
}
class Juice extends AbstractDrink {
    constructor(ml) {
        super();
        this.ml = ml;
    }
    getPrice() {
        return this.ml * 0.01; //1 ml maksab 0.01 €
    }
    getDescription() {
        return `${this.ml} ml mahla maksab ${this.getPrice()} €`; //returns formatted text string
    }
}
//Jookide massiiv
let drinks = [
    new Coffee("väike"),
    new Coffee("suur"),
    new Juice(250),
    new Juice(500)
];
//Iga joogi kirjeldus
for (let drink of drinks) {
    console.log(drink.getDescription());
}
function totalPrice(drinks) {
    let sum = 0;
    for (let drink of drinks) {
        sum += drink.getPrice();
    }
    return sum;
}
console.log("Kogu hind:", totalPrice(drinks), "€");
