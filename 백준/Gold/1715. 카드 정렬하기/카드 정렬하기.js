const { count, dir } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N] = input.shift().map(Number);
const numbers = input.map((i) => Number(i));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    let top = this.heap[0];
    let last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown();
    }

    return top;
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  sinkDown() {
    let i = 0;
    while (true) {
      let smallest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === i) break;
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(N, numbers) {
  let heap = new MinHeap();
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    heap.push(numbers[i]);
  }

  while (heap.size() > 1) {
    const temp = heap.pop() + heap.pop();
    heap.push(temp);
    answer += temp;
  }

  return answer;
}
console.log(solution(N, numbers));
