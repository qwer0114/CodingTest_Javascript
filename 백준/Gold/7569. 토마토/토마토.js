const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [M, N, H] = input.shift().map(Number);

class Queue {
  constructor() {
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.queue[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.queue[this.headIndex];
    delete this.queue[this.headIndex];
    this.headIndex++;
    return item;
  }
  isEmpty() {
    return this.headIndex === this.tailIndex;
  }
}

let tomatoes = [];
for (let h = 0; h < H; h++) {
  let floor = [];
  for (let n = 0; n < N; n++) {
    floor.push(input[h * N + n].map(Number));
  }
  tomatoes.push(floor);
}

function solution(M, N, H, tomatoes) {
  const directions = [
    [0, 0, 1],
    [0, 0, -1],
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0],
  ];

  let queue = new Queue();
  let maxDay = 0;

  for (let h = 0; h < H; h++) {
    for (let n = 0; n < N; n++) {
      for (let m = 0; m < M; m++) {
        if (tomatoes[h][n][m] === 1) {
          queue.enqueue([h, n, m, 0]);
        }
      }
    }
  }

  while (!queue.isEmpty()) {
    const [h, n, m, day] = queue.dequeue();
    maxDay = Math.max(maxDay, day);

    for (const [dh, dn, dm] of directions) {
      const nh = h + dh;
      const nn = n + dn;
      const nm = m + dm;

      if (
        nh >= 0 &&
        nh < H &&
        nn >= 0 &&
        nn < N &&
        nm >= 0 &&
        nm < M &&
        tomatoes[nh][nn][nm] === 0
      ) {
        tomatoes[nh][nn][nm] = 1;
        queue.enqueue([nh, nn, nm, day + 1]);
      }
    }
  }

  for (let h = 0; h < H; h++) {
    for (let n = 0; n < N; n++) {
      for (let m = 0; m < M; m++) {
        if (tomatoes[h][n][m] === 0) {
          return -1;
        }
      }
    }
  }

  return maxDay;
}

console.log(solution(M, N, H, tomatoes));
