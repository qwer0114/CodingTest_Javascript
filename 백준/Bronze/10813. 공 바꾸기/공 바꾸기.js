let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  const array_length = input.shift().split(" ")[0];
  const array = Array(Number(array_length))
    .fill()
    .map((_element, i) => i + 1);
  input = input.map((element) => element.split(" "));
  input.forEach((element) => {
    const [i, j] = element;
    let swap = array[i - 1];
    array[i - 1] = array[j - 1];
    array[j - 1] = swap;
  });
  return array.join(" ");
}

console.log(solution(input));
