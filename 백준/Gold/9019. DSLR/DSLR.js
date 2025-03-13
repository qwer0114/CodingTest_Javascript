const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [T] = input.shift().map(Number);
const cases = input;

function solution(cases) {
  let answer = [];

  function orderProcess(order, number) {
    if (order === "D") {
      return (number * 2) % 10000;
    } else if (order === "S") {
      return number === 0 ? 9999 : number - 1;
    } else if (order === "L") {
      return (number % 1000) * 10 + Math.floor(number / 1000);
    } else if (order === "R") {
      return (number % 10) * 1000 + Math.floor(number / 10);
    }
  }

  function changeNumber(initial, target) {
    let visited = Array(10000).fill(false);
    let queue = [[initial, ""]];
    visited[initial] = true;

    while (queue.length > 0) {
      let [currentNumber, order] = queue.shift();

      if (currentNumber === target) {
        return order;
      }

      for (let nextOrder of ["D", "S", "L", "R"]) {
        const changeNumber = orderProcess(nextOrder, currentNumber);
        if (!visited[changeNumber]) {
          visited[changeNumber] = true;
          queue.push([changeNumber, `${order}${nextOrder}`]);
        }
      }
    }
  }

  for (let i = 0; i < cases.length; i++) {
    const [A, B] = cases[i].map(Number);
    answer.push(changeNumber(A, B));
  }

  return answer.join("\n");
}

console.log(solution(cases));
