let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  input = input[0].split(" ").map(Number);
  let max = Math.max(...input);
  let min = Math.min(...input);
  return max * min;
}

console.log(solution(input));
