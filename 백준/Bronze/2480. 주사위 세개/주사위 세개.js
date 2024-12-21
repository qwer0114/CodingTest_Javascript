let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  const set = new Set(input);
  const size = set.size;
  if (size === 1) {
    return 10000 + Number(input[0]) * 1000;
  } else if (size === 3) {
    return Number(Math.max(...input)) * 100;
  } else {
    if (input[0] === input[1] || input[0] === input[2]) {
      return 1000 + Number(input[0]) * 100;
    } else {
      return 1000 + Number(input[1]) * 100;
    }
  }
}

console.log(solution(input));
