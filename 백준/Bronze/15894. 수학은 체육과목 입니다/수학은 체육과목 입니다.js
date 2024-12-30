let fs = require("fs");
let input = BigInt(fs.readFileSync("./dev/stdin").toString().trim());

function solution(n) {
    return n * 4n + "";  
}

console.log(solution(input));