let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();

function solution(array) {
  let answer = [];

  array.forEach((arr) => {
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ")") {
        if (stack.length === 0) {
          answer.push("NO");
          return;
        }
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    }
    if (stack.length > 0) answer.push("NO");
    else answer.push("YES");
  });

  return answer.join("\n");
}

console.log(solution(input));
