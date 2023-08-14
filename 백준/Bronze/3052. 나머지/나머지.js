const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

// map으로 입력 값을 나머지 값으로 변경
// Set = 중복값 제거
let arr = new Set(input.map(x => x % 42)).size;

console.log(arr);