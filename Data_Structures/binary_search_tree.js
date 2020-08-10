class TreeNode {
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
  insert(val) {
    let newNode = new TreeNode(val);

    // Check if root exists
    if (this.root == null) {
      this.root = newNode;
      return this;
    }

    // Set current node
    let current = this.root;

    // Traverse the tree
    while (true) {
      if (val === current.value) {
        return undefined;
      }

      if (val < current.value) {
        // If lesser insert left
        if (current.left == null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        // If greater insert right
        if (current.right == null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  contains(val) {
    if (this.root == null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree);
