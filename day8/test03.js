//노드에 기본으로 들어있는 http 모듈을 사용하여 웹 서버 객체 만듦
let http = require('http');

let server = http.createServer();

let port = 3000;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. %d', port);
});