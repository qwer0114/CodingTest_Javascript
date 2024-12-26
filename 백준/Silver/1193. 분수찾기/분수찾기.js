let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
function solution(input) {
  let target = Number(input[0]);
  let line = 1;
  let sum = 0;
  while (sum + line < target) {
    sum += line;
    line++;
  }
  let gap = target - sum;

  if (line % 2 === 0) {
    let numerator = gap;
    let denominator = line - gap + 1;
    return `${numerator}/${denominator}`;
  } else {
    let numerator = line - gap + 1;
    let denominator = gap;
    return `${numerator}/${denominator}`;
  }
}

console.log(solution(input));
