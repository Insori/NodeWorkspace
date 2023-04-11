let express = require('express');

let app = express();

app.get('*', (request, response) => {
    console.log(request.query);
    response.send(request.query);
});

app.listen(3000, () => {
    console.log('3000 포트에서 서버 시작');
});