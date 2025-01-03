let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let answer = [];
  input = input.map((i) => i.split(" "));
  input.forEach((element) => {
    let [A, B] = element;
    answer.push((A * B) / getGCD(A, B));
  });
  return answer.join("");
}

function getGCD(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(solution(input));
