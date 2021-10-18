const calcSum = arr => arr.filter(el => el >= 18).reduce((sum, el) => sum + el, 0);

console.log(calcSum([1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]));