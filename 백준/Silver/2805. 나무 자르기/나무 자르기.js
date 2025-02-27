const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N, M] = input.shift().map(Number);
const trees = input.map((i) => i.map(Number))[0];

function solution(N, M, trees) {
  let left = 0;
  let right = Math.max(...trees);
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;

    for (let i = 0; i < trees.length; i++) {
      if (trees[i] > mid) {
        sum += trees[i] - mid;
      }
    }

    if (sum >= M) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(solution(N, M, trees));
