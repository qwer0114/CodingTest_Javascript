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
  let dequeue = [[N, 0]];
  let dist = Array(100001).fill(Infinity);

  while (dequeue.length > 0) {
    let [x, sec] = dequeue.shift();

    if (x === X) return sec;

    const nexts = [
      [2 * x, 0],
      [x + 1, 1],
      [x - 1, 1],
    ];

    for (let [nextX, cost] of nexts) {
      if (nextX < 0 || nextX >= 100001) continue;
      const nextSec = sec + cost;
      if (nextSec < dist[nextX]) {
        dist[nextX] = nextSec;
        if (cost === 0) dequeue.unshift([nextX, nextSec]);
        else dequeue.push([nextX, nextSec]);
      }
    }
  }
}

console.log(solution(N, X));
