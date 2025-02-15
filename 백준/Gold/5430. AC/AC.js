const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const T = Number(input[0]);
let currentLine = 1;

for (let t = 0; t < T; t++) {
  const p = input[currentLine][0];
  const n = Number(input[currentLine + 1]);

  const arr = JSON.parse(input[currentLine + 2][0]);

  console.log(solution(p, n, arr));

  currentLine += 3;
}

function solution(p, n, arr) {
  let isReverse = false;
  for (let command of p) {
    if (command === "R") {
      isReverse = !isReverse;
    } else if (command === "D") {
      if (arr.length === 0) return "error";
      if (isReverse) arr.pop();
      else arr.shift();
    }
  }
  return isReverse ? JSON.stringify(arr.reverse()) : JSON.stringify(arr);
}

// console.log(solution(M, N));
