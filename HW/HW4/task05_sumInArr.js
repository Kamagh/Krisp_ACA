function mergeSort(arr) {
    const len = arr.length;
    if (len <= 1) return;
    let mid = Math.floor(len / 2);

    let arr1 = arr.slice(0, mid); //copy first half
    let arr2 = arr.slice(mid, len); //copy second half

    mergeSort(arr1);
    mergeSort(arr2);

    merge(arr1, arr2, arr);
}

function merge(arr1, arr2, arr) {
    let i = 0, j = 0;
    while (i + j < arr.length) {
        if (i === arr1.length || (j < arr2.length && arr2[j] < arr1[i])) {
            arr[i + j] = arr2[j++];
        } else {
            arr[i + j] = arr1[i++];
        }
    }
}


function findSumInArr(arr, target) {
    mergeSort(arr);
    let low = 0;
    let high = arr.length - 1;
    let isPairFound = false

    while (low < high) {
        if (arr[low] + arr[high] === target) {
            console.log(`Pair found (${arr[low]},${arr[high]})`);
            isPairFound = true;
        }
        if (arr[low] + arr[high] > target) {
            high--;
        } else low++;
    }
    if (!isPairFound) {
        console.log('Pair not found')
    }
}

findSumInArr([8, 7, 2, 5, 3, 1], 10);