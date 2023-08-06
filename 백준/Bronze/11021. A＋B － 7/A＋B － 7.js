const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

let caseT = Number(input[0]); 
let print = '';

for(i=1; i<=caseT; i++){
    let [A, B] = input[i].split(" ");
    let num = Number(A) + Number(B);
    print += 'Case #' + i + ': ' + num + '\n';
}
console.log(print);