const { count } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [M, N] = input.shift().map(Number);
let map = [];
for (let i = 0; i < input.length; i++) {
  map.push(
    input[i][0]
      .split("")
      .filter((s) => s !== "\r")
      .map(Number),
  );
}

function solution(N, M, map) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const dist = Array(N)
    .fill(null)
    .map(() => Array(M).fill(Infinity));

  const deque = [[0, 0, 0]];
  dist[0][0] = 0;

  while (deque.length > 0) {
    let [x, y, cnt] = deque.shift();
    if (x === N - 1 && y === M - 1) return cnt;
    if (cnt > dist[x][y]) continue;

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      let nextCnt = cnt + map[nx][ny];

      if (nextCnt < dist[nx][ny]) {
        dist[nx][ny] = nextCnt;
        if (map[nx][ny] === 0) {
          deque.unshift([nx, ny, nextCnt]);
        } else {
          deque.push([nx, ny, nextCnt]);
        }
      }
    }
  }
  return dist[N - 1][M - 1];
}

console.log(solution(N, M, map));
