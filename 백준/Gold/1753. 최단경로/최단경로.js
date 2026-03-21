const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [V, E] = input.shift().map(Number);
const K = input.shift().map(Number)[0];
const lines = input.map((i) => i.map(Number));

// 간단한 Min-Heap
class MinHeap {
  constructor() { this.heap = []; }
  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }
  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return top;
  }
  get size() { return this.heap.length; }
  _bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }
  _sinkDown(i) {
    while (true) {
      let smallest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < this.heap.length && this.heap[l][0] < this.heap[smallest][0]) smallest = l;
      if (r < this.heap.length && this.heap[r][0] < this.heap[smallest][0]) smallest = r;
      if (smallest === i) break;
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }
}

function solution(V, E, K, lines) {
  const graph = Array.from({ length: V + 1 }, () => []);
  for (let [u, v, w] of lines) {
    graph[u].push([v, w]);
  }

  const INF = Infinity;
  const dist = Array(V + 1).fill(INF);
  dist[K] = 0;

  const heap = new MinHeap();
  heap.push([0, K]); // [비용, 노드]

  while (heap.size > 0) {
    const [cost, node] = heap.pop();

    // 이미 더 싼 경로로 처리됐으면 스킵
    if (cost > dist[node]) continue;

    for (const [next, weight] of graph[node]) {
      const newCost = cost + weight;
      if (newCost < dist[next]) {
        dist[next] = newCost;
        heap.push([newCost, next]);
      }
    }
  }

  const result = [];
  for (let i = 1; i <= V; i++) {
    result.push(dist[i] === INF ? "INF" : dist[i]);
  }
  return result.join("\n");
}

console.log(solution(V, E, K, lines));
