let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let array = [];
  let [x, y, w, h] = input[0].split(" ").map(Number);
  array.push(y);
  array.push(h - y);
  array.push(x);
  array.push(w - x);
  return Math.min(...array);
}

console.log(solution(input));
