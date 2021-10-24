class Rectangle {
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }

    get length() {
        return this._length;
    }

    set length(length) {
        this._length = length;
    }

    get width() {
        return this._width;
    }

    set width(width) {
        this._width = width;
    }

    getArea() {
        return this._length * this._width;
    }

    getPerimeter() {
        return 2 * (this._length * this._width);
    }

    toString() {
        let row = Array(this._length).fill(' ');
        let result = '';
        for (let i = 0; i < this._width; i++) {
            if (i === 0 || i === this._width - 1) {
                result += row.fill('.').join(' ') + '\n';
                row.fill(' ');
                continue;
            }
            row[0] = '.';
            row[this._length - 1] = '.';
            result += row.join(' ') + '\n';
        }
        return result;
    }
}

let rec = new Rectangle(4, 3);
console.log(rec.toString());
console.log(rec.getArea());
console.log(rec.getPerimeter())