class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._position = position;
        this._salary = salary;
        this._workingHours = workingHours;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    get workingHours() {
        return this._workingHours;
    }

    set workingHours(value) {
        this._workingHours = value;
    }

    getFullName() {
        return `${this._firstName} ${this.lastName}`
    }

    getAnnularSalary() {
        //Assume that salary is the monthly salary
        return 12 * this._salary;
        /*if salary is per hour then 365 * workingHours * salary (this was not specified in the problem)*/
    }

    raiseSalary(percent) {
        this._salary = this._salary * (1 + percent / 100);
        return this._salary;
    }

}

let emp = new Employee(1, 'Joe', 'Newman', 'Senior Developer', 500, 10);
console.log(emp);
console.log(emp.raiseSalary(10));
console.log(emp.getAnnularSalary());
console.log(emp.getFullName())