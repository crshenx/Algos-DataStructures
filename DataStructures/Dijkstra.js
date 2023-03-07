class PriorityQue {
  constructor() {
    this.val = [];
  }
  enQ(value, priority) {
    this.val.push({ value, priority });
    this.sort();
  }
  deQ() {
    return this.val.shift();
  }
  sort() {
    this.val.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjList[v1].push({ node: v2, weight });
    this.adjList[v2].push({ node: v1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    // INITIAL STATE A TO A = 0 REST INFINIT
    for (let vertex in this.adjList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enQ(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enQ(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // AS LONG AS THERE IS SOMETHING TO VISIT
    while (nodes.val.length) {
      smallest = nodes.deQ().value;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjList[smallest]) {
          let nextNode = this.adjList[smallest][neighbor];

          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating how we got there
            previous[nextNeighbor] = smallest;
            // enqueue in priority que with new priority
            nodes.enQ(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
// console.log(g.Dijkstra("A", "E"));
// console.log(g.Dijkstra("A", "D"));

// console.log(g.Dijkstra("A", "E"));
x = 10 % 3;
console.log(x);
