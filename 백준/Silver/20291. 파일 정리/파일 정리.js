const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
input.shift();
let map = new Map();
input.map((input) => {
  let array = input.split(".");
  if (!map.has(array[1])) {
    map.set(array[1], 1);
  } else {
    map.set(array[1], map.get(array[1]) + 1);
  }
});
let answer = [...map];
answer.sort();
answer = answer.map((ans) => {
  return ans.join(" ");
});
console.log(answer.join("\n"));
