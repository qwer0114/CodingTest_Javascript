let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let answer = '';

for(let i = 1; i <= T; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    answer += `Case #${i}: ${A} + ${B} = ${A + B}\n`;
}

console.log(answer);