const os = require('os');   //os 모듈을 가져옴 - require() 함수
const url = require('url'); //url 모듈을 가져옴

//os 함수 사용해보기
console.log(os.hostname()); //운영 체제의 호스트 이름을 문자열로 반환
console.log(os.type()); //운영 체제 이름을 반환
console.log(os.arch()); //Node.js 바이너리가 컴파일된 운영 체제 CPU 아키텍처를 반환

//url 함수 사용해보기
let urlObj = url.parse("https://www.e-mirim.hs.kr/main.do");    //URL 문자열을 가져와 구문 분석하고 URL 개체를 반환
console.log(urlObj);