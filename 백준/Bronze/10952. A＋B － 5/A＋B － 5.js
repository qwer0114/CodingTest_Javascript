let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';
let i = 0;

while(true) {
    let [A, B] = input[i].split(' ').map(Number);
    if(A === 0 && B === 0) break;
    answer += (A + B) + '\n';
    i++;
}

console.log(answer);