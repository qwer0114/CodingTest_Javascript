let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let answer = 0;
  const string = input[0];
  const dial = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
  };
  for (let i = 0; i < string.length; i++) {
    for (key in dial) {
      if (key.includes(string[i])) {
        answer += dial[key];
      }
    }
  }
  return answer;
}

console.log(solution(input));
