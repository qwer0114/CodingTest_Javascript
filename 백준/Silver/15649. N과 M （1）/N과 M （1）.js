const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line.trim().split("\n");
input = input[0].split(" ");

let temp = [];
let selected = [];

function DFS(L) {
  if (L === Number(input[1])) {
    console.log(temp.join(" "));
  } else {
    for (let i = 1; i <= Number(input[0]); i++) {
      if (!selected[i]) {
        temp[L] = i;
        selected[i] = true;
        DFS(L + 1);
        selected[i] = false;
      }
    }
  }
}

DFS(0);
