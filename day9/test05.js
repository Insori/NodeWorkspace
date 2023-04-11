let express = require('express');

let app = express();

app.use(express.static('public'));  //static() - public 폴더가 전역 폴더가 됨(공용)
// => public 폴더 안에 있는 사진을 쓸 수 있음

app.get('*', (request, response) => {
    response.send('정적 파일을 활용합니다. /public 폴더 활용');
});

app.listen(3000, () => {
    console.log('3000 포트에서 서버 시작');
});