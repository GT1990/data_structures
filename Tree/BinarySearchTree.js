class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  printTree() {
    function traverse(node) {
      const tree = { value: node.value };
      tree.left = node.left === null ? null : traverse(node.left);
      tree.right = node.right === null ? null : traverse(node.right);
      return tree;
    }
    console.log(JSON.stringify(traverse(this.root)));
  }

  insert(value) {
    function traverseTreeRecursivly(num, root, newNode) {
      // console.log("NUM: ", num);
      // console.log("ROOT: ", root);
      // console.log("newNode: ", newNode);

      let currentNode = root;
      if (num < currentNode.value) {
        // go left
        if (currentNode.left !== null) {
          // another node found
          // recurrsion until find null
          traverseTreeRecursivly(num, currentNode.left, newNode);
        } else {
          currentNode.left = newNode;
        }
      } else {
        // go right
        if (currentNode.right) {
          // another node found
          // recurrsion until find null
          traverseTreeRecursivly(num, currentNode.right, newNode);
        } else {
          currentNode.right = newNode;
        }
      }
      return;
    } // end traverseTreeRecursivly
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      traverseTreeRecursivly(value, this.root, newNode);
    }
  }
  lookup(value) {
    if (!this.root) {
      console.log("The Tree is EMPTY!");
    } else {
      function traverse(node) {
        if (value === node.value) {
          console.log(`${value} exists in Tree`);
        } else if (value < node.value) {
          // go left
          if (node.left) {
            traverse(node.left);
          } else {
            console.log(`${value} does NOT exist in Tree.`);
          }
        } else {
          // go right
          if (node.right) {
            traverse(node.right);
          } else {
            console.log(`${value} does NOT exist in Tree.`);
          }
        }
      }
      traverse(this.root);
    }
  }
  remove(value) {}
}

const myTree = new BinarySearchTree();
myTree.insert(5);
myTree.insert(2);
myTree.insert(1);
myTree.insert(4);
myTree.insert(3);
myTree.insert(8);
myTree.insert(7);
myTree.insert(9);
myTree.insert(6);
myTree.lookup(7); // exists
myTree.lookup(0); // does not exist
// myTree.printTree();
