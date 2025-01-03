let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  let answer = 0;
  const A = new Set(input[0].split(" "));
  const B = new Set(input[1].split(" "));

  A.forEach((value) => {
    if (!B.has(value)) answer += 1;
  });
  B.forEach((value) => {
    if (!A.has(value)) answer += 1;
  });
  return answer;
}

console.log(solution(input));
