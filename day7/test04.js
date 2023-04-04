//비동기적으로 파일 쓰기
const fs = require('fs');

fs.writeFile('output.txt', '안녕하세요...!', (error) => {   //실행하면 '안녕하세요...!' 문자열이 쓰여진 output.txt 파일이 생성됨
    console.log("파일 쓰기 완료");
});