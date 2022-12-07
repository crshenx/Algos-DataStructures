// this is an undirected graph
// the edges go both ways
// they are not directed one way

class Graph {
  constructor() {
    // this is the list of adjecent ndoes
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  // accepts two vertexs
  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    if (this.adjList[v2]) {
      this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
    }
    if (this.adjList[v2]) {
      this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
    }
  }
  removeVertex(v) {
    while (this.adjList[v].length) {
      const adjVert = this.adjList[v].pop();
      console.log(adjVert);
      this.removeEdge(v, adjVert);
    }
    delete this.adjList[v];
  }
  depthSearchRecursive(start) {
    let result = [];
    let visited = {};
    let adjecencyList = this.adjList;
    function recursiveHelper(v) {
      if (!v) return null;
      visited[v] = true;
      result.push(v);
      adjecencyList[v].forEach((neighbor) => {
        console.log(`result ${result}, visited ${visited[v]}`);
        if (!visited[neighbor]) return recursiveHelper(neighbor);
      });
    }
    recursiveHelper(start);
    return result;
  }
  depthSearchIterative(start) {
    let result = [];
    let visited = { start: true };
    let stack = [start];
    while (stack.length) {
      console.log(stack);
      let currentV = stack.pop();
      result.push(currentV);
      this.adjList[currentV].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(start) {
    const q = [start];
    const result = [];
    const visited = {};
    let currentV;
    while (q.length) {
      currentV = q.shift();
      result.push(currentV);
      this.adjList[currentV].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          q.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);
console.log(g.breadthFirst("A"));
