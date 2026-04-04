const fs = require("fs");

const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M, K, X] = input.shift().map(Number);
const nodes = input.map((i) => i.map(Number));

function solution(N, M, K, X, nodes) {
  const graph = Array(N + 1)
    .fill()
    .map(() => []);
  for (const [a, b] of nodes) {
    graph[a].push(b);
  }

  const dist = Array(N + 1).fill(-1);
  const queue = [X];
  let head = 0;
  dist[X] = 0;

  while (head < queue.length) {
    const node = queue[head++];
    for (const next of graph[node]) {
      if (dist[next] === -1) {
        dist[next] = dist[node] + 1;
        queue.push(next);
      }
    }
  }

  const answer = [];
  for (let i = 1; i <= N; i++) {
    if (dist[i] === K) answer.push(i);
  }

  return answer.length > 0 ? answer.join("\n") : -1;
}

console.log(solution(N, M, K, X, nodes));
