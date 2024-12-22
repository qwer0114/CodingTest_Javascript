let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let answer = [];
  let set = new Set(input);

  for (let i = 1; i <= 30; i++) {
    if (!set.has(String(i))) answer.push(i);
  }
  return answer.join("\n");
}

console.log(solution(input));
