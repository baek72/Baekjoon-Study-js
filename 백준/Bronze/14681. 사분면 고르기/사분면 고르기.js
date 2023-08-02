const fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().split('\n');
let [x, y] = input;

if(x > 0 && y > 0){
    console.log(1);
}else if(x < 0 && y > 0){
    console.log(2);
}else if(x < 0 && y < 0){
    console.log(3);
}else if(x > 0 && y < 0){
    console.log(4);
}