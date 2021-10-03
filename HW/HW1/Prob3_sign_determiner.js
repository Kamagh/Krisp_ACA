const prob3_sign_determiner = (n1, n2, n3) => {
    if(n1 === 0 || n2 === 0 || n3 === 0) return "unsigned";
    else if((n1 < 0 && n2 < 0 && n3 < 0) || (n1 < 0 && n2 > 0 && n3 > 0) || (n1 > 0 && n2 < 0 && n3 > 0) || (n1 > 0 && n2 > 0 && n3 < 0)) return "-";
    else return "+"
}

console.log(prob3_sign_determiner(-14, 5, 0));
console.log(prob3_sign_determiner(-8, 9, -6));
console.log(prob3_sign_determiner(4, 19, -2));