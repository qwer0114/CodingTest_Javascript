const fs = require("fs");

const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M, K] = input.shift().map(Number);
const map = Array(N)
  .fill()
  .map(() => Array(N).fill(5));
const A = Array(N)
  .fill()
  .map(() => []);
const trees = Array(N)
  .fill()
  .map(() =>
    Array(N)
      .fill()
      .map(() => []),
  );

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    A[i][j] = Number(input[i][j]);
  }
}

for (let i = N; i < N + M; i++) {
  const [x, y, z] = input[i].map(Number);
  trees[x - 1][y - 1].push(z);
}

const direction = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function spring() {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (trees[r][c].length === 0) continue;

      trees[r][c].sort((a, b) => a - b);

      const dead = [];
      const alive = [];

      for (const age of trees[r][c]) {
        if (map[r][c] >= age) {
          map[r][c] -= age;
          alive.push(age + 1);
        } else {
          dead.push(age);
        }
      }

      trees[r][c] = alive;

      for (const age of dead) {
        map[r][c] += Math.floor(age / 2);
      }
    }
  }
}

function autumn() {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      for (const age of trees[r][c]) {
        if (age % 5 === 0) {
          for (const [dr, dc] of direction) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
            trees[nr][nc].push(1);
          }
        }
      }
    }
  }
}

function winter() {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      map[r][c] += A[r][c];
    }
  }
}

for (let k = 0; k < K; k++) {
  spring();
  autumn();
  winter();
}

let count = 0;
for (let r = 0; r < N; r++)
  for (let c = 0; c < N; c++) count += trees[r][c].length;

console.log(count);
