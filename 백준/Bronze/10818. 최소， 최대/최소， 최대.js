let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

input.shift();

function solution(input) {
  let array = input[0].split(" ");

  let answer = [Math.min(...array), Math.max(...array)];

  return answer.join(" ");
}

console.log(solution(input));
