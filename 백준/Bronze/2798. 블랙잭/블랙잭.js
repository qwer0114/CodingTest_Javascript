let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = input[0].split(" ")[0];
const M = input[0].split(" ")[1];
const array = input[1].split(" ").map((num) => Number(num));

function solution(N, M, array) {
  let answer = 0;

  function DFS(L, start, sum) {
    if (L === 3) {
      if (sum <= M) {
        answer = Math.max(answer, sum);
      }
      return;
    }

    for (let i = start; i < N; i++) {
      DFS(L + 1, i + 1, sum + array[i]);
    }
  }

  DFS(0, 0, 0); // DFS 호출

  console.log(answer);
}
solution(N, M, array);
