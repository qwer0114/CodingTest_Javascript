let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let answer = 0;
  let N = Number(input[0]);

  for (let i = 1; i < N; i++) {
    let sum = i;
    let string = String(i);
    for (let j = 0; j < string.length; j++) {
      sum += Number(string[j]);
    }
    if (sum === N) {
      answer = i;
      return answer;
    }
  }
  return answer;
}

console.log(solution(input));
