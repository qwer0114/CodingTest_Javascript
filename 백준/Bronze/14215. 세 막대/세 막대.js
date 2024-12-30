let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  input = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (input[2] >= input[0] + input[1]) {
    return input[0] + input[1] + (input[0] + input[1] - 1);
  } else {
    return input[0] + input[1] + input[2];
  }
}

console.log(solution(input));
