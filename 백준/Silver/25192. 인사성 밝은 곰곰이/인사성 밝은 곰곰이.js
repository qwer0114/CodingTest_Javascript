const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
input.shift();
let answer = 0;
let map = new Map();

for (let i = 0; i < input.length; i++) {
  if (input[i] === "ENTER") {
    map = new Map();
  } else {
    if (!map.has(input[i])) {
      map.set(input[i], "");
      answer += 1;
    }
  }
}
console.log(answer);
