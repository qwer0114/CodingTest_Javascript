let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

input.shift();

function solution(input) {
  input = input[0].split(" ").map((el) => Number(el));
  let max = Math.max(...input);
  let array = input.map((el) => (el / max) * 100);
  let sum = array.reduce((acc, cur) => acc + cur);
  return sum / input.length;
}

console.log(solution(input));
