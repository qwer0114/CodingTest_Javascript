const { count, dir } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M] = input.shift().map(Number);
const numbers = input.map((i) => i.map(Number));

function solution(N, M, numbers) {
  let graph = Array(N + 1)
    .fill()
    .map(() => []);

  let inDegree = Array(N + 1).fill(0);

  let answer = [];

  for (let [a, b] of numbers) {
    graph[a].push(b);
    inDegree[b]++;
  }

  const queue = [];

  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let head = 0;

  while (head < queue.length) {
    const cur = queue[head++];
    answer.push(cur);

    for (const next of graph[cur]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }

  return answer.join(" ");
}
console.log(solution(N, M, numbers));
