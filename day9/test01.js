//모듈 추출
let express = require('express');

//서버 생성
let app = express();

//이벤트 리스너 설정
app.get('*', (request, response) => {   //* - 모든 것
    response.status(404);
    response.set('methodA', 'ABCDE');
    response.send('내 마음대로 본문을 입력합니다.');
});

//서버 실행
app.listen(3002, () => {
    console.log("서버 실행 http://localhost:3002");
});