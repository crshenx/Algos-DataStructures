// create a node class
// stores a peice of data
// also stores a reference to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ex. of what the list can look like but dont do this
// var first = new Node("Hi");
// first.next = new Node("how");
// first.next.next = new Node("are");
// first.next.next.next = new Node("you");
// console.log(first);

// define a singly linked list class
// define methods on the class for managing nodes
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) (this.head = newNode), (this.tail = this.head);
    else (this.tail.next = newNode), (this.tail = newNode);
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) (newTail = current), (current = current.next);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) (this.head = null), (this.tail = null);
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) (this.head = null), (this.tail = null);
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) (this.head = newNode), (this.tail = newNode);
    else (newNode.next = this.head), (this.head = newNode);
    this.length++;
    return this;
  }
  get(index) {
    if (index > this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) (current = current.next), counter++;
    return current;
  }
  set(index, val) {
    let replace = this.get(index);
    if (replace) {
      replace.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

let list1 = new singlyLinkedList();
list1.push("Hi");
list1.push("How");
list1.push("Are");
list1.push("You");
console.log(list1);
let list2 = new singlyLinkedList();
console.log(list2);

// let nodeH3 = document.getElementById("singly-linked-list");
// nodeH3.textContent = list.head.val;

// function renderNodes(list) {
//   let li = document.createElement("li");
//   li.textContent = list.traverse();
//   console.log(list.traverse());
//   nodeH3.append(li);
// }

// renderNodes(list);
