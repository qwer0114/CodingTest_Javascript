const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line.trim().split("\n");
input = input.map((i) => i.replace("\r", ""));
let diction = input.slice(1, Number(input[0].split(" ")[0]) + 1);
let map = new Map();
for (let i = 0; i < diction.length; i++) {
  map.set(diction[i], i + 1);
}

let find = input.slice(Number(input[0].split(" ")[0]) + 1, input.length);

find.map((i) => {
  if (isNaN(Number(i))) {
    console.log(map.get(i));
  } else {
    console.log(diction[i - 1]);
  }
});
