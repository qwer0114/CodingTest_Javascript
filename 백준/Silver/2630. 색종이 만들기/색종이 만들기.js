const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const N = input.shift().map(Number)[0];
const board = input.map((i) => i.map(Number));

function solution(N, board) {
  let zero = 0;
  let one = 0;

  function dfs(x, y, size) {
    if (size === 1 || isAllSame(x, y, size)) {
      if (board[x][y] === 1) one++;
      else if (board[x][y] === 0) zero++;
      return;
    }
    let half = size / 2;

    dfs(x, y, half);
    dfs(x, y + half, half);
    dfs(x + half, y, half);
    dfs(x + half, y + half, half);
  }

  dfs(0, 0, N);

  function isAllSame(x, y, size) {
    const color = board[x][y];
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (board[i][j] !== color) return false;
      }
    }
    return true;
  }

  return `${zero}\n${one}`;
}

console.log(solution(N, board));
