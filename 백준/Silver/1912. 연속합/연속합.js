const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
input.shift();
const N = input[0].map(Number);

function solution(N) {
  const dp = Array(N.length).fill();
  dp[0] = N[0];
  let max = dp[0];
  for (let i = 1; i < N.length; i++) {
    dp[i] = Math.max(N[i], N[i] + dp[i - 1]);
    max = Math.max(dp[i], max);
  }
  return max;
}

console.log(solution(N)); // 실행
