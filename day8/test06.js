const express = require('express');

const app = express();

app.get('/page/:id', (request, response) => {
    //토큰을 꺼냄
    const id = request.params.id;
    //응답
    response.send(`<h1>${id} Page</h1>`);
});

app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1-52273');
});