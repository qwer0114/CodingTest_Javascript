let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let string = input[0];

  let alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  alpha.forEach((a) => {
    if (string.includes(a)) {
      string = string.replaceAll(a, "?");
    }
  });
  return string.length;
}

console.log(solution(input));
