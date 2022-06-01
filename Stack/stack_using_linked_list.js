class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  printStack() {
    let currentNode = this.top;
    let visualStack = "\nTOP\n-------\n";
    for (let i = 0; i < this.length; i++) {
      visualStack += `${currentNode.value}\n`;
      currentNode = currentNode.next;
      if (i === this.length - 1) {
        visualStack += "-------\nBOTTOM\n";
      }
    }
    console.log(visualStack);
  }

  peak() {
    if (this.length) {
      console.log("PEAK: ", this.top.value);
    } else {
      console.log("The Stack is Empty!");
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const tempNode = this.top;
      this.top = newNode;
      this.top.next = tempNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      console.log("The Stack is Empty!");
    } else if (this.length === 1) {
      console.log("DELETED: ", this.top.value);
      this.top = null;
      this.bottom = null;
      this.length--;
    } else {
      console.log("DELETED: ", this.top.value);
      const tempNode = this.top;
      this.top = tempNode.next;
      this.length--;
    }
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.printStack();
myStack.peak();
myStack.pop();
myStack.pop();
myStack.printStack();
