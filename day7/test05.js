//비동기 코드 예외처리 : 콜백함수 첫 번째 매개 변수 error 활용
const fs = require('fs');

fs.readFile('intput.txt', (error, data) => {
    if(error) { //에러가 발생하면
        console.log("error 발생");
        console.log(error); //에러에 대한 정보 출력
    } else {
        console.log(data);
        console.log(data.toString());
    }
});