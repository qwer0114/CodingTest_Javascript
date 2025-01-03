let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  push(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  pop() {
    if (this.head === this.tail) return -1;
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return this.head === this.tail ? 1 : 0;
  }

  front() {
    if (this.head === this.tail) return -1;
    return this.items[this.head];
  }

  back() {
    if (this.head === this.tail) return -1;
    return this.items[this.tail - 1];
  }
}

function solution(input) {
  const N = parseInt(input[0]);
  const queue = new Queue();
  let answer = [];

  for (let i = 1; i <= N; i++) {
    const command = input[i].split(" ");

    switch (command[0]) {
      case "push":
        queue.push(parseInt(command[1]));
        break;
      case "pop":
        answer.push(queue.pop());
        break;
      case "size":
        answer.push(queue.size());
        break;
      case "empty":
        answer.push(queue.empty());
        break;
      case "front":
        answer.push(queue.front());
        break;
      case "back":
        answer.push(queue.back());
        break;
    }
  }

  return answer.join("\n");
}

console.log(solution(input));
