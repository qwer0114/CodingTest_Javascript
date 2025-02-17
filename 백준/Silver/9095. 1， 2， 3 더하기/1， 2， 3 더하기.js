const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

input.shift();
const cases = input.map((i) => Number(i[0]));

function solution(cases) {
  const numbers = [1, 2, 3];
  const answer = [];
  function dfs(sum, target) {
    if (sum > target) return 0;
    if (sum === target) return 1;

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
      count += dfs(sum + numbers[i], target);
    }

    return count;
  }

  for (let i = 0; i < cases.length; i++) {
    answer.push(dfs(0, cases[i]));
  }

  return answer.join("\n");
}

console.log(solution(cases));
