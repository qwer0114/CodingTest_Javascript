const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
let array1 = input[1].split(" ").map((n) => Number(n));
let set = new Set(array1);

let array2 = input[3].split(" ").map((n) => Number(n));

let answer = [];
for (let i = 0; i < array2.length; i++) {
  if (set.has(array2[i])) {
    console.log(1);
  } else {
    console.log(0);
  }
}
