let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  input = input.map(Number).sort((a, b) => a - b);
  let sum = input.reduce((acc, cur) => acc + cur);
  let average = sum / input.length;
  let middle = input[Math.floor(input.length / 2)];

  return `${average}\n${middle}`;
}

console.log(solution(input));
