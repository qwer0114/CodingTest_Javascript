const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [start, target] = input.shift().map(Number);

function solution(start, target) {
  const visited = new Set([start]);
  const queue = [[start, 0]];

  while (queue.length > 0) {
    let [x, seconds] = queue.shift();
    if (x === target) return seconds;

    for (let nextX of [x + 1, x - 1, 2 * x]) {
      if (nextX >= 0 && nextX <= 100000 && !visited.has(nextX)) {
        queue.push([nextX, seconds + 1]);
        visited.add(nextX);
      }
    }
  }
}

console.log(solution(start, target)); // 실행
