const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(e => Number(e));

let answer = Array.from({length:N}, () => -1);
let stack = [0];
for(let i=1; i<N; i++) {
    while(arr[stack[stack.length-1]] < arr[i] && stack.length) {
        answer[stack.pop()] = arr[i];
    }
    stack.push(i);
}

console.log(answer.join(" "));