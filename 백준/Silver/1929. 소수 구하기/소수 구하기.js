const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
// .split("\n")
// .map((s) => s.split(" "));

const [M, N] = input.split(" ").map(Number);

function solution(M, N) {
  let answer = [];
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) answer.push(i);
  }

  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  return answer.join("\n");
}

console.log(solution(M, N));
