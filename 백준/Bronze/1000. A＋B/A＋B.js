const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
let array = input[0].split(" ");
console.log(Number(array[0]) + Number(array[1]));
