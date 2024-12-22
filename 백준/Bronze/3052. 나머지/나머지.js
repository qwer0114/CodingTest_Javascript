let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let array = [];

  input.forEach((element) => {
    array.push(Number(element) % 42);
  });
  let set = new Set(array);
  return set.size;
}

console.log(solution(input));
