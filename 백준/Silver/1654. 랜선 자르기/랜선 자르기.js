const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [K, N] = input.shift().map(Number);
let array = input.map(Number);

function solution(K, N, lines) {
  let answer = 0;
  let rt = Math.max(...lines);
  let lt = 0;

  function cutLine(cm, lines) {
    let sum = 0;
    for (let line of lines) {
      sum += Math.floor(line / cm);
    }
    return sum;
  }

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (cutLine(mid, lines) >= N) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

console.log(solution(K, N, array));
