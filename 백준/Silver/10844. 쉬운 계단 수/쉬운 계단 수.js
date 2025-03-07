const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N] = input.shift();
const triangle = input.map((i) => i.map(Number));

function solution(N) {
  const dp = Array(N + 1)
    .fill()
    .map(() => Array(10).fill([]));
  const MOD = 1000000000;
  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][1];
      } else if (j === 9) {
        dp[i][j] = dp[i - 1][8];
      } else {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
      }
    }
  }
  let answer = 0;
  for (let j = 0; j <= 9; j++) {
    answer = (answer + dp[N][j]) % MOD;
  }

  return answer;
}

console.log(solution(Number(N)));
