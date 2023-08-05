const input = require("fs").readFileSync("/dev/stdin").toString();

let num = 0;
for(let i = 1; i <= input; i++){
    num = num += i;
}
console.log(num);