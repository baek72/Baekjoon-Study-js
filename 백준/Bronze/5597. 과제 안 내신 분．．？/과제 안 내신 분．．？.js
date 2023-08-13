const input = require("fs").readFileSync('/dev/stdin').toString().split('\n').map(Number);
let arr = [];

for(let i = 1; i <= 30; i++){
    if(input.includes(i)) continue; // 조건 충족시 아래 건너뛰기 (숫자가 있으면 반복)
    arr.push(i); // 없으면 배열에 추가
}

arr.sort((a, b) => a - b); // 오름차순
console.log(arr.join('\n')); // 문자로 변환