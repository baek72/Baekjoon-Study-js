const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(x => Number(x));
let result = arr.filter(v => max > v); 

console.log(result.join(' '));