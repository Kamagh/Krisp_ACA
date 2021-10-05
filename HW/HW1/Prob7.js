const valueIndexMatching = (array) => {
    let max = array[0];
    for (let i = 1; i < array.length; i++){
        array[i] > max ? max = array[i] : max;
    }
    let indexarr = [max];
    //array.sort();
    for (let i = 0; i < array.length; i++){
        indexarr[array[i]] = array[i];
    }
    for (let j = 0; j < indexarr.length; j++){
        if (!(indexarr[j])){
            indexarr[j] = undefined;
        }
    }
    return indexarr;
}

let arr = [4, 3, 0, 9,];
let arr1 = [26, 30, 19, 5];

console.log(valueIndexMatching(arr1));

