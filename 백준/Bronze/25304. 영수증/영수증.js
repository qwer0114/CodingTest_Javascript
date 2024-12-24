let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let totalAmount = Number(input[0]);  
let N = Number(input[1]);  
let calculatedTotal = 0; 


for(let i = 0; i < N; i++) {
    let [price, quantity] = input[i + 2].split(' ').map(Number);
    calculatedTotal += price * quantity;
}


console.log(totalAmount === calculatedTotal ? "Yes" : "No");