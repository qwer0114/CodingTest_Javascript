const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, M] = input.shift().map(Number);
let map = input.map((i) => i[0].replace("\r", "").split(""));

function solution(N, M, map) {
  let answer = 0;
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));

  function findStartPoint(map) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === "I") return [i, j];
      }
    }
  }

  let [startX, startY] = findStartPoint(map);

  function dfs(x, y) {
    if (map[x][y] === "P") {
      answer += 1;
    }
    map[x][y] = "X";
    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] !== "X") {
        dfs(nx, ny);
      }
    }
  }

  map[startX][startY] = "X";
  dfs(startX, startY);

  return answer || "TT";
}

console.log(solution(N, M, map));
