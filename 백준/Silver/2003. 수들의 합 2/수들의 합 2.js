const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const variables = input.map((i) => i.map(Number));

function solution(variables) {
  let answer = 0;
  const target = variables[0][1];
  const array = variables[1];
  const N = array.length;
  let p1 = 0;
  let p2 = 0;
  let sum = array[0];

  while (p1 <= N) {
    if (sum === target) {
      answer += 1;
      sum -= array[p1];
      p1 += 1;
    } else if (sum < target) {
      p2 += 1;
      if (p2 >= N) break;
      sum += array[p2];
    } else {
      sum -= array[p1];
      p1 += 1;
    }
  }

  return answer;
}

console.log(solution(variables));
