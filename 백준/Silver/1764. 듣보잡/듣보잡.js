const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
input.shift();
let count = 0;
let answer = [];
let map = new Map();
for (let i = 0; i < input.length; i++) {
  if (map.has(input[i])) {
    count += 1;
    answer.push(input[i]);
  } else {
    map.set(input[i], true);
  }
}
answer.sort();
answer.unshift(count);
console.log(answer.join("\n"));
