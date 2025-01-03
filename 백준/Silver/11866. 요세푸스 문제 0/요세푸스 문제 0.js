let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let answer = [];
  let [N, K] = input[0].split(" ").map(Number);
  let array = Array.from({ length: N }, (_, i) => i + 1);
  let index = K - 1;  

  while (array.length > 0) {
    answer.push(array.splice(index, 1));
    
    if (array.length > 0) { 
      index = (index + K - 1) % array.length;
    }
  }

  return "<" + answer.join(", ") + ">";
}

console.log(solution(input));