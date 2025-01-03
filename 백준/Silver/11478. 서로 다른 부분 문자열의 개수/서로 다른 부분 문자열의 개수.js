let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let array = [];
  let string = input[0];
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      array.push(string.slice(i, j + 1));
    }
  }
  return new Set(array).size;
}

console.log(solution(input));
