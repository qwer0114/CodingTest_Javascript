const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N, M, V] = input.shift().map(Number);
const lines = input;

function solution(N, M, V, lines) {
  let graph = Array(N + 1)
    .fill()
    .map(() => []);
  let visited = Array(N + 1).fill(false);
  for (let i = 0; i < M; i++) {
    const [v1, v2] = lines[i].map(Number);
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  const sortGraph = graph.map((g) => g.sort((a, b) => a - b));
  const dfsResult = [];
  function dfs(vertex) {
    dfsResult.push(vertex);
    for (let next of sortGraph[vertex]) {
      if (!visited[next]) {
        visited[next] = true;
        dfs(next);
      }
    }
  }
  visited[V] = true;
  dfs(V);

  const bfsResult = [];
  const queue = [];
  visited = Array(N + 1).fill(false);
  visited[V] = true;
  queue.push(V);

  while (queue.length > 0) {
    let vertex = queue.shift();
    bfsResult.push(vertex);

    for (let next of sortGraph[vertex]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return `${dfsResult.join(" ")}\n${bfsResult.join(" ")}`;
}

console.log(solution(N, M, V, lines));
