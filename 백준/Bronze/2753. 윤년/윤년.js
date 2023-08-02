const fs = require('fs');
let inputData = fs.readFileSync(0, 'utf8').toString();
inputData = Number(inputData);

if(inputData % 4 == 0 && inputData % 100 != 0){
    console.log(1);
}else if(inputData % 400 == 0){
    console.log(1);
}else {
    console.log(0);
}