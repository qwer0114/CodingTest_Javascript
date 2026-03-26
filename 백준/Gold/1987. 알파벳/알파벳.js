const { count, dir } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [R, C] = input.shift().map(Number);
const map = input.map((i) => i[0].replace("\r", "").split(""));

function solution(R, C, map) {
  let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let visited = new Set(map[0][0]);
  let answer = 0;

  function dfs(x, y, count) {
    answer = Math.max(answer, count);
    for (let [dx, dy] of direction) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

      if (!visited.has(map[nx][ny])) {
        visited.add(map[nx][ny]);
        dfs(nx, ny, count + 1);
        visited.delete(map[nx][ny]);
      }
    }
  }

  dfs(0, 0, 1);

  return answer;
}
console.log(solution(R, C, map));
