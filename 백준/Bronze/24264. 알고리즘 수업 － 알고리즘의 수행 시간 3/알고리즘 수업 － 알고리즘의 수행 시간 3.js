let fs = require("fs");
let input = Number(fs.readFileSync("./dev/stdin").toString().trim());

function solution(n) {
    return `${n*n}\n2`;
}

console.log(solution(input));