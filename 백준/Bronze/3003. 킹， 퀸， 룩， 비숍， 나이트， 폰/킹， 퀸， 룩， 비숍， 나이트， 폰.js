let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  const answer = [];
  const chess = [1, 1, 2, 2, 2, 8];
  input.forEach((element, index) => {
    answer.push(chess[index] - element);
  });
  return answer.join(" ");
}

console.log(solution(input));
