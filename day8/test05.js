const express = require('express');

const app = express();  //express(): 서버 어플리케이션 객체를 생성

//request 이벤트 리스너 실행
app.use((request, response) => {    //app.use(): 요청이 왔을 때 실행할 함수를 지정
    response.send('<h1>Hello express</h1>');    //요청하면 응답으로 Hello express를 보냄
});

//서버 실행
app.listen(3001, () => {
    console.log('Server running http://127.0.0.1-3001');
});

