const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, M] = input[0].map(Number);

function solution(N, M) {
  const answer = [];
  const visited = Array.from({ length: N }, () => false);
  let temp = [];

  function dfs() {
    if (temp.length === M) {
      answer.push([...temp]);
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
          visited[i] = true;
          temp.push(i);
          dfs(i);
          visited[i] = false;
          temp.pop();
        }
      }
    }
  }
  dfs();
  return answer.map((a) => a.join(" ")).join("\n");
}

console.log(solution(N, M));
