function abacabaPattern(num) {
    //(a(n) = a(n - 1) + letter(n) + a(n - 1))
    if (num <= 0) return '';     //number in 36 form
    let recCall = abacabaPattern(num - 1)
    return `${recCall}${(num + 9).toString(36)}${recCall}`
}

console.log(abacabaPattern(3));
