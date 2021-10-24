class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    toString() {
        return `${this._name}: ${this._email}`
    }
}

let aut = new Author('Tolstoy', 'tolstoy@yandex.ru', 'man')
console.log(aut.toString());

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    getProfit() {
        return this._quantity * this._price;
    }

    toString() {
        return `${this._title} by ${this._author},
        price: ${this._price} $`
    }
}

let book = new Book('Anna Karenina', aut, 10, 2);
console.log(book);
console.log(book.toString());
console.log(book.getProfit());
