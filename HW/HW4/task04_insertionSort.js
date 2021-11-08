function insertionSort(arr, start = 1, length = arr.length) {
    if (start === length) return;
    if (start > 0 && arr[start] < arr[start - 1]) {
        let temp = arr[start];
        arr[start] = arr[start - 1];
        arr[start - 1] = temp;
        insertionSort(arr, start - 1, length);
    }
    insertionSort(arr, start + 1, length);
}

let arr = [4, 3, 67, 12, 3];
console.log(arr);
insertionSort(arr);
console.log(arr);