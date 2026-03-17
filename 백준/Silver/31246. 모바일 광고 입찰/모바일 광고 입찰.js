const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, K] = input.shift().map(Number);
const prices = input.map((i) => i.map(Number));

function solution(N, K, prices) {
  const needed = prices
    .map(([a, b]) => Math.max(0, b - a))
    .sort((a, b) => a - b);

  return needed[K - 1];
}

console.log(solution(N, K, prices));
