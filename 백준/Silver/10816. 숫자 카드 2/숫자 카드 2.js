const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
input.shift();
let array1 = input[0].split(" ");
let array2 = input[2].split(" ");
let map = new Map();
let answer = [];
array1.map((arr) => {
  if (map.has(arr)) {
    map.set(arr, map.get(arr) + 1);
  } else {
    map.set(arr, 1);
  }
});
array2.map((arr) => {
  if (map.has(arr)) {
    answer.push(map.get(arr));
  } else {
    answer.push(0);
  }
});
console.log(answer.join(" "));
