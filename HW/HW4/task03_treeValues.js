const tree = {
    value: 12,
    next: {
        value: 20,
        next: {
            value: 30,
            next: {
                value: -10,
                next: null
            }
        }
    }
};

const fn = (tree, newArr = []) => {
    if (tree == null) return newArr;
    newArr.push(tree.value);
    return fn(tree.next, newArr);
}

console.log(fn(tree)) // [12, 20, 30, -10]

