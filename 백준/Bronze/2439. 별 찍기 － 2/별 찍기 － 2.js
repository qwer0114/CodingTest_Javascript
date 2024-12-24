let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let N = Number(input);
let answer = '';

for(let i = 1; i <= N; i++) {
    answer += ' '.repeat(N-i) + '*'.repeat(i) + '\n';
}

console.log(answer);