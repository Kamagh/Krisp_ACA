class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    credit(amount) {
        this._balance += amount
        return this._balance;
    }

    debit(amount) {
        if (this._balance < amount) return 'Amount exceeded balance';
        this._balance -= amount;
    }

    transferTo(anotherAccount, amount) {
        if (this._balance < amount) return 'Amount exceeded balance';
        this._balance -= amount;
        anotherAccount.balance += amount;
        return this._balance;
    }

    static identifyAccounts(accountFirst, accountSecond){
        return accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance;
    }

    toString() {
        return `#${this._id}: ${this._name}
balance: ${this._balance}`;
    }
}

let acc1 = new Account(1, 'America', 200);
let acc2 = new Account(2, 'ID', 300);

console.log(Account.identifyAccounts(acc1, acc2));
console.log(acc1.credit(50));
acc2.debit(100)
console.log(acc2.toString());
console.log(acc1.transferTo(acc2,100));