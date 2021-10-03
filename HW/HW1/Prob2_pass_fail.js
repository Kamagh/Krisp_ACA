const final_grade = (ex1, ex2, ex3) => {
    let average = (ex1 + ex2 + ex3)/3;
    if (ex1 >= 40 && ex2 >= 40 && ex3 >= 40) return "Passed";
    else if (average >= 50 && ((ex1 < 40 && ex2 >= 40 && ex3 >= 40) || (ex1 >= 40 && ex2 < 40 && ex3 >= 40) || (ex1 >= 40 && ex2 >= 40 && ex3 < 40))) return "Passed";
    else return "Not Passed";
}

console.log(final_grade(65, 70, 60));
console.log(final_grade(10, 85, 75));
console.log(final_grade(39, 39, 100));