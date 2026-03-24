const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, max] = input.shift().map(Number);
const array = input.map((i) => i.map(Number));

function solution(N, max, array) {
  const dp = Array(max + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const [w, v] = array[i];

    for (let j = max; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + v);
    }
  }

  return dp[max];
}

console.log(solution(N, max, array));
