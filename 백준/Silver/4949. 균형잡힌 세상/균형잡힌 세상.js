const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line.trim().split("\n");
let answer = [];
function solution(string) {
  if (string === ".") return;
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "[") {
      stack.push(string[i]);
    } else if (string[i] === ")") {
      if (stack.at(-1) === "(") stack.pop();
      else stack.push(string[i]);
    } else if (string[i] === "]") {
      if (stack.at(-1) === "[") stack.pop();
      else stack.push(string[i]);
    } else if (string[i] === ".") break;
  }

  if (!stack.length) answer.push("yes");
  else return answer.push("no");
}

input.map((i) => solution(i));
console.log(answer.join("\n"));
