let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  let answer = [];
  let array = input[0].split(" ").map(Number);
  let map = new Map();
  let set = [...new Set(array)].map(Number).sort((a, b) => a - b);

  set.forEach((element, index) => {
    map.set(element, index);
  });

  array.forEach((element) => {
    answer.push(map.get(element));
  });

  return answer.join(" ");
}

console.log(solution(input));
