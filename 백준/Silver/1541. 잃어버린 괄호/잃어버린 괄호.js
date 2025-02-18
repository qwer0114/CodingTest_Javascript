const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const expression = input[0][0];

function solution(expression) {
  expression = expression
    .split("-")
    .map((number) => number.split("+"))
    .map((n) => n.reduce((acc, cur) => Number(acc) + Number(cur)))
    .map(Number);

  let answer = expression[0];

  for (let i = 1; i < expression.length; i++) {
    answer = answer - expression[i];
  }
  return answer;
}

console.log(solution(expression));
