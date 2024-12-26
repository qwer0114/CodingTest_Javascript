let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  input = input.map((i) => Number(i));
  let answer = "";
  const money = [25, 10, 5, 1];
  input.forEach((change) => {
    let array = [];
    let c = change;
    money.forEach((m) => {
      array.push(Math.floor(c / m));
      c %= m;
    });
    answer += array.join(" ") + "\n";
  });

  return answer.trim();
}

console.log(solution(input));
