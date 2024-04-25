const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
input.shift();
input = input.map((i) => i.split(" "));
input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}); // 끝나는 시간이 작은 순서대로 우선 정렬
let lastTime = -100;
let answer = 0;
for (let i = 0; i < input.length; i++) {
  if (Number(input[i][0]) >= lastTime) {
    lastTime = Number(input[i][1]);
    answer++;
  }
}
console.log(answer);
