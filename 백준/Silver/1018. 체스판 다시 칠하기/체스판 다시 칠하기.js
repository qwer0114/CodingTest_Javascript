let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let [N, M] = input[0].split(" ").map(Number);
  let board = input.slice(1);
  let answer = 64;
  let pattern1 = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];
  let pattern2 = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let count1 = 0;
      let count2 = 0;

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (board[i + x][j + y] !== pattern1[x][y]) count1++;
          if (board[i + x][j + y] !== pattern2[x][y]) count2++;
        }
      }
      answer = Math.min(answer, count1, count2);
    }
  }

  return answer;
}

console.log(solution(input));
