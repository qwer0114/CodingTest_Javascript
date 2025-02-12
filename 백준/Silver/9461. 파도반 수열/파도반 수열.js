const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
input.shift();
const N = input.map(Number);

function solution(N) {
  let answer = [];
  const dp = Array(101);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 2;

  for (let i = 5; i < 101; i++) {
    dp[i] = dp[i - 5] + dp[i - 4] + dp[i - 3];
  }
  for (let i = 0; i < N.length; i++) {
    answer.push(dp[N[i] - 1]);
  }

  return answer.join("\n");
}

console.log(solution(N)); // 실행
