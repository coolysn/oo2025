var _a;
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount(initialBalance) {
        this.balance = initialBalance;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        updateBalance(this.balance);
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            alert("Pole piisavalt raha kontol!");
        }
        else {
            this.balance -= amount;
            updateBalance(this.balance);
        }
    };
    SavingsAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SavingsAccount;
}());
var DailyAccount = /** @class */ (function () {
    function DailyAccount(initialBalance, dailyLimit) {
        this.dailyWithdrawn = 0;
        this.balance = initialBalance;
        this.dailyLimit = dailyLimit;
    }
    DailyAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        updateBalance(this.balance, this.dailyLimit - this.dailyWithdrawn);
    };
    DailyAccount.prototype.withdraw = function (amount) {
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
    };
    DailyAccount.prototype.getBalance = function () {
        return this.balance;
    };
    DailyAccount.prototype.getRemainingDailyLimit = function () {
        return this.dailyLimit - this.dailyWithdrawn;
    };
    return DailyAccount;
}());
//Näidiskontod
var savings = new SavingsAccount(500);
var daily = new DailyAccount(500, 300);
var activeAccount = savings;
//kasutaja valib kontode vahel
(_a = document.getElementById("accountType")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function (event) {
    activeAccount = event.target.value === "daily" ? daily : savings;
    if (activeAccount instanceof DailyAccount) {
        updateBalance(activeAccount.getBalance(), activeAccount.getRemainingDailyLimit());
    }
    else {
        updateBalance(activeAccount.getBalance());
    }
});
function deposit() {
    var amount = getAmount();
    if (amount > 0)
        activeAccount.deposit(amount);
}
function withdraw() {
    var amount = getAmount();
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
