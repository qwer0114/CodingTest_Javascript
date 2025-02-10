const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

function solution(input) {
  let [N, M, R] = input.shift().map(Number);
  let answer = Array(N + 1).fill(0);
  let count = 0;
  let graph = Array(N + 1)
    .fill()
    .map(() => []);
  let check = Array(N + 1).fill(false);
  for (let [a, b] of input) {
    graph[Number(a)].push(Number(b));
    graph[Number(b)].push(Number(a));
  }

  for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
  }

  function dfs(v) {
    check[v] = true;
    answer[v] = ++count;
    for (let next of graph[v]) {
      if (!check[next]) {
        dfs(next);
      }
    }
  }

  dfs(R);

  return answer.slice(1).join("\n");
}

console.log(solution(input)); // 실행
