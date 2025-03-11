const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N] = input.shift().map(Number);
let blocks = input.map((i) => i[0].replace("\r", "").split(""));

function solution(N, blocks) {
  let answer1 = 0;
  let visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function dfs(color, x, y) {
    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        blocks[nx][ny] === color
      ) {
        visited[nx][ny] = true;
        dfs(blocks[nx][ny], nx, ny);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        dfs(blocks[i][j], i, j);
        answer1++;
      }
    }
  }

  function blocksForBlind(blocks) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (blocks[i][j] === "G") blocks[i][j] = "R";
      }
    }
    return blocks;
  }
  let answer2 = 0;
  visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));

  blocks = blocksForBlind(blocks);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        dfs(blocks[i][j], i, j);
        answer2++;
      }
    }
  }

  return `${answer1} ${answer2}`;
}

console.log(solution(N, blocks));
