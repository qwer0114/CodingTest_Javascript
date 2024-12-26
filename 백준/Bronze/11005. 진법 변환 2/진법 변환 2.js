let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let [N, B] = input[0].split(" ");
  return Number(N).toString(B).toUpperCase();
}

console.log(solution(input));
