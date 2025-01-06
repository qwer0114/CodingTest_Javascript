let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));
input.shift();
function solution(input) {
  input = input.map((element) => element.split(" "));
  let set = new Set();

  input.forEach((element, index) => {
    if (element.includes("ChongChong")) {
      set.add(element[0]);
      set.add(element[1]);
    }
    let [A, B] = element;
    if (set.has(A) || set.has(B)) {
      set.add(A);
      set.add(B);
    }
  });
  return set.size;
}

console.log(solution(input));
