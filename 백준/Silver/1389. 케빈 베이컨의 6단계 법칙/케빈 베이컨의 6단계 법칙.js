const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N, M] = input.shift().map(Number);
const relationship = input.map((i) => i.map(Number));
function solution(N, M, relationship) {
  const graph = Array(N + 1)
    .fill()
    .map(() => []);

  let answer = Array(N).fill(0);

  for (let [a, b] of relationship) {
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= N; i++) {
    let visited = Array(N + 1).fill(false);
    let queue = [[i, 0]];
    visited[i] = true;
    while (queue.length > 0) {
      let [friend, line] = queue.shift();
      answer[i - 1] += line;
      for (let next of graph[friend]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, line + 1]);
        }
      }
    }
  }

  return answer.indexOf(Math.min(...answer)) + 1;
}

console.log(solution(N, M, relationship));
