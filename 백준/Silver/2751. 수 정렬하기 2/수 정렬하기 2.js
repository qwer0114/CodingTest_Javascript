let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

function sort(input) {
  let answer = input.sort((a, b) => Number(a) - Number(b));
  return answer;
}

console.log(sort(input).join("\n"));
