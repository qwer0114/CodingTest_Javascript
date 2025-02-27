const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N, M, B] = input.shift().map(Number);
const maps = input.map((i) => i.map(Number));

function solution(N, M, B, land) {
  let minTime = Infinity;
  let maxHeight = 0;

  for (let height = 0; height <= 256; height++) {
    let inventory = B;
    let time = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        const diff = land[i][j] - height;

        if (diff > 0) {
          inventory += diff;
          time += diff * 2;
        } else if (diff < 0) {
          inventory += diff;
          time -= diff;
        }
      }
    }

    if (inventory < 0) continue;

    if (time < minTime || (time === minTime && height > maxHeight)) {
      minTime = time;
      maxHeight = height;
    }
  }

  return [minTime, maxHeight].join(" ");
}

console.log(solution(N, M, B, maps));
