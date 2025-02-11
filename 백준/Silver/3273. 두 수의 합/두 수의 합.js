const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let n = Number(input[0]);
let array = input[1].map(Number);
let x = input[2];

function solution(n, array, x) {
  let map = new Map();
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], i);
  }

  for (let number of array) {
    let indexA = map.get(number);
    let target = x - number;
    let indexB = map.get(target);
    if (indexB !== undefined && indexA < indexB) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(n, array, x)); // 실행
