let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();


function solution(input) {
  if (input >= 90) {
    return "A";
  } else if (input >= 80 && input <= 89) {
    return "B";
  } else if (input >= 70 && input <= 79) {
    return "C";
  } else if (input >= 60 && input <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log(solution(input));
