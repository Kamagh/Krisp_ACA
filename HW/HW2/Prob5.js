const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];
//console.log(users.length)
const avgCalculator = (obj) => (obj.reduce((sum, el) => sum += el.age, 0)) / obj.length;
console.log(avgCalculator(users));