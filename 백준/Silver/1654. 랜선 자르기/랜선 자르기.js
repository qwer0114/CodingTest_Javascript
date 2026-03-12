const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [K, N] = input.shift().map(Number);
const lines = input.map((i) => Number(i[0])).sort((a, b) => a - b);

function solution(K, N, lines) {
  let min = 1;
  let max = lines[lines.length - 1];
  let answer = 0;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let count = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

    if (count >= N) {
      answer = Math.max(answer, mid);
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return answer;
}

console.log(solution(K, N, lines));
