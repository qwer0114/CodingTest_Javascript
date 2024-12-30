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
  input = input.map(Number);

  input.forEach((element) => {
    let array = [1];
    let sum = 1;
    for (let i = 2; i < element; i++) {
      if (element % i === 0) {
        array.push(i);
        sum += i;
      }
    }

    if (element === sum) answer.push(`${element} = ${array.join(" + ")}`);
    else answer.push(`${element} is NOT perfect.`);
  });
  return answer.join("\n");
}

console.log(solution(input));
