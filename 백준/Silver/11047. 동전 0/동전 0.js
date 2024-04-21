const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line.trim().split("\n");
input = input.map((i) => i.replace("\r", ""));
let limit = Number(input[0].split(" ")[1]);
input.shift();
let answer = 0;
for (let i = input.length - 1; i >= 0; i--) {
  if (Number(input[i]) <= limit) {
    while (limit >= Number(input[i])) {
      limit -= Number(input[i]);
      answer += 1;
    }
  }
}
console.log(answer);
