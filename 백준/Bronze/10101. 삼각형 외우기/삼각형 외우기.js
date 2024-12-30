let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  input = input.map(Number);
  let set = new Set(input);
  let sum = input.reduce((acc, cur) => acc + cur);
  if (sum !== 180) return "Error";
  if (set.size === 1) return "Equilateral";
  if (set.size === 2) return "Isosceles";
  else return "Scalene";
}

console.log(solution(input));
