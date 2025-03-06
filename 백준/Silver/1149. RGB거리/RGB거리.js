const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N] = input.shift();
const cost = input.map((i) => i.map(Number));

function solution(N, cost) {
  const dp = Array(N)
    .fill()
    .map(() => Array(3).fill(0));
  dp[0][0] = cost[0][0];
  dp[0][1] = cost[0][1];
  dp[0][2] = cost[0][2];

  for (let i = 1; i < N; i++) {
    dp[i][0] = cost[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = cost[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = cost[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }
  return Math.min(...dp[N - 1]);
}

console.log(solution(Number(N), cost));
