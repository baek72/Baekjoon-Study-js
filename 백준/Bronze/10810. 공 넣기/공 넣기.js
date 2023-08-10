const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(" ").map(el => +el);
let arr = new Array(N).fill(0);

// i = 줄 (공 넣는 횟수)
for(let i = 1; i <= M; i++){
  let [start, end, K] = input[i].split(" ").map(el => +el);
  for(start; start <= end; start++){
    // start~end까지 k할당
    arr[start - 1] = K;  
  } 
}

// 문자로 변환
console.log(arr.join(" "));