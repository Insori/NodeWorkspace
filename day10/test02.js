const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));

app.get('*', (req, res) => {
    res.send('명령 프롬프트를 확인해주세요.');
});

app.listen(8000, () => {
    console.log('Server runnig at http://127.0.0.1:8000');
})
//실행하면 로그가 뜸