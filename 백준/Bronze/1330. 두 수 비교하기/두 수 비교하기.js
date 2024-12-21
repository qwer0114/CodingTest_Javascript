let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();

function solution(input) {
  input = input.split(" ");
  let [A, B] = input.map((e) => Number(e));
  if (A > B) return ">";
  else if (A < B) return "<";
  else return "==";
}

console.log(solution(input));
