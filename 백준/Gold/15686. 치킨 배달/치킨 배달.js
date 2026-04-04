const fs = require("fs");

const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, M] = input.shift().map(Number);
const map = input.map((i) => i.map(Number));

function solution(N, M, map) {
  let answer = Infinity;
  const temp = [];
  const chickens = [];
  const houses = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) houses.push([i + 1, j + 1]);
      else if (map[i][j] === 2) chickens.push([i + 1, j + 1]);
    }
  }

  function shortest(chickens, houses) {
    let sum = 0;
    for (let house of houses) {
      let distance = Infinity;
      for (let chicken of chickens) {
        let temp =
          Math.abs(house[0] - chicken[0]) + Math.abs(house[1] - chicken[1]);
        distance = Math.min(distance, temp);
      }
      sum += distance;
    }

    return sum;
  }

  function dfs(index, count) {
    if (count > 0) {
      answer = Math.min(answer, shortest(temp, houses));
    }
    if (count === M) return;
    for (let i = index; i < chickens.length; i++) {
      temp.push(chickens[i]);
      dfs(i + 1, count + 1);
      temp.pop();
    }
  }

  dfs(0, 0);

  return answer;
}

console.log(solution(N, M, map));
