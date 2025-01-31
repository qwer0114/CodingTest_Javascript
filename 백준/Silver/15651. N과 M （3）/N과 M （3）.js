const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

function solution(input) {
  let [N, M] = input.split(" ").map(Number);
  let result = [];

  let answer = [];

  function dfs() {
    if (result.length === M) {
      answer.push([...result]);
      return;
    }
    for (let i = 1; i <= N; i++) {
      result.push(i);
      dfs(i);
      result.pop();
    }
  }
  dfs(1);
  return answer.map((a) => a.join(" ")).join("\n");
}

console.log(solution(input)); // 실행
