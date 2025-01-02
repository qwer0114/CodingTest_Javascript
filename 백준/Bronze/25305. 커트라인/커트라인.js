let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let [A, B] = input.shift().split(" ");

  input = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  return input[B - 1];
}

console.log(solution(input));
