Function.prototype.customCall = function (thisArg, ...args) {
    const uniqueID = Date.now().toString();

    thisArg[uniqueID] = this;

    const result = thisArg[uniqueID](...args);
    delete thisArg;
    return result;

    /*    thisArg = thisArg || global;
        //let uniqueID = '0'+ Mat
        thisArg.fnName = this;
        thisArg.fnName();

        //let args = [];
        for (let i = 1; i < arguments.length; i++){
            args.push("arguments["+ i + "]");
        }

        eval(thisArg.fnName("thisArg.fnName(" + args + ")"))*/
}

const student = {
    name: 'John'
}

function info(lastname, email) {
    console.log(`${this.name}, ${lastname}, ${email}`);
}

info.call(student, 'Biden', 'b@mail.ru');

info.customCall(student, 'Biden', 'b@mail.ru');