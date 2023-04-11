let express = require('express');
const request = require('request');

let app = express();

app.get('*', (request, response) => {
    response.redirect('http://www.naver.com');  //해당 주소로 이동
});

app.listen(3000, () => {
    console.log('3000 포트에서 서버 시작');
});