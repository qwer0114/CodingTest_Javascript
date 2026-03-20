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
  const queue = [[N, 0, String(N)]];
  let dist = Array(100001).fill(false);

  while (queue.length > 0) {
    let [x, sec, arr] = queue.shift();

    if (x === X) {
      let answer = sec + "\n" + arr;
      return answer;
    }

    let nexts = [x - 1, x + 1, 2 * x];

    for (let nx of nexts) {
      if (nx < 0 || nx > 100001 || dist[nx]) continue;
      dist[nx] = true;
      queue.push([nx, sec + 1, arr + " " + String(nx)]);
    }
  }
}

console.log(solution(N, X));
