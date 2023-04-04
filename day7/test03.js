//textfile.txt 파일을 생성해서 읽어오기
//fs.readFile(파일이름, 콜백함수(err, data)) - 비동기적으로 파일을 읽어들임

const fs = require('fs');   //File System 모듈 불러오기
const async = require('async');
const { Console } = require('console');

fs.readFile('textfile.txt', (error, file) => {  //textfile.txt 데이터가 file 변수에 들어감
    console.log(file);
    console.log(file.toString());
});

async.parallel([
    (callback) => { fs.readFile('a.txt', callback); },
    (callback) => { fs.readFile('b.txt', callback); },
    (callback) => { fs.readFile('c.txt', callback); }
], (error, data) => {
    if(error) {
        console.log("에러 발생");
        console.log(error);
    } else {
        console.log(data.toString());
    }
});
