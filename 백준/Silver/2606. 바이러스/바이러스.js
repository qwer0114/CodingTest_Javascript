const { count } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const N = input.shift().map(Number)[0];
input.shift();
const computers = input.map((i) => i.map(Number));

function solution(N, computers) {
  let answer = 0;
  const graph = Array(N + 1)
    .fill()
    .map(() => []);

  const visited = Array(N + 1).fill(false);

  for (let [a, b] of computers) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(v) {
    for (let next of graph[v]) {
      if (!visited[next]) {
        visited[next] = true;
        answer++;
        dfs(next);
      }
    }
  }
  visited[1] = true;
  dfs(1);

  return answer;
}

console.log(solution(N, computers));
