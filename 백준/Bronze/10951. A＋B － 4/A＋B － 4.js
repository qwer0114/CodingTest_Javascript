let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';

for(let i = 0; i < input.length; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    answer += (A + B) + '\n';
}

console.log(answer);