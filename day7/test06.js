const request = require('request');

let url = 'https://www.e-mirim.hs.kr/main.do';
request(url, (error, response, body) => {
    if(error) {
        console.log("request 에러 발생");
        console.log(error);
    } else {
        console.log(body);  //url의 body 부분을 출력
    }
});