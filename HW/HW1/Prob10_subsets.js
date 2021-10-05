const subset = (array) => {
        let smallArr = [];
       let bigArr = [];
       if (array.length <= 3){
           return array;
       }
      for (let i = 0; i <= array.length-3; i++){
           for (let j = i+1; j <= array.length - 2; j++){
               for (let k = j+1; k <= array.length - 1; k++){
                   smallArr.push(array[i]);
                   smallArr.push(array[j]);
                   smallArr.push(array[k]);
                   bigArr.push(smallArr);
                   smallArr = [];
               }
           }
       }
      return bigArr;
   /* let i = 0;
    let j = 1;
    let k = 2;
    let bigArr = [];
    while(i <= array.length - 3){
        let smallArr = [3];
        if (k <= array.length - 1) {
            smallArr.push(array[i]);
            smallArr.push(array[j]);
            smallArr.push(array[k++]);
            bigArr.push(smallArr);

        }else if(j <= array.length - 1){
            smallArr.push(array[i]);
            smallArr.push(array[j++]);
            smallArr.push(array[k]);
            bigArr.push(smallArr);

        }else{
            smallArr.push(array[i++]);
            smallArr.push(array[j]);
            smallArr.push(array[k]);
            bigArr.push(smallArr);
        }
    }
    return bigArr;*/
}

console.log(subset([5, 9, 23, 0, -2, -1]));