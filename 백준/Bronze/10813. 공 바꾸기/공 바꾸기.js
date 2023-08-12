const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(" ").map(Number);
// x = 현재값 1, y = 인덱스
// 1 1 1 1 1
// 0 1 2 3 4
let arr = new Array(N).fill(1).map((x, y) => x + y);

// i = 줄 (공 넣는 횟수)
for(let i = 1; i <= M; i++){
  let [A, B] = input[i].split(" ").map(Number);
  // A 복사
  let tmp = arr[A - 1];
  // A에는 B 
  arr[A - 1] = arr[B - 1];
  // B에는 A
  arr[B - 1] = tmp;
}
// 문자로 변환
console.log(arr.join(" "));