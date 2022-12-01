class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  // inserts a value
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (!current.right) {
        current.right = newNode;
        return this;
      }
      current = current.right;
    }
  }
  // returns the node which val is at
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else found = true;
    }
    if (!found) return undefined;
    return current;
  }
  // returns an array of all values in tree
  // traverses the tree by using a que
  breadthFirst() {
    let node = this.root;
    let data = [];
    let que = [];
    que.push(node);
    while (que.length) {
      node = que.shift();
      data.push(node.val);
      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
    }
    return data;
  }
  // recursively traverse the tree
  // add val to array as we traverse
  depthFirstPre() {
    let data = [];
    function helper(node) {
      data.push(node.val);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return data;
  }
  // recursively travers
  // add val to data after touching node
  depthFirstPost() {
    let data = [];
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      data.push(node.val);
    }
    helper(this.root);
    return data;
  }
  // Traverse the tree
  // return vals in order
  inOrder() {
    let data = [];
    function helper(node) {
      node.left && helper(node.left);
      data.push(node.val);
      node.right && helper(node.right);
    }
    helper(this.root);
    return data;
  }
}

let tree = new BinaryTree();
function populate(n) {
  for (let i = 0; i < n; i++) {
    tree.insert(Math.floor(Math.random() * (n - i) + i));
  }
}
populate(50);
let breadthArr = tree.breadthFirst();
let depthArr = tree.depthFirstPre().sort((a, b) => a - b);

console.log(tree);
console.log(breadthArr);
console.log(depthArr);
