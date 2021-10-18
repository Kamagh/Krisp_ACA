//const arr = ['aeioulnrst', 'dg', 'bcmp', 'fhvwy', 'k', 'jx', 'qz'];

const Calcscore = (str) => {
    const arr = ['aeioulnrst', 'dg', 'bcmp', 'fhvwy', 'k', 'jx', 'qz'];
    let score = 0;
    let k = 0; //arrayindex
    for (let i = 0; i < str.length; i++){
        k = 0;
        for (let j = 0; j <= arr[k].length; j++){ //index of string in array
            const eachstr = arr[k];
            if(str[i] === eachstr[j]){
                score += k+1;
                break;
            }else if (j < arr[k].length) {
                continue;
            }
            k++;
            j = -1;
        }
    }
    return score;
}
console.log(Calcscore('quick'));