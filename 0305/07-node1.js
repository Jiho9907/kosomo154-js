console.log("안녕하세요 반갑습니다.");

const fs = require('fs');
const input = fs.readFileSync(
    process.platform === "linux" ? 
    "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");

var result = parseInt(input[0])+parseInt(input[1]);
console.log(result);

// platform은 운영체제
// toString() 아스키코드를 문자열로 변환
// trim() 앞 뒤의 공백제거
// split (" ") 공백기준으로 문자열 나뉨
// split ("\r\n") 개행(enter) 기준으로 문자열 나뉨 (윈도우 기반)
// ** 백준 알고리즘 사이트에서 제출시에는 \r을 지워야함(리눅스 기반)


// console.log(input);
// console.log(typeof input);

// console.log(input[0]);
// console.log(input[1]);


