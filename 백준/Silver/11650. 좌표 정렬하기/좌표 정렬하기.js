let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
input = input.map((i) => i.split(" "));

function sort(input) {
  let answer = input.sort((a, b) => {
    if (Number(a[0]) === Number(b[0])) {
      return Number(a[1]) - Number(b[1]);
    } else {
      return Number(a[0]) - Number(b[0]);
    }
  });
  return answer;
}

console.log(
  sort(input)
    .map((i) => i.join(" "))
    .join("\n")
);
