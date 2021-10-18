function slice(arr, start = 0, end = arr.length) {
    if (start >= arr.length) return "Invalid Index";
    else if (end > arr.length) return "Invalid Index";
    const res = [];
    for (let i = start; i < end; i++) {
        res.push(arr[i]);
    }
    return res;
}

let arr1 = [1, 2, 3, 4, 5]
console.log(slice(arr1, 2, 43));

function splice(arr, start, delCount, ...items) {
    const firstPart = slice(arr, 0, start);
    const secondPart = slice(arr, start + delCount)
    const removedEl = slice(arr, start, start + delCount);

    const joinedPart = firstPart.concat(items, secondPart);
    const size = joinedPart.length;

    for (let i = 0; i < size; i++) {
        arr[i] = joinedPart[i];
    }
    arr.length = size;

    return removedEl;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

/*console.log(splice(arr, 2,2,0,0,0,0,0));
console.log(arr);*/

function find(arr, cb) {
    const size = arr.length;

    for (let i = 0; i < size; i++) {
        const val = arr[i];
        if (cb(val)) return arr[i];
    }
    return undefined;
}

console.log(find(arr, el => el > 5));

function map(arr, cb) {
    const res = [];
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        const val = arr[i];
        res.push(cb(val))
    }
    return res;
}

console.log(map(arr, el => el + 1));

function filter(arr, cb) {
    const res = [];
    const size = arr.length
    for (let i = 0; i < size; i++) {
        const val = arr[i];
        if (cb(val)) res.push(val);
    }
    return res;
}

console.log(filter(arr, el => el % 2 === 0));

function every(arr, cb) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if (!cb(arr[i])) return false;
    }
    return true;
}

console.log(every(arr, el => el > 0));

function some(arr, cb) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if (cb(arr[i])) return true
    }
    return false
}

console.log(some(arr, el => el > 1));

function reduce(arr, cb, initVal) {
    const size = arr.length;
    let acc = initVal;
    let i = 0;
    if (initVal === undefined) {
        acc = arr[0];
        i = 1;
    }
    for (i = 0; i < size; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}

console.log(reduce(arr, (el, sum) => {
    return sum += el
}, 0));

