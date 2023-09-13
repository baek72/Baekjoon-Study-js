const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const text = input[0];
const num = input[1];
const arr = [...text];

console.log(arr[num - 1]);