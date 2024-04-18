let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let map = new Map();
input[1].split(" ").map((i) => map.set(Number(i), "값"));
const array2 = input[3].split(" ").map((i) => Number(i));

function solution(map, array2) {
  let answer = [];
  for (let a of array2) {
    if (map.has(a)) answer.push(1);
    else answer.push(0);
  }
  console.log(...answer);
}
solution(map, array2);
