let express = require('express');

let app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('*', (req, res) => {
    console.log('/ get start');
});
app.post('/login', (req, res) => {
    let id = req.body.id;
    let password = req.body.password;
    if(id == 'Andy' && password == '1234') {
        //로그인 성공
        console.log('환영합니다. Andy님');
    } else {
        console.log('로그인 실패. 다시 입력하십시오.');
    }
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.password);
    res.send(req.body);
});
app.listen(8099, ()=>{
    console.log("8099 포트에서 서버 시작");
});