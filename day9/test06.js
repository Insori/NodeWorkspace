let express = require('express');
//let body_parser = require('body-parser'); express 안에 내장되어 있어서 설치할 필요 없음

let app = express();

app.use(express.static('public'));
app.use(express.json());    //json 데이터 활용
app.use(express.urlencoded({extened:false})); //form 본문에 있는 데이터를 encoding함

app.get('*', (request, response) => {
    let output = '';
    output += '<form method="post">';
    output += '<input type="text" name="id"/>';
    output += '<input type="text" name="password"/>';
    output += '<input type="submit"/>';
    output += '</form>';
    response.send(output);
});

app.post('*', (request, response) => {
    console.log(request.body);
    response.send(request.body);
});

app.listen(3000, () => {
    console.log('3000 포트에서 서버 시작');
});