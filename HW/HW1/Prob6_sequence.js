const seqCalc = (l) => {
    let sum = 0;
    let k = 0;
    let n = 1;
    while(k < l){
        sum += Math.pow(-1,k) * (1/n);
        k++;
        n += 2
    }
    return sum;
}

console.log(seqCalc(3));