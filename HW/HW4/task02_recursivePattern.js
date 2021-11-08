function abacabaPattern(num) {
    //(a(n) = a(n - 1) + letter(n) + a(n - 1))
    if (num <= 0) return '';                    //number in 36 form
    return `${abacabaPattern(num - 1)}${(num + 9).toString(36)}${abacabaPattern(num - 1)}`
}

console.log(abacabaPattern(26));
