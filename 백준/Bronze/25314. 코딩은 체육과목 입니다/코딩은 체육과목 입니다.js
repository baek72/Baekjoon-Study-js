const input = require("fs").readFileSync('/dev/stdin').toString();

let byte = Number(input);
let num = byte / 4 ;
let long = "";

for(i=0; i<num; i++){
    long += "long ";
}

console.log(long + "int");