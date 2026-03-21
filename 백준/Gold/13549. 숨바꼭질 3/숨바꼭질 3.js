const { count } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, K] = input.shift().map(Number);

function solution(N, K) {
  let queue = [[N, 0]];
  let dist = Array(100001).fill(Infinity);

  while (queue.length > 0) {
    let [x, sec] = queue.shift();
    if (x === K) return sec;
    if (sec > dist[x]) continue;

    let nexts = [
      [x + 1, 1],
      [x - 1, 1],
      [2 * x, 0],
    ];

    for (let [nx, cost] of nexts) {
      if (nx < 0 || nx > 100000) continue;

      if (sec + cost < dist[nx]) {
        dist[nx] = sec + cost;
        if (cost === 0) queue.unshift([nx, sec + cost]);
        else queue.push([nx, sec + cost]);
      }
    }
  }
}
console.log(solution(N, K));
