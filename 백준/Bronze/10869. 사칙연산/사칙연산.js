let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();


function solution(input) {
  let answer = [];
  let [a, b] = input.split(" ").map((element) => Number(element));
  answer.push(a + b);
  answer.push(a - b);
  answer.push(a * b);
  answer.push(Math.floor(a / b));
  answer.push(a % b);
  return answer.join("\n");
}

console.log(solution(input));
