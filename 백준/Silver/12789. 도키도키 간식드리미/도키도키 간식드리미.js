const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line.trim().split("\n");
let array1 = input[1].split(" ").map((num) => Number(num));
let array2 = [];
let result = [];
let rank = 1;
while (true) {
  if (array1[0] !== rank) {
    if (array2[0] !== rank && array1.length === 0) {
      answer = "Sad";
      break;
    } else if (array2[0] !== rank) {
      array2.unshift(array1[0]);
      array1.shift();
    } else if (array2[0] === rank) {
      rank += 1;
      array2.shift();
    }
  } else {
    array1.shift();
    rank += 1;
  }
  if (array1.length === 0 && array2.length === 0) {
    answer = "Nice";
    break;
  }
}
console.log(answer);
