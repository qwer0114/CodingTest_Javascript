const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M] = input.shift();
const lines = input;

function solution(N, M, lines) {
  const graph = Array(Number(N) + 1)
    .fill()
    .map(() => []);

  const check = Array(Number(N) + 1)
    .fill()
    .map(() => false);

  let count = 0;

  for (let i = 0; i < M; i++) {
    const [u, v] = lines[i].map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  function dfs(node) {
    check[node] = true;

    for (let nextNode of graph[node]) {
      if (!check[nextNode]) {
        dfs(nextNode);
      }
    }
  }

  for (let i = 1; i <= Number(N); i++) {
    if (!check[i]) {
      dfs(i);
      count += 1;
    }
  }
  return count;
}

console.log(solution(N, M, lines));
