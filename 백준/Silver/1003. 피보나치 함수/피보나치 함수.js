const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

input.shift();
const cases = input.map((i) => Number(i[0]));

function solution(cases) {
  const dp = [];
  const answer = [];

  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let c of cases) {
    for (let i = 2; i <= c; i++) {
      if (dp[i]) continue;
      dp[i] = [dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]];
    }
    answer.push(dp[c].join(" "));
  }

  return answer.join("\n");
}

console.log(solution(cases));
