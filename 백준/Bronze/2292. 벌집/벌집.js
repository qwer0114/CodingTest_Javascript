const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

function solution(N) {
    if (N === 1) return 1;
    
    let count = 1; 
    let range = 1;  
    let increase = 6; 
    
    while (range < N) {
        range += increase;
        increase += 6;
        count++;
    }
    
    return count;
}

console.log(solution(input));