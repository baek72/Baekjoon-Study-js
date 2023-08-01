const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

let A = Number(inputData[0]); 
let B = Number(inputData[1]);
let C = Number(inputData[2]);

if(A > B){
    console.log('>');
}else if(A < B){
    console.log('<');
}else{
    console.log('==');
}