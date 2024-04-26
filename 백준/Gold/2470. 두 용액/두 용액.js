const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
let numbers = input[1]
  .split(" ")
  .map((n) => Number(n))
  .sort((a, b) => b - a);
let start = 0;
let end = numbers.length - 1;
let sum = Number.MAX_SAFE_INTEGER;
let answer = [];
while (start !== end) {
  let tempSum = numbers[end] + numbers[start];
  if (Math.abs(sum) >= Math.abs(tempSum)) {
    sum = tempSum;
    answer[0] = numbers[end];
    answer[1] = numbers[start];
  }
  if (tempSum > 0) {
    start++;
  } else {
    end--;
  }
}
console.log(...answer);
