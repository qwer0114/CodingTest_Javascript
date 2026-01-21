const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const variables = input.map((i) => i.map(Number));

function solution(variables) {
  const answer = [];
  const [N, M] = variables[0];
  const array1 = variables[1];
  const array2 = variables[2];
  let p1 = 0;
  let p2 = 0;

  while (p1 < N && p2 < M) {
    if (array1[p1] <= array2[p2]) {
      answer.push(array1[p1]);
      p1++;
    } else if (array2[p2] <= array1[p1]) {
      answer.push(array2[p2]);
      p2++;
    }
  }

  while (p1 < N) answer.push(array1[p1++]);
  while (p2 < M) answer.push(array2[p2++]);

  return answer.join(" ");
}

console.log(solution(variables));
