let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(v => v.split(" ").map(Number));

function solution(input) {
    const [a1, a0] = input[0];  // f(n) = a1n + a0
    const c = input[1][0];      // c
    const n0 = input[2][0];     // n0
  
    if (a1 <= c && (a1 * n0 + a0 <= c * n0)) {
        return 1;
    } else {
        return 0;
    }
}

console.log(solution(input));