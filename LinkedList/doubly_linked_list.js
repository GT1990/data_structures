class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let doublyLinkedList = "";
    let current = this.head;
    while (current) {
      doublyLinkedList += `${current.value}`;
      if (current.next) {
        doublyLinkedList += " <--> ";
      }
      current = current.next;
    }
    console.log(doublyLinkedList);
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index <= 0) {
      // insert at head
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      // checks to see if index is closer to beginning or end
      if (this.length - 1 - index < index) {
        console.log("from tail");
        // traverse from tail
        let prev = null;
        let next = this.tail;
        for (let i = this.length; i > index; i--) {
          if (i === index + 1) {
            newNode.next = next;
            prev = next.prev;
            newNode.prev = prev;
            next.prev = newNode;
            prev.next = newNode;
          } else {
            next = next.prev;
          }
        }
      } else {
        console.log("from head");
        // traverse from head
        let prev = this.head;
        let next = null;
        for (let i = 0; i < index; i++) {
          if (i === index - 1) {
            newNode.prev = prev;
            next = prev.next;
            newNode.next = next;
            prev.next = newNode;
            next.prev = newNode;
          } else {
            prev = prev.next;
          }
        }
      }
    }
  }
  remove(index) {}
}

const myDoublyLinkedList = new DoublyLinkedList(3);
myDoublyLinkedList.printList();
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.printList();
myDoublyLinkedList.append(7);
myDoublyLinkedList.append(8);
myDoublyLinkedList.append(9);
myDoublyLinkedList.printList();
myDoublyLinkedList.insert(4, 0);
myDoublyLinkedList.printList();
