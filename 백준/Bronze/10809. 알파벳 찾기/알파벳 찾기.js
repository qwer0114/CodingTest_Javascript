let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
function solution(input) {
  const result = [];
  for (let i = 97; i <= 122; i++) {
    result.push(input[0].indexOf(String.fromCharCode(i)));
  }
  return result.join(" ");
}

console.log(solution(input));
