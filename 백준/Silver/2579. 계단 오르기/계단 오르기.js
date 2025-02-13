const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const N = Number(input.shift());

const stairs = input.map((i) => Number(i[0]));

function solution(n, stairs) {
  const dp = Array.from({ length: n }, () => Array(3).fill(0));
  dp[0][1] = stairs[0];

  if (n > 1) {
    dp[1][1] = stairs[1];
    dp[1][2] = stairs[0] + stairs[1];
  }

  for (let i = 2; i < n; i++) {
    dp[i][1] = Math.max(dp[i - 2][1], dp[i - 2][2]) + stairs[i];
    dp[i][2] = dp[i - 1][1] + stairs[i];
  }

  return Math.max(dp[n - 1][1], dp[n - 1][2]);
}

console.log(solution(N, stairs)); // 실행
