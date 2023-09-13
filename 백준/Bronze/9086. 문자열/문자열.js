const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const caseT = input[0];
let caseArr = [];

for(let i = 1; i <= caseT; i++){
    caseArr = input[i].trim(); // \n 제거
    let str = caseArr[0]; 
    let end = caseArr[caseArr.length - 1];
  
    console.log(str + end); 
}
