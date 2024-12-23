let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  return input.join("\n");
}

console.log(solution(input));
