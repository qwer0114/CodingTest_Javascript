let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  const array_length = input.shift().split(" ")[0];
  const array = Array(Number(array_length)).fill(0);
  input = input.map((element) => element.split(" "));

  input.forEach((element) => {
    let [start, end, number] = element;
    for (let i = Number(start) - 1; i < Number(end); i++) {
      array[i] = number;
    }
  });
  return array.join(" ");
}

console.log(solution(input));
