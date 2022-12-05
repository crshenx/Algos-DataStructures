class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MinPriorityHeap {
  constructor() {
    this.val = [];
  }
  enQ(val, priority) {
    let newNode = new Node(val, priority);
    this.val.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let i = this.val.length - 1;
    const ele = this.val[i];
    while (i > 0) {
      let parentI = Math.floor((i - 1) / 2);
      let parent = this.val[parentI];
      if (ele.priority >= parent.priority) break;
      this.val[parentI] = ele;
      this.val[i] = parent;
      i = parentI;
    }
  }
  deQ() {
    let min = this.val[0];
    let end = this.val[this.val.length - 1];
    this.val[0] = end;
    this.val.pop();
    if (this.val.length > 0) this.sinkDown();
    else this.val = [];
    return min;
  }
  sinkDown() {
    let i = 0;
    let length = this.val.length;
    let ele = this.val[0];
    while (true) {
      let leftI = 2 * i + 1;
      let rightI = 2 * i + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftI < length) {
        leftChild = this.val[leftI];
        if (leftChild.priority < ele.priority) {
          swap = leftI;
        }
      }
      if (rightI < length) {
        rightChild = this.val[rightI];
        if (
          (!swap && rightChild.priority < ele.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightI;
        }
      }
      if (!swap) break;
      this.val[i] = this.val[swap];
      this.val[swap] = ele;
      i = swap;
    }
  }
}

let q = new MinPriorityHeap();
q.enQ("cold", 5);
q.enQ("shot", 1);
q.enQ("fever", 4);
q.enQ("BROKEN", 2);
q.enQ("GLASS", 3);
console.log(q);
console.log(q.deQ());
console.log(q.deQ());
console.log(q.deQ());
console.log(q.deQ());
console.log(q.deQ());
