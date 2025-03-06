const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N] = input.shift();
const triangle = input.map((i) => i.map(Number));

function solution(N, triangle) {
  const dp = Array(N)
    .fill()
    .map(() => Array(N).fill([]));

  dp[0][0] = triangle[0][0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === i) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }

  return +Math.max(...dp[N - 1]);
}

console.log(solution(Number(N), triangle));
