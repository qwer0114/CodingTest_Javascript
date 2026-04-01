const { count, dir } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, E] = input.shift().map(Number);
const [v1, v2] = input.pop().map(Number);
const vertex = input.map((i) => i.map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    const top = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return top;
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] < this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  sinkDown() {
    let i = 0;

    while (true) {
      let smallest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (i === smallest) break;

      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function dijkstra(start, N, graph) {
  const dist = Array(N + 1).fill(Infinity);
  const heap = new MinHeap();
  dist[start] = 0;
  heap.push([start, 0]);

  while (heap.size() > 0) {
    const [node, cost] = heap.pop();
    if (cost > dist[node]) continue;

    for (const [next, nextCost] of graph[node]) {
      const newCost = cost + nextCost;
      if (dist[next] > newCost) {
        dist[next] = newCost;
        heap.push([next, newCost]);
      }
    }
  }
  return dist;
}

function solution(N, E, v1, v2, vertex) {
  const graph = Array(N + 1)
    .fill()
    .map(() => []);
  for (const [a, b, w] of vertex) {
    graph[a].push([b, w]);
    graph[b].push([a, w]);
  }

  const d1 = dijkstra(1, N, graph);
  const dv1 = dijkstra(v1, N, graph);
  const dv2 = dijkstra(v2, N, graph);

  const case1 = d1[v1] + dv1[v2] + dv2[N];
  const case2 = d1[v2] + dv2[v1] + dv1[N];

  const answer = Math.min(case1, case2);
  return answer === Infinity ? -1 : answer;
}

console.log(solution(N, E, v1, v2, vertex));
