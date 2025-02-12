const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let N = Number(input.shift());
let map = input.map((i) => i[0].split("").map(Number));

function solution(N, map) {
  let danji = 0;
  let housesArray = [];

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function dfs(x, y) {
    let count = 1;
    map[x][y] = 0;

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && map[nx][ny] === 1) {
        count += dfs(nx, ny);
      }
    }
    return count;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) {
        danji += 1;
        housesArray.push(dfs(i, j));
      }
    }
  }

  return `${danji}\n${housesArray.sort((a, b) => a - b).join("\n")}`;
}

console.log(solution(N, map)); // 실행
