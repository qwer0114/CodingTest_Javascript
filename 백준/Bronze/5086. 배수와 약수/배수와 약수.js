let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.pop();
function solution(input) {
  let answer = [];
  input = input.map((el) => el.split(" "));
  input.forEach((element) => {
    let [A, B] = element;
    if (Number(A) % Number(B) === 0) {
      answer.push("multiple");
    } else if (Number(B) % Number(A) === 0) {
      answer.push("factor");
    } else answer.push("neither");
  });
  return answer.join("\n");
}

console.log(solution(input));
