const sumOfArr = (arr) => {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
        newArr.push(sum);
        sum = 0;
    }
    return newArr;
}

console.log(sumOfArr([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(sumOfArr([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,
    -1]]));