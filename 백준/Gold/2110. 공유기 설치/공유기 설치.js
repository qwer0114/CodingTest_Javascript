const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

let [N, C] = input.shift().map(Number);
let array = input.map(Number);

function solution(N, C, lanes) {
  lanes.sort((a, b) => a - b);
  let answer = 0;
  let rt = lanes[lanes.length - 1] - lanes[0];
  let lt = 1; // 최소 거리 1부터

  function canInstall(minDist) {
    let count = 1;
    let last = lanes[0];

    for (let house of lanes) {
      if (house - last >= minDist) {
        count++;
        last = house;
      }
    }
    return count >= C;
  }

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (canInstall(mid)) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

console.log(solution(N, C, array));
