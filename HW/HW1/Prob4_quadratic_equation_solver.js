const prob4_quadratic_equation_solver = (a, b, c) => {
    if (a === 0) return "Enter valid constants";
    else if((Math.pow(b,2) - 4*a*c) < 0) return "Solution does not exist"
    else{
        let d = (Math.pow(b,2) - 4*a*c);
        if (d === 0){
            x = -b/2*a
            return `Solutions are ${x}`
        }
        let x1 = (-b - Math.sqrt(d))/(2*a);
        let x2 = (-b + Math.sqrt(d))/(2*a);
        return `Solutions are ${x1} and ${x2}`;
    }
}

console.log(prob4_quadratic_equation_solver(1, 2, 1));
console.log(prob4_quadratic_equation_solver(0, 4, -5));
console.log(prob4_quadratic_equation_solver(3, -8, 12));
console.log(prob4_quadratic_equation_solver(5, -13, 6));