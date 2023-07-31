const fs = require('fs');
const [num1, num2] = fs.readFileSync(0, 'utf8').toString().split('\n').map(Number);

let onenum = num2%10; // 5
let tenNum = Math.floor((num2%100)/10); // 8
let hundredNum = Math.floor(num2/100); // 3

console.log(num1*onenum);
console.log(num1*tenNum);
console.log(num1*hundredNum);
console.log(num1*num2);