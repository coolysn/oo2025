interface BankAccount {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
}

class SavingsAccount implements BankAccount { //hoiukonto
    protected balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        updateBalance(this.balance);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            alert("Pole piisavalt raha kontol!");
        } else {
            this.balance -= amount;
            updateBalance(this.balance);
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

class DailyAccount implements BankAccount { //igapäevane konto
    protected balance: number;
    protected dailyLimit: number;
    protected dailyWithdrawn: number = 0;

    constructor(initialBalance: number, dailyLimit: number) {
        this.balance = initialBalance;
        this.dailyLimit = dailyLimit;
    }

    deposit(amount: number): void {
        this.balance += amount;
        updateBalance(this.balance, this.dailyLimit - this.dailyWithdrawn);
    }

    withdraw(amount: number): void {
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

    getBalance(): number {
        return this.balance;
    }

    getRemainingDailyLimit(): number { //tagastab kui palju on päevast limiiti alles
        return this.dailyLimit - this.dailyWithdrawn;
    }
}

//Näidiskontod
let savings = new SavingsAccount(500);
let daily = new DailyAccount(500, 300);
let activeAccount: BankAccount = savings;

//kasutaja valib kontode vahel
document.getElementById("accountType")?.addEventListener("change", (event) => {
    activeAccount = (event.target as HTMLSelectElement).value === "daily" ? daily : savings;
    if (activeAccount instanceof DailyAccount) {
        updateBalance(activeAccount.getBalance(), activeAccount.getRemainingDailyLimit());
    } else {
        updateBalance(activeAccount.getBalance());
    }
});

function deposit() { //sissemakse 
    const amount = getAmount();
    if (amount > 0) activeAccount.deposit(amount);
}

function withdraw() { //väljamakse jaoks
    const amount = getAmount();
    if (amount > 0) activeAccount.withdraw(amount);
}

function getAmount(): number { //Summa saamine HTML-st, teisendab number type
    return parseFloat((document.getElementById("amount") as HTMLInputElement).value) || 0;
}

function updateBalance(balance: number, dailyLimit?: number) { //Uuendab HTML-is saldo ja päevase limiidi kuvamist
    (document.getElementById("balance") as HTMLSpanElement).innerText = balance.toString();
    if (dailyLimit !== undefined) {
        (document.getElementById("dailyLimit") as HTMLSpanElement).innerText = dailyLimit.toString();
    } else {
        (document.getElementById("dailyLimit") as HTMLSpanElement).innerText = "-"; //Kui limiiti pole (hoiukontol)
    }
}
