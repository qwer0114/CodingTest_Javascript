let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  let answer = [];
  input = input.map(Number);
  input.forEach((element) => {
    if (element === 0) {
      answer.pop();
      return;
    }
    answer.push(element);
  });
  if (answer.length === 0) return 0;
  return answer.reduce((acc, cur) => acc + cur);
}

console.log(solution(input));
