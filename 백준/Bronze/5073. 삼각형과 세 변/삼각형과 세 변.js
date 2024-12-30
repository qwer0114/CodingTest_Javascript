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
  input.forEach((element) => {
    let array = element.split(" ").sort((a, b) => a - b);

    if (Number(array[2]) >= Number(array[0]) + Number(array[1])) {
      answer.push("Invalid");
      return;
    }

    let set = new Set(array);
    if (set.size === 1) {
      answer.push("Equilateral");
    }
    if (set.size === 2) {
      answer.push("Isosceles ");
    }
    if (set.size === 3) {
      answer.push("Scalene");
    }
  });
  return answer.join("\n");
}

console.log(solution(input));
