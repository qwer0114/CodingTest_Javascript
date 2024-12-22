let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let answer = [];
  let max = Math.max(...input);
  answer.push(max);
  answer.push(input.indexOf(String(max)) + 1);
  return answer.join("\n");
}

console.log(solution(input));
