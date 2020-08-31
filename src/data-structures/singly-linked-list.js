// @ts-nocheck

class LinkNode {
  /**
   * @param {string | number} val Stores a piece of data
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /**
   * Adds a new node into the end of List
   * @param {string | number} val Value
   * @returns {SinglyLinkedList} this
   */
  push(val) {
    const newNode = new LinkNode(val);

    // If first item, set both head and tail to same node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }
  /**
   * Removes a node from the end of the List
   * @returns {LinkNode | undefined} Node
   */
  pop() {
    if (!this.head) {
      return undefined;
    }
    // Begin with head node
    let current = this.head;
    let newTail = current;

    // Iterate through the nodes
    while (current.next != null) {
      // New tail node should be lagging 1 node behind
      newTail = current;
      // Move current node forward
      current = current.next;
    }
    // Assign new tail node
    this.tail = newTail;
    // Delete old tail node
    this.tail.next = null;
    // Decrease Length
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  /**
   * Removes a node from the start of the List
   * @returns {LinkNode | undefined} Node
   */
  shift() {
    if (!this.head) {
      return undefined;
    }
    const currentHead = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }
  /**
   * Adds a new node into the start of List
   * @param {string | number} val Value
   * @returns {SinglyLinkedList} this
   */
  unshift(val) {
    const newNode = new LinkNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Connect new node to start
      newNode.next = this.head;
      // Reassign current head to new node
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }
  /**
   * Retrieve node based on position
   * @param {number} index
   * @returns {LinkNode | undefined} Node
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count += 1;
    }
    return current;
  }
  /**
   * Update node based on position
   * @param {number} index
   * @param {string | number} val
   * @returns {boolean} true/false
   */
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  /**
   * Adds a new node based on position
   * @param {number} index
   * @param {string | number} val
   * @returns {boolean} true/false
   */
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    const newNode = new LinkNode(val);
    const prevNode = this.get(index - 1);
    const tempNode = prevNode.next;
    newNode.next = tempNode;
    prevNode.next = newNode;
    this.length += 1;
    return true;
  }
  /**
   * Removes a node from based on position
   * @param {number} index
   * @returns
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return !!this.pop();
    }
    if (index === 0) {
      return !!this.shift();
    }
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length -= 1;
    return removedNode;
  }
  /**
   * Reverse linked list in place
   */
  reverse() {
    // Swap the head and tail nodes
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let nextNode;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      // Next is just a temp var to hold the pointer of next node
      nextNode = node.next;
      // Flip the node connection around
      node.next = prevNode;
      // Assign previous pointer node to current node
      prevNode = node;
      // Assign current node pointer to the next node
      node = nextNode;
    }
    this.print();
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

// Push
list.push(100);
list.push(200);
list.push(250);
list.push(350);
// Pop
list.pop();
// Shift
list.shift();
// Unshift
list.unshift(15);
// Get
console.log(list.get(1));
// Set
list.set(1, "Second");
// Insert
list.insert(0, 5);
list.insert(5, 400);
list.insert(1, 30);
list.insert(-2, "asd");
// Remove
list.remove(3);
// Reverse
list.reverse();
