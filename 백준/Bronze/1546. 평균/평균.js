const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let subject = input[0].split(' ').map(Number);
let score = input[1].split(' ').map(Number);
let arr = Array.from({length:subject}, (v,i)=>i+1);
let sum = 0;

score.sort(function(a, b) { // 내림차순 변경
    return b - a;
}); 
   
for(let i=0; i < subject; i++){
    arr[i] = score[i] / score[0] * 100; // score[0] = 최댓값
    sum += arr[i]; // arr 모두 더한 값
}

console.log(sum / subject);  // 평균값