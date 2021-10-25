Function.prototype.customApply = function (thisArg, args) {
    const uniqueID = Date.now().toString();

    thisArg[uniqueID] = this;

    const result = thisArg[uniqueID](...args);
    delete thisArg;
    return result;
}

const student = {
    name: 'John'
}

function info(lastname, email) {
    console.log(`${this.name}, ${lastname}, ${email}`);
}

info.apply(student, ['Biden', 'b@mail.ru']);

info.customApply(student, ['Biden', 'b@mail.ru']);