const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

function solution() {
  const T = Number(input[0][0]);
  let currentLine = 1;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const answer = [];

  for (let t = 0; t < T; t++) {
    const [M, N, K] = input[currentLine].map(Number);
    const field = Array(N)
      .fill()
      .map(() => Array(M).fill(0));

    function dfs(x, y) {
      field[x][y] = 0;
      for (let [dx, dy] of directions) {
        let nx = dx + x;
        let ny = dy + y;

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && field[nx][ny] === 1) {
          dfs(nx, ny);
        }
      }
    }

    for (let i = 0; i < K; i++) {
      const [x, y] = input[currentLine + i + 1].map(Number);
      field[y][x] = 1;
    }
    let wormCont = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (field[i][j] === 1) {
          dfs(i, j);
          wormCont += 1;
        }
      }
    }
    answer.push(wormCont);
    currentLine += K + 1;
  }
  return answer.join("\n");
}

console.log(solution());
