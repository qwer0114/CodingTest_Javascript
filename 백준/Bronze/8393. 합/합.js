let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let n = Number(input);
let sum = (n * (n + 1)) / 2;

console.log(sum);