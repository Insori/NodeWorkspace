let express = require('express');
let fs = require('fs');

let app = express();

// '그림 파일 제공하는 path는 /image입니다.' 출력하기
app.get('/', (request, response) => {
    response.send('<h1>그림 파일을 제공하는 path는 /image입니다.</h1>');
});

// /student uri는 자기 학번, 이름, 한 줄 소개 출력하기
app.get('/student', (request, response) => {
    response.send('<h1>3108 인소리</h1>Andy라고 불러주세요');
});

app.get('/image', (request, response) => {
    //파일 읽기
    fs.readFile('jong.jpg', (error, data) => {
        if(error) {
            console.log('파일 읽기 에러');
        } else {
            response.type('image/png');
            response.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log('3000 포트에서 서버 시작');
});