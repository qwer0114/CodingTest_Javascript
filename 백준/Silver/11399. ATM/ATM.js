const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

input.shift();
const P = input[0].map(Number);

function solution(P) {
  const sort = P.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < sort.length; i++) {
    for (let j = i; j >= 0; j--) {
      answer += sort[j];
    }
  }

  return answer;
}

console.log(solution(P));
