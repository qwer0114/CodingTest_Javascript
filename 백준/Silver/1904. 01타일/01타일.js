const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N] = input[0].map(Number);

function solution(N) {
  const dp = [1, 2];

  for (let i = 2; i < N; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
  }

  return dp[N - 1];
}

console.log(solution(N)); // 실행
