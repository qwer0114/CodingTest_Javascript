const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, M] = input.shift().map(Number);
let info = input;

function initializeBoard() {
  let board = Array(101).fill(0);
  for (let i = 1; i <= 100; i++) {
    board[i] = i;
  }
  for (let i = 0; i < N; i++) {
    let [x, y] = info[i].map(Number);
    board[x] = y;
  }

  for (let i = N; i < N + M; i++) {
    let [u, v] = info[i].map(Number);
    board[u] = v;
  }

  return board;
}

let board = initializeBoard();

function solution(board) {
  let queue = [[1, 0]];
  let visited = Array(101).fill(false);
  visited[1] = true;
  while (queue.length > 0) {
    let [x, count] = queue.shift();
    if (board[x] === 100) {
      return count;
    }
    for (let dx of [1, 2, 3, 4, 5, 6]) {
      let nx = dx + x;
      if (board[nx] <= 100 && !visited[nx]) {
        visited[nx] = true;
        queue.push([board[nx], count + 1]);
      }
    }
  }
}

console.log(solution(board));
