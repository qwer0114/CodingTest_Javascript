const { count, dir } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, K] = input.shift().map(Number);
const number = input[0][0];

function solution(N, K, number) {
  const stack = [];
  let removeLeft = K;

  for (let i = 0; i < N; i++) {
    const cur = number[i];

    while (
      removeLeft > 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] < cur
    ) {
      stack.pop();
      removeLeft--;
    }

    stack.push(cur);
  }

  if (removeLeft > 0) {
    stack.splice(stack.length - removeLeft, removeLeft);
  }

  return stack.join("");
}
console.log(solution(N, K, number));
