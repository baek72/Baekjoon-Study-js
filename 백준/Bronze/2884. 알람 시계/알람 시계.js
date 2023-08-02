const fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().split(' ');
let [H, M] = input;

M -= 45;

if(M < 0){
    M += 60;
    H--;
    if(H < 0){
        H = 23;
    }
}

console.log(H + ' ' + M);
