let express = require('express');
let fs = require('fs');
let ejs = require('ejs');
let app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//ejs 모듈 추가
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    console.log('/ get start');
    res.render('ex03', {
        jemok : 'ejs 제목 데이터',
        count : 4,
        no : '3010',
        name : 'Andy'
    }); //확장자 안 써도 됨
    // fs.readFile('ex03.ejs', "utf-8", (err, data) => {
    //     if(err) {
    //         console.log('파일 읽기 에러 ' + err);
    //     } else {
    //         res.send(ejs.render(data));
    //     }
    // })
});
app.get('/login', (req, res) => {
    console.log('/login get...');
    fs.readFile('login.ejs', "utf-8", (err, data) => {
        if(err) {
            console.log('login.ejs 파일 읽기 에러 '+err);
        } else {
            res.send(ejs.render(data));
        }
    })
})
app.post('/login', (req, res) => {
    let inId = req.body.id;
    let inPass = req.body.password;
    console.log('입력한 값 '+inId+inPass);
    if(inId == 'Andy' && inPass == '1234') {
        console.log('로그인 성공');
        res.redirect('/');
    } else {
        console.log('로그인 실패'+inId+inPass);
        res.redirect('/login');
    }
})
app.listen(3000, () => {
    console.log('server starting 3000');
})