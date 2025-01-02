let fs = require("fs");
let input = Number(fs.readFileSync("./dev/stdin").toString().trim());

function solution(N) {
    let count = 0;  
    let num = 666;  
    
    while (true) {
        if (String(num).includes('666')) {
            count++;
            if (count === N) {
                return num;
            }
        }
        num++;
    }
}

console.log(solution(input));