let fs = require("fs");
let input = Number(fs.readFileSync("./dev/stdin").toString().trim());

function solution(N) {
  let answer = -1;

  for (let i = 0; i <= Math.floor(N / 5); i++) {
    let remaining = N - 5 * i;

    if (remaining % 3 === 0) {
      let bags = i + remaining / 3;

      if (answer === -1 || answer > bags) {
        answer = bags;
      }
    }
  }

  return answer;
}

console.log(solution(input));
