const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const N = input[0].map(Number)[0];

function solution(N) {
  let answer = 0;
  let p1 = 1;  // 1부터 시작
  let p2 = 1;
  let sum = 1;

  while (p1 <= N) {
    if (sum === N) {
      answer++;
      sum -= p1;
      p1++;
    } else if (sum < N) {
      p2++;
      sum += p2;
    } else {
      sum -= p1;
      p1++;
    }
  }

  return answer;
}

console.log(solution(N));