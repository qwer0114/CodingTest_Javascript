let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
function solution(input) {
  let [A, B, V] = input[0].split(" ").map(Number);

  let days = Math.ceil((V - A) / (A - B)) + 1;

  if (A >= V) return 1;

  return days;
}

console.log(solution(input));
