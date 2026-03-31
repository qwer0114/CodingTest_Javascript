const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N] = input.shift().map(Number);
const [M] = input.shift().map(Number);
const numbers = input.map((i) => i.map(Number));
const plans = numbers.pop();

function solution(N, M, numbers, plans) {
  let graph = Array(N + 1)
    .fill()
    .map(() => []);

  let visited = Array(N + 1).fill(false);
  visited[plans[0]] = true;
  let queue = [plans[0]];
  let head = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      if (i === j) continue;
      if (numbers[i][j] === 0) continue;
      graph[i + 1].push(j + 1);
    }
  }

  while (head < queue.length) {
    let x = queue[head++];

    for (let nx of graph[x]) {
      if (!visited[nx]) {
        visited[nx] = true;
        queue.push(nx);
      }
    }
  }

  for (const city of plans) {
    if (!visited[city]) {
      return "NO";
    }
  }

  return "YES";
}

console.log(solution(N, M, numbers, plans));
