// these examples of stack and ques are based of the linked list structure
// Node class is used for both examples
//first is the node class and stack
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let first = this.first;
      this.first = newNode;
      this.first.next = first;
    }
    return this.size++;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.val;
  }
}

// Que
class Qeue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqeue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }
}
