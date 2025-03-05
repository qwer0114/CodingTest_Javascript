const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, M] = input.shift().map(Number);
let map = input.map((i) => i.map(Number));

function findTarget() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 2) return [i, j];
    }
  }
}

function solution(N, M, map) {
  let answer = Array(N)
    .fill()
    .map(() => Array(M).fill(-1));
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) answer[i][j] = 0;
    }
  }

  let [targetX, targetY] = findTarget();
  answer[targetX][targetY] = 0;
  let queue = [[targetX, targetY, 0]];

  while (queue.length > 0) {
    let [x, y, count] = queue.shift();

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        map[nx][ny] === 1 &&
        answer[nx][ny] === -1
      ) {
        answer[nx][ny] = count + 1;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  return answer.map((i) => i.join(" ")).join("\n");
}

console.log(solution(N, M, map));
