let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let [A, B] = input[0].split(" ");

  if (
    Number(A.split("").reverse().join("")) >
    Number(B.split("").reverse().join(""))
  ) {
    return A.split("").reverse().join("");
  } else {
    return B.split("").reverse().join("");
  }
}

console.log(solution(input));
