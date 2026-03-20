const { count } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, X] = input.shift().map(Number);

function solution(N, X) {
  const queue = [N];
  const dist = Array(100001).fill(Infinity);
  const cnt = Array(100001).fill(0);

  dist[N] = 0;
  cnt[N] = 1;

  while (queue.length > 0) {
    let x = queue.shift();

    let nexts = [x - 1, x + 1, 2 * x];

    for (let nx of nexts) {
      if (nx < 0 || nx >= 100001) continue;
      const nextSec = dist[x] + 1;

      if (nextSec < dist[nx]) {
        dist[nx] = nextSec;
        cnt[nx] = cnt[x];
        queue.push(nx);
      } else if (nextSec === dist[nx]) {
        cnt[nx] += cnt[x];
      }
    }
  }

  return dist[X] + "\n" + cnt[X];
}
console.log(solution(N, X));
