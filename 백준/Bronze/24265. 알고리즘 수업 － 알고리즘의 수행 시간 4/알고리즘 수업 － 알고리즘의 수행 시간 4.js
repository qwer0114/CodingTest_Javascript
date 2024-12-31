let fs = require("fs");
let input = BigInt(fs.readFileSync("./dev/stdin").toString().trim());

function solution(n) {
    let count = (n * (n-1n)) / 2n;
    return `${count}\n2`;
}

console.log(solution(input));