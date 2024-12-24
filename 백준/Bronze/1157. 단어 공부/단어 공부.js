let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let answer = [];
  const obj = {};
  input = input[0].toUpperCase().split("");
  input.forEach((element) => {
    if (typeof obj[element] === "number") obj[element] += 1;
    else obj[element] = 0;
  });
  let max = Math.max(...Object.values(obj));
  for (let key in obj) {
    if (obj[key] === max) answer.push(key);
  }
  if (answer.length > 1) return "?";
  return answer[0];
}

console.log(solution(input));
