const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line.trim().split("\n");
let number = Number(input[0]);

console.log(number * (number - 1));
