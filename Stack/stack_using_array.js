/**
 * This is a class representation of a Stack Data Structure.
 * First in Last out.
 * The stack is implemented using an array under the hood.
 */
class Stack {
  // creates a empty stack array when a new instance is created
  constructor() {
    this.stack = [];
  }

  /**
   * this method prints out a string that logs the stack visualy in the console
   */
  printStack() {
    let visualStack = "\nTOP\n-------\n";
    for (let i = this.stack.length - 1; i >= 0; i--) {
      visualStack += `${this.stack[i]}\n`;
      if (!i) {
        visualStack += "-------\nBOTTOM\n";
      }
    }
    console.log(visualStack);
  }

  /**
   * the peak method console logs the item on the top of the stack
   * the last item added to the stack
   */
  peak() {
    if (this.stack.length) {
      console.log("PEAK: ", this.stack[this.stack.length - 1]);
    } else {
      console.log("The Stack is Empty");
    }
  }

  /**
   * the push method takes in a number and adds it to the top of the stack
   * @param {Number} value
   */
  push(value) {
    this.stack.push(value);
  }

  /**
   * the pop method removes the last item added, from the top of the stack
   * and console logs the item that was deleted
   */
  pop() {
    if (this.stack.length) {
      const deleted = this.stack.pop();
      console.log("POPPED: ", deleted);
    } else {
      console.log("The Stack is Empty");
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
