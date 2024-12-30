let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let x = [];
  let y = [];
  input = input.map((el) => el.split(" "));

  input.forEach((element) => {
    let [X, Y] = element;
    x.push(X);
    y.push(Y);
  });

  let resultX = x[0];
  if (x[0] === x[1]) resultX = x[2];
  if (x[0] === x[2]) resultX = x[1];

  let resultY = y[0];
  if (y[0] === y[1]) resultY = y[2];
  if (y[0] === y[2]) resultY = y[1];

  return `${resultX} ${resultY}`;
}

console.log(solution(input));
