let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let number = input
  .shift()
  .split(" ")
  .map((a) => Number(a));

let numberA = [...input].splice(0, number[0]);
let numberB = [...input].splice(number[0]);

function sort(numberB) {
  const set = new Set([...numberA]);
  let answer = 0;
  numberB.forEach((number) => {
    if (set.has(number)) answer += 1;
  });

  return answer;
}

console.log(sort(numberB));
