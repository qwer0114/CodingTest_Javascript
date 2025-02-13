const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// .map((s) => s.split(" "));

class PrinterQueue {
  constructor(papers, target) {
    this.queue = papers.map((priority, index) => {
      return {
        priority,
        target: index === target,
      };
    });
  }
  print() {
    let count = 0;
    while (this.queue.length > 0) {
      const current = this.queue.shift();
      const hasHigherPriority = this.queue.some(
        (docs) => docs.priority > current.priority
      );
      if (hasHigherPriority) {
        this.queue.push(current);
      } else {
        count++;
        if (current.target) return count;
      }
    }
    return count;
  }
}

function solution(input) {
  const testCases = parseInt(input[0]);
  let currentLine = 1;
  const result = [];

  for (let i = 0; i < testCases; i++) {
    const [n, m] = input[currentLine].split(" ").map(Number);
    const priorities = input[currentLine + 1].split(" ").map(Number);

    const printer = new PrinterQueue(priorities, m);

    result.push(printer.print());

    currentLine += 2;
  }

  return result.join("\n");
}

console.log(solution(input));
