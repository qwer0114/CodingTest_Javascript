let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let array = input[1].split(" ");
  let target = input[0].split(" ")[1];
  let answer = [];

  array.forEach((element) => {
    if (Number(element) < Number(target)) {
      answer.push(element);
    }
  });
  return answer.join(" ");
}

console.log(solution(input));
