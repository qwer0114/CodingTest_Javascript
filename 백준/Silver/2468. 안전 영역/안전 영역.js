const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N] = input.shift().map(Number);
const map = input.map((i) => i.map(Number));

function makeMap(map, h) {
  const newMap = [...map].map((i) =>
    i.map((number) => {
      if (h > number) {
        return 0;
      } else {
        return 1;
      }
    }),
  );

  return newMap;
}

function solution(N, map) {
  let answer = [];

  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const max = Math.max(...map.flat());

  function dfs(x, y, map) {
    for (let [dx, dy] of direction) {
      let nx = dx + x;
      let ny = dy + y;

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (map[nx][ny] === 1) {
          map[nx][ny] = 0;
          dfs(nx, ny, map);
        }
      }
    }
  }

  for (let h = 1; h <= max; h++) {
    let newMap = makeMap(map, h);
    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (newMap[i][j] === 1) {
          count++;
          dfs(i, j, newMap);
        }
      }
    }

    answer.push(count);
  }

  return Math.max(...answer);
}

console.log(solution(N, map));
