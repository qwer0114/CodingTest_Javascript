let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  input = input.map(Number).sort((a, b) => a - b);
  return input.join("\n");
}

console.log(solution(input));
