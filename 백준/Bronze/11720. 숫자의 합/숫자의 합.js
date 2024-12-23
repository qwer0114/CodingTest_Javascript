let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  const array = input[0].split("").map((el) => Number(el));
  const sum = array.reduce((curr, acc) => curr + acc);
  return sum;
}

console.log(solution(input));
