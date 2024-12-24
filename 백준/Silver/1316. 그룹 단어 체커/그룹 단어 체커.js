let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();

function solution(input) {
  let answer = 0;
  input.forEach((element) => {
    let set = new Set();
    for (let i = 0; i < element.length; i++) {
      if (element[i] !== element[i + 1]) {
        if (set.has(element[i])) {
          return;
        }
        set.add(element[i]);
      }
    }
    answer += 1;
  });
  return answer;
}

console.log(solution(input));
