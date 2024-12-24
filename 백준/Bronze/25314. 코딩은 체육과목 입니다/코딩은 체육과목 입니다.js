let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let N = Number(input);
let answer = '';

for(let i = 0; i < N/4; i++) {
    answer += 'long ';
}
answer += 'int';

console.log(answer);