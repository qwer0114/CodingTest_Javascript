const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

function solution(input) {
  let answer = [];
  const B = Number(input[0][0]);
  const high = new Set();
  const low = new Set();

  for (let i = 1; i <= B * 2; i++) {
    if (i <= B) low.add(input[i][0].replace("\r", ""));
    else high.add(input[i][0].replace("\r", ""));
  }

  const N = Number(input[B * 2 + 1][0]);

  const patternLengths = new Set();
  for (const p of [...low, ...high]) {
    patternLengths.add(p.length);
  }

  for (let i = B * 2 + 2; i < input.length; i++) {
    const operation = input[i][0];
    let score = 0;

    for (let j = 0; j < operation.length; j++) {
      for (const len of patternLengths) {
        const sub = operation.slice(j, j + len);
        if (sub.length < len) continue;
        if (low.has(sub)) score--;
        else if (high.has(sub)) score++;
      }
    }
    answer.push(score);
  }

  answer = answer.map((score) => {
    if (score > 0) {
      return `LOW ${score}`;
    } else if (score < 0) {
      return `HIGH ${Math.abs(score)}`;
    } else {
      return "GOOD";
    }
  });

  return answer.join("\n");
}

console.log(solution(input));
