class BankAccount {
    constructor(ownerName, accountNumber) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`${this.ownerName}, ${this.accountNumber} raqamidagi hisobingizga ${amount} summa mablag' qo'shildi.`);
        this.showBalance();
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Noto'g'ri amal! Sizning hisobingizda yetarli mablag' mavjud emas.");
        } else {
            this.balance -= amount;
            console.log(`${this.ownerName}, ${this.accountNumber} raqamidagi hisobingizdan ${amount} summa mablag' yechib olingan.`);
            this.showBalance();
        }
    }
    showBalance() {
        console.log(`${this.ownerName}, ${this.accountNumber} raqamidagi joriy balans: ${this.balance} summa`);
    }
}
const account1 = new BankAccount("John Doe", "123456789");
account1.deposit(1000); 
const account2 = new BankAccount("Jane Doe", "987654321");
account2.deposit(500); 
account1.withdraw(200); 
account2.withdraw(700); 
