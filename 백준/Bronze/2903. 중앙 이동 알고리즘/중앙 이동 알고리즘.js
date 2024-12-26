let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
function solution(input) {
  let answer = 2;
  input = Number(input[0]);
  for (let i = 0; i < input; i++) {
    answer = answer * 2 - 1;
  }
  return answer * answer;
}

console.log(solution(input));
