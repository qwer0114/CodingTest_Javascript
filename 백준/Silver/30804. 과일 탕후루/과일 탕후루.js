const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N] = input.shift().map(Number);
let fruits = input[0].map(Number);

function solution(N, fruits) {
  let left = 0;

  let answer = 0;
  let fruitsMap = new Map();

  for (let right = 0; right < N; right++) {
    let currentFruit = fruits[right];
    fruitsMap.set(currentFruit, (fruitsMap.get(currentFruit) || 0) + 1);

    while (fruitsMap.size > 2) {
      const leftFruit = fruits[left];
      fruitsMap.set(leftFruit, fruitsMap.get(leftFruit) - 1);
      if (fruitsMap.get(leftFruit) === 0) {
        fruitsMap.delete(leftFruit);
      }
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

console.log(solution(N, fruits));
