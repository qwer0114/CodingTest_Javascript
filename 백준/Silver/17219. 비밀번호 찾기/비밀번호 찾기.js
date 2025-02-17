const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M] = input.shift();
const memo = input;

function solution(N, M, memo) {
  const answer = [];
  const target = memo.slice(-M).map((i) => i[0].replace("\r", ""));
  const map = new Map();
  for (let i = 0; i < memo.length - M; i++) {
    const [address, password] = memo[i];
    map.set(address, password);
  }

  for (let t of target) {
    answer.push(map.get(t));
  }

  return answer.join("\n");
}

console.log(solution(N, M, memo));
