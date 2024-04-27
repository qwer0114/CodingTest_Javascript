const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""))
  .map((i) => Number(i));
const map = new Map();
let length = input.shift();
let array = input.sort((a, b) => a - b);
let firstAnswer = Math.round(array.reduce((a, b) => a + b) / length);
if (firstAnswer === -0) {
  console.log(0);
} else {
  console.log(firstAnswer);
}
let secondAnswer = array[Math.floor(length / 2)];
console.log(secondAnswer);
let max = 1;
for (let number of array) {
  if (map.has(number)) {
    max = Math.max(max, map.get(number) + 1);
    map.set(number, map.get(number) + 1);
  } else map.set(number, 1);
}
const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}
if (maxArr.length === 1) {
  console.log(maxArr[0]);
} else {
  console.log(maxArr[1]);
}
console.log(array.at(-1) - array[0]);
