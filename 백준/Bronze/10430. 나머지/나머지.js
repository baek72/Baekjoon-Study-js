const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

let A = parseInt(inputData[0]);
let B = parseInt(inputData[1]);
let C = parseInt(inputData[2]);

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);