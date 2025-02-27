const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N, r, c] = input.shift().map(Number);

function solution(N, r, c) {
  if (N === 0) return 0;
  const size = 2 ** N;

  const half = size / 2;

  let quadrant;

  if (r < half && c < half) {
    quadrant = 0;
  } else if (r < half && c >= half) {
    quadrant = 1;
    c -= half;
  } else if (r >= half && c < half) {
    quadrant = 2;
    r -= half;
  } else {
    quadrant = 3;
    r -= half;
    c -= half;
  }

  return quadrant * (half * half) + solution(N - 1, r, c);
}

console.log(solution(N, r, c));
