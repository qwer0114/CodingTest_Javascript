const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M] = input.shift().map(Number);
const map = input.map((i) => i[0].replace("\r", "").split("").map(Number));

function solution(N, M, map) {
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let visited = Array(N + 1)
    .fill()
    .map(() =>
      Array(M + 1)
        .fill()
        .map(() => [false, false]),
    );

  visited[0][0] = [true, false];
  const queue = [[0, 0, 0, 1]];

  let head = 0;

  while (head < queue.length) {
    let [x, y, broke, count] = queue[head++];

    if (x === N - 1 && y === M - 1) {
      return count;
    }

    for (const [dx, dy] of direction) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (map[nx][ny] === 0 && !visited[nx][ny][broke]) {
        visited[nx][ny][broke] = true;
        queue.push([nx, ny, broke, count + 1]);
      } else if (map[nx][ny] === 1 && broke === 0) {
        visited[nx][ny][1] = true;
        queue.push([nx, ny, 1, count + 1]);
      }
    }
  }
  return -1;
}

console.log(solution(N, M, map));
