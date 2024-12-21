let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  let [a, b] = input.split(" ");
  return a * b;
}

console.log(solution(input));
