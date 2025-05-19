"use strict";
class Water {
    constructor(waterAmount, temperature) {
        this.heatingPower = 0;
        this.specialHeatCapacity = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    setHeatingPower(newPower) {
        this.heatingPower = newPower;
    }
    getTemperature() {
        return this.temperature;
    }
    heatASecond() {
        let joules = this.temperature;
        let deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    }
}
let w = new Water(800, 20);
w.setHeatingPower(1500);
//simulate the heating power for 120 second
for (let i = 0; i < 120; i++) {
    w.heatASecond();
    //console.log(w.getTemperature());
}
console.log(`Final temperature after 120 seconds is ${w.getTemperature()}`);
