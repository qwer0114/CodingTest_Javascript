let fs = require("fs");
let input = Number(fs.readFileSync("./dev/stdin").toString().trim());

function solution(N) {
  if (N === 1) return '';
  
  let answer = [];
  let divisor = 2; 

  while (N > 1) {
    if (N % divisor === 0) {
      answer.push(divisor);
      N = N / divisor;
    } else {
      divisor++;
    }
  }

  return answer.join("\n");
}

console.log(solution(input));