const fs=require('fs');
const [num1,num2]=fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num=parseInt(num1);
const multipleNum=num2.split('').map(Number);
let result=multipleNum.reverse().map(x=>x*num);
result.push(num*parseInt(num2));
console.log(result.join('\n'));