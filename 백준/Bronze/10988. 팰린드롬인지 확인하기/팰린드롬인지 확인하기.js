let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let string = input[0];
  let reverseString = string.split("").reverse().join("");
  if (string === reverseString) return 1;
  return 0;
}

console.log(solution(input));
