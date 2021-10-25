Function.prototype.customBind = function (thisArg, ...rest) {
    return (...args) => {
        const uniqueID = Date.now().toString();

        thisArg[uniqueID] = this;
        const result = thisArg[uniqueID](...rest.concat(args));
        delete thisArg[uniqueID];
        return result;
    }
}

const student = {
    name: 'John'
}

function info(lastname, email) {
    console.log(`${this.name}, ${lastname}, ${email}`);
}

info.bind(student, 'Biden', 'b@mail.ru')();

info.customBind(student, 'Biden', 'b@mail.ru')();