let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  let x = [];
  let y = [];
  input = input.map((el) => el.split(" "));
  input.forEach((element) => {
    let [X, Y] = element;
    x.push(X);
    y.push(Y);
  });

  let a = Math.max(...x) - Math.min(...x);
  let b = Math.max(...y) - Math.min(...y);

  return a * b;
}

console.log(solution(input));
