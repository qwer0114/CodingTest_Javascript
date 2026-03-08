const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, S] = input[0].map(Number);
let array = input[1].map(Number);

function solution(N, S, array) {
  let rp = 0;
  let lp = 0;
  let sum = 0;

  let answer = Number.MAX_SAFE_INTEGER;

  while (rp <= N) {
    if (sum >= S) {
      answer = Math.min(answer, rp - lp);
      sum -= array[lp++];
    } else {
      sum += array[rp++];
    }
  }
  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}

console.log(solution(N, S, array));
