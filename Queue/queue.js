class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  printQueue() {
    let visualQueue = "FIRST: ";
    let currentNode = this.first;
    for (let i = 0; i < this.length; i++) {
      visualQueue += `${currentNode.value}`;
      if (i !== this.length - 1) {
        visualQueue += " <- ";
      } else {
        visualQueue += " :LAST";
      }
      if (currentNode.next) {
        currentNode = currentNode.next;
      }
    }
    console.log(visualQueue);
  }

  peak() {
    console.log("First: ", this.first.value);
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
  }

  dequeue() {
    if (!this.length) {
      console.log("The Queue is Empty.");
    } else if (this.length === 1) {
      console.log("Dequeued: ", this.first.value);
      this.first = null;
      this.length--;
    } else {
      console.log("Dequeued: ", this.first.value);
      this.first = this.first.next;
    }
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Adam");
myQueue.enqueue("Bob");
myQueue.enqueue("Carol");
myQueue.enqueue("David");
myQueue.enqueue("Edward");
myQueue.enqueue("Frank");
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
