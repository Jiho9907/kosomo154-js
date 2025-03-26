const fs = require('fs');
const [n, input] = fs.readFileSync(
    process.platform === "linux" ? 
    "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");

console.log(n);
console.log(input.split(' '));

//[n, ...input] 구조분해 할당 --다음 기회에..