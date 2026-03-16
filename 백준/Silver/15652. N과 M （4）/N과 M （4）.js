const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, M] = input.shift().map(Number);

function solution(N, M) {
  let answer = [];
  let temp = [];

  function dfs(index) {
    if (temp.length === M) {
      answer.push([...temp]);
      return;
    } else {
      for (let i = index; i <= N; i++) {
        temp.push(i);
        dfs(i);
        temp.pop();
      }
    }
  }

  dfs(1);

  return answer.map((a) => a.join(" ")).join("\n");
}

console.log(solution(N, M));
