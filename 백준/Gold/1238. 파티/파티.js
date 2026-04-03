const fs = require("fs");
const { start } = require("repl");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M, X] = input.shift().map(Number);
const node = input.map((i) => i.map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    let top = this.heap[0];
    let end = this.heap.pop();

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
      if (this.heap[parent][1] < this.heap[i][1]) break;
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

      if (
        left < this.heap.length &&
        this.heap[left][1] < this.heap[smallest][1]
      )
        smallest = left;
      if (
        right < this.heap.length &&
        this.heap[right][1] < this.heap[smallest][1]
      )
        smallest = right;
      if (smallest === i) break;
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(N, M, X, node) {
  let answer = 0;
  const graph = Array(N + 1)
    .fill()
    .map(() => []);
  const reverseGraph = Array(N + 1)
    .fill()
    .map(() => []);

  for (let [a, b, time] of node) {
    graph[a].push([b, time]);
    reverseGraph[b].push([a, time]);
  }

  function dijkstra(start, graph, N) {
    let heap = new MinHeap();
    heap.push([start, 0]);
    const dist = Array(N + 1).fill(Infinity);
    dist[start] = 0;

    while (heap.size() > 0) {
      let [node, time] = heap.pop();

      if (time > dist[node]) continue;

      for (let [nextNode, coast] of graph[node]) {
        const newTime = time + coast;

        if (newTime < dist[nextNode]) {
          dist[nextNode] = newTime;
          heap.push([nextNode, newTime]);
        }
      }
    }

    return dist;
  }

  const fromX = dijkstra(X, graph, N); // 한 번만

  for (let i = 1; i <= N; i++) {
    const toX = dijkstra(i, graph, N);
    answer = Math.max(answer, toX[X] + fromX[i]);
  }

  return answer;
}

console.log(solution(N, M, X, node));
