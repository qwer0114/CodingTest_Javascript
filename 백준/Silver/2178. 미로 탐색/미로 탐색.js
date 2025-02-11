const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, M] = input.shift().map(Number);
let map = input.map((i) => i[0].split("").map(Number));

function solution(N, M, map) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const queue = [[0, 0, 1]];
  const visited = new Set(["0,0"]);

  while (queue.length > 0) {
    const [x, y, moves] = queue.shift();
    if (x === N - 1 && y === M - 1) return moves;

    for (let [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;
      const key = `${nextX},${nextY}`;

      if (
        nextX >= 0 &&
        nextX < N &&
        nextY >= 0 &&
        nextY < M &&
        map[nextX][nextY] === 1 &&
        !visited.has(key)
      ) {
        queue.push([nextX, nextY, moves + 1]);
        visited.add(key);
      }
    }
  }
}

console.log(solution(N, M, map)); // 실행
