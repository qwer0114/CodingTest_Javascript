const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const n = Number(input[0]);

function solution(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 3;

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
  }

  return dp[n - 1];
}

console.log(solution(n));
