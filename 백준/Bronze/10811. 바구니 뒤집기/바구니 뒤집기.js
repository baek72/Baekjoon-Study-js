const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let basket = Array.from({length: N}, (v, i) => i + 1);

for(let i=1; i<=M; i++){
    let [a, b] = input[i].split(' ').map(Number);
    let arr = [];
    for(let j=a-1; j<b; j++){
        // a 부터 b 까지
        arr.push(basket[j]);
    }
    arr.reverse();
    // 배열 중간에 역순요소 추가
    basket.splice(a-1, b-a+1, ...arr);
}
console.log(basket.join(' '));