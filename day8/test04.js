//connection 이벤트와 request 이벤트

let http = require('http');
let server = http.createServer();
let port = 3000;

server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. %d', port);
});

server.on('connection', function(socket) {
    let addr = socket.address();
    console.log('클라이언트가 접속했습니다. %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    //request가 들어오면 화면을 띄우기로
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write(" <title>응답 페이지</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>http 이용 Node.js 응답 페이지</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
    //console.log(req);
});