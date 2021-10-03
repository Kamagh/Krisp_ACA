const prob1_age_determiner = (age, str) => {
    switch (true) {
        case str === "months" && age <= 12 && age >= 1 :
            console.log("baby");
            break;
        case str === "age" && age <= 2 && age >= 1 :
            console.log("toddler");
            break;
        case str === "age" && age <= 12 && age >= 3 :
            console.log("child");
            break;
        case str === "age" && age <= 17 && age >= 13 :
            console.log("teenager");
            break;
        case str === "age" && age >= 18 :
            console.log("adult");
            break;
        default:
            console.log(`There is no such age thresholds`)
    }
}

prob1_age_determiner(19,"age");
