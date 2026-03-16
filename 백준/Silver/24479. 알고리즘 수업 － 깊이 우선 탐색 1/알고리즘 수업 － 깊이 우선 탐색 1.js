const { count } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M, R] = input.shift().map(Number);
const lines = input.map((i) => i.map(Number));

function solution(N, M, R, lines) {
  const graph = Array(N + 1)
    .fill()
    .map(() => []);

  const visited = Array(N + 1).fill(false);
  const answer = Array(N + 1).fill(0);

  for (let [a, b] of lines) {
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
  }
  let count = 0;

  function dfs(v) {
    answer[v] = ++count;
    for (let next of graph[v]) {
      if (!visited[next]) {
        visited[next] = true;
        dfs(next);
      }
    }
  }
  visited[R] = true;
  dfs(R);

  return answer.slice(1).join("\n");
}

console.log(solution(N, M, R, lines));
