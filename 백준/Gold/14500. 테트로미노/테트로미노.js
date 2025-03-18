const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, M] = input.shift().map(Number);
let map = input.map((i) => i.map(Number));

function solution(N, M, map) {
  // 모든 테트로미노 모양 정의 (상대 좌표)
  const tetrominos = [
    // I 모양
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ], // 가로
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ], // 세로

    // O 모양
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],

    // T 모양
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
    ], // ㅜ
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1],
    ], // ㅏ
    [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, 2],
    ], // ㅗ
    [
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 1],
    ], // ㅓ

    // J 모양
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
    ],

    // L 모양
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, -1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ],

    // S 모양
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 0],
    ],

    // Z 모양
    [
      [0, 0],
      [0, 1],
      [1, -1],
      [1, 0],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
  ];

  let maxSum = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (const tetromino of tetrominos) {
        let sum = 0;
        let isValid = true;

        for (const [dx, dy] of tetromino) {
          const nx = i + dx;
          const ny = j + dy;

          if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
            isValid = false;
            break;
          }

          sum += map[nx][ny];
        }

        if (isValid) {
          maxSum = Math.max(maxSum, sum);
        }
      }
    }
  }

  return maxSum;
}

console.log(solution(N, M, map));
