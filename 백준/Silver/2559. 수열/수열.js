const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, K] = input.shift().map(Number);
const numbers = input.shift().map(Number);

function solution(N, K, numbers) {
  const sums = [];
  let sum = 0;

  for (let i = 0; i < K; i++) {
    sum += numbers[i];
    sums[0] = sum;
  }

  for (let i = 1; i <= numbers.length - K; i++) {
    sums[i] = sums[i - 1] - numbers[i - 1] + numbers[i + K - 1];
  }

  return Math.max(...sums);
}

console.log(solution(N, K, numbers));
