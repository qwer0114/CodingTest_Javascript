let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let array = [];
  input = input.map(Number);
  let [A, B] = input;
  for (let i = A; i <= B; i++) {
    if (isPrime(i)) {
      array.push(i);
    }
  }

  if (array.length === 0) {
    return -1;
  }

  let sum = array.reduce((acc, cur) => acc + cur);
  return `${sum}\n${array[0]}`;
}

function isPrime(number) {
  if (number === 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution(input));
