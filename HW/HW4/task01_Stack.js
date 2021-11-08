class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
        //this.top = -1;
    }

    push(element) {
        //this.items.push(element)
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if (this.count === 0) return undefined;
        //let deleteItem = this.items[this.count - 1];
        let deleteItem = this.items.pop();
        this.count--;
        return deleteItem;
    }

    peek() {
        //if (this.count === 0) return undefined;
        return this.items[this.count - 1];
    }

    length() {
        return this.count;
    }

    // search method finds the first occurrence of the
    // given element in the array and returns its index
    // or undefined if there s no such element

    search(element) {
        let found = this.items.find((el) => el === element);
        if (found) {
            return this.items.indexOf(found);
        } else {
            return undefined;
        }
    }

    isEmpty(){
        return this.count === 0;
    }

    print() {
        console.log(this.items);
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.print();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print();
console.log(stack.length());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.peek());
console.log(stack.length());
stack.print();
console.log(stack.search(3));
console.log(stack.search(1));
console.log(stack.search('a'));
console.log(stack.isEmpty());

