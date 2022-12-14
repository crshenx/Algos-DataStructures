class MaxBinaryHeap {
  constructor() {
    this.val = [];
  }
  insert(ele) {
    this.val.push(ele);
    this.bubbleUp();
  }
  bubbleUp() {
    let i = this.val.length - 1;
    const ele = this.val[i];
    while (i > 0) {
      let parentI = Math.floor((i - 1) / 2);
      let parent = this.val[parentI];
      if (ele <= parent) break;
      this.val[parentI] = ele;
      this.val[i] = parent;
      i = parentI;
    }
  }
  extractMax() {
    let maxToBeExtracted = this.val[0];
    let end = this.val[this.val.length - 1];
    this.val[0] = end;
    this.val.pop();
    if (this.val.length > 0) this.sinkDown();
    else this.val = [];
    return maxToBeExtracted;
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
        if (leftChild > ele) {
          swap = leftI;
        }
      }
      if (rightI < length) {
        rightChild = this.val[rightI];
        if ((!swap && rightChild > ele) || (swap && rightChild > leftChild)) {
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.val);
console.log(heap.extractMax(), heap.val);
console.log(heap.extractMax(), heap.val);
console.log(heap.extractMax(), heap.val);
console.log(heap.extractMax(), heap.val);
console.log(heap.extractMax(), heap.val);
console.log(heap.extractMax(), heap.val);
console.log(heap.extractMax(), heap.val);
console.log(heap.extractMax(), heap.val);
console.log(heap.extractMax(), heap.val);
