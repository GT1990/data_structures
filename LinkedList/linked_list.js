class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} // end class Node

class LinkedList {
  /**
   * Constructor creates head, tail, and length properties of the linked list using the number passed in on initialization
   * @param {Number} value
   */
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Prints the Linked List, a string that is a visual representation, to the console
   */
  printList() {
    let current = this.head;
    let linkedList = "";
    while (true) {
      linkedList += `${current.value}`;
      current = current.next;
      if (!current) break;
      linkedList += " -> ";
    }
    console.log(linkedList);
  }

  /**
   * Adds a new node to the head of the Linked List
   * @param {Number} value
   */
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode; // sets head to the newly created node
    this.length++;
  }

  /**
   * Adds a new node to the tail of the Linked List
   * @param {Number} value
   */
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; // references the last element in linkedlist head.next by using the tail.next pointer
    this.tail = newNode; // then changes the tail to the newNode
    this.length++; // updates linkedlist size
  }

  /**
   * Inserts a new node at the index provided
   * @param {Number} index - index where you want to insert new node
   * @param {Number} value - the number you want to insert
   */
  insert(index, value) {
    if (index === 0) {
      // insert to head
      this.prepend(value);
    } else if (index >= this.length) {
      // insert to tail
      this.append(value);
    } else {
      // insert between head and tail
      let prevNode = this.head;
      let nextNode = null;
      for (let i = 0; i < index; i++) {
        if (i === index - 1) {
          nextNode = prevNode.next;
          const newNode = new Node(value);
          prevNode.next = newNode;
          newNode.next = nextNode;
        } else {
          prevNode = prevNode.next;
        }
      }
    }
  }

  /**
   * Removes a node at the index provided
   * @param {Number} index - the index of the node that is to be deleted
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      console.log("The index ", index, " does not exist.");
      return;
    }
    let prevNode = this.head;
    let nextNode = null;

    for (let i = 0; i < index; i++) {
      if (i === index - 1) {
        nextNode = prevNode.next.next;
        prevNode.next = nextNode;
      } else {
        prevNode = prevNode.next;
      }
    }
  }

  reverse() {
    const array = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    let reversedLinkedList;
    for (let i = this.length - 1; i >= 0; i--) {
      if (i === this.length - 1) {
        reversedLinkedList = array[i];
        reversedLinkedList.next = array[i - 1];
        this.head = reversedLinkedList;
      } else if (i === 0) {
        reversedLinkedList = array[i];
        reversedLinkedList.next = null;
        this.tail = reversedLinkedList;
      } else {
        reversedLinkedList = array[i];
        reversedLinkedList.next = array[i - 1];
      }
    }
  }

  reverse2() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    first.next = null;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
} // end class LinkedList

const myLinkedList = new LinkedList(3);
myLinkedList.append(7);
myLinkedList.prepend(1);
myLinkedList.insert(3, 9);
myLinkedList.printList();
// myLinkedList.remove(3);
myLinkedList.printList();
myLinkedList.reverse2();
myLinkedList.printList();
console.log("LinkedList Length: ", myLinkedList.length);
console.log("LinkedList Head: ", myLinkedList.head.value);
console.log("LinkedList Tail: ", myLinkedList.tail.value);
