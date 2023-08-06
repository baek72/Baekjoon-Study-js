const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

let caseT = Number(input[0]); 
let print = '';

for(i=1; i<=caseT; i++){
    let [A, B] = input[i].split(" ");
    print += Number(A) + Number(B) + '\n';
}
console.log(print);