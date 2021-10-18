function acronymConverter (str) {
    let newstr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++){
        if (str[i] === " ") newstr+=(str[i+1].toUpperCase());
    }
    return newstr;
}

console.log(acronymConverter("Prisoner of War"));
console.log(acronymConverter("Have a good night"));