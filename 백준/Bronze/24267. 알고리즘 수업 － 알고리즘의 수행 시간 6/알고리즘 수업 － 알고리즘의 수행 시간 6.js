let fs = require("fs");
let input = BigInt(fs.readFileSync("./dev/stdin").toString().trim());

function solution(n) {
    let count = (n * (n-1n) * (n-2n)) / 6n;
    return `${count}\n3`;
}

console.log(solution(input));