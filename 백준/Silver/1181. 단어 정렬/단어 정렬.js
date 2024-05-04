const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
input.shift();
let set = new Set(input);
input = [...set];
input.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  } else {
    return a.length - b.length;
  }
});
console.log(input.join("\n"));
