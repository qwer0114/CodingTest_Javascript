let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  const answer = [];
  input = input.map((element) => element.split(" "));
  input.forEach((element) => {
    let s = "";
    let [count, string] = element;
    for (let i = 0; i < string.length; i++) {
      s += string[i].repeat(count);
    }
    answer.push(s);
  });
  return answer.join("\n");
}

console.log(solution(input));
