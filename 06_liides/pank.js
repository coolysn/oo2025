"use strict";
class SavingsAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        updateBalance(this.balance);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            alert("Pole piisavalt raha kontol!");
        }
        else {
            this.balance -= amount;
            updateBalance(this.balance);
        }
    }
    getBalance() {
        return this.balance;
    }
}
class DailyAccount {
    balance;
    dailyLimit;
    dailyWithdrawn = 0;
    constructor(initialBalance, dailyLimit) {
        this.balance = initialBalance;
        this.dailyLimit = dailyLimit;
    }
    deposit(amount) {
        this.balance += amount;
        updateBalance(this.balance, this.dailyLimit - this.dailyWithdrawn);
    }
    withdraw(amount) {
        if (this.dailyWithdrawn + amount > this.dailyLimit) {
            alert("Oled ületanud päevase väljavõtmislimiidi!");
            return;
        }
        if (amount > this.balance) {
            alert("Pole piisavalt raha!");
            return;
        }
        this.balance -= amount;
        this.dailyWithdrawn += amount;
        updateBalance(this.balance, this.dailyLimit - this.dailyWithdrawn);
    }
    getBalance() {
        return this.balance;
    }
    getRemainingDailyLimit() {
        return this.dailyLimit - this.dailyWithdrawn;
    }
}
//Näidiskontod
let savings = new SavingsAccount(500);
let daily = new DailyAccount(500, 300);
let activeAccount = savings;
//kasutaja valib kontode vahel
document.getElementById("accountType")?.addEventListener("change", (event) => {
    activeAccount = event.target.value === "daily" ? daily : savings;
    if (activeAccount instanceof DailyAccount) {
        updateBalance(activeAccount.getBalance(), activeAccount.getRemainingDailyLimit());
    }
    else {
        updateBalance(activeAccount.getBalance());
    }
});
function deposit() {
    const amount = getAmount();
    if (amount > 0)
        activeAccount.deposit(amount);
}
function withdraw() {
    const amount = getAmount();
    if (amount > 0)
        activeAccount.withdraw(amount);
}
function getAmount() {
    return parseFloat(document.getElementById("amount").value) || 0;
}
function updateBalance(balance, dailyLimit) {
    document.getElementById("balance").innerText = balance.toString();
    if (dailyLimit !== undefined) {
        document.getElementById("dailyLimit").innerText = dailyLimit.toString();
    }
    else {
        document.getElementById("dailyLimit").innerText = "-"; //Kui limiiti pole (hoiukontol)
    }
}
