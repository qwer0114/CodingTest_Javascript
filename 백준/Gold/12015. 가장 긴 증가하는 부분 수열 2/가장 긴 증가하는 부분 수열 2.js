const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [A] = input.shift().map(Number);
const numbers = input.shift().map(Number);

function solution(A, numbers) {
  const tails = [];

  for (const num of numbers) {
    let lo = 0,
      hi = tails.length;

    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (tails[mid] < num) lo = mid + 1;
      else hi = mid;
    }

    tails[lo] = num;
  }

  return tails.length;
}
console.log(solution(A, numbers));
