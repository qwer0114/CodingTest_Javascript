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
  input = input[0].split(" ").map(Number);
  input.forEach((element) => {
    if (element === 1) {
      answer.push(1);
      return;
    }
    for (let i = 2; i < element; i++) {
      if (element % i === 0) {
        answer.push(1);
        return;
      }
    }
  });

  return input.length - answer.length;
}

console.log(solution(input));
