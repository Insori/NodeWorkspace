let express = require('express');
let ejs = require('ejs');
let path = require('path');
let mysql = require('mysql');

let dbconn = mysql.createConnection( {
    user : 'root',
    password : '1234',
    database: 'mirimdb'
});

let todoArr = [];

let app = express();

app.use(express.static('public'));  // pulbic 폴더 공유
app.use(express.urlencoded({ extended: false }));  // 사용자 html 입력
app.set('views', path.join(__dirname, 'views'));    // 뷰 폴더
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/ get이 시작됨~~');
    //dbconn.connect();   //mirimdb 연결
    dbconn.query('select * from todotbl', (err, result) => {
        if(err) {
            console.log('db select error '+err);
        } else {
            console.dir(result);
            res.render('list', {datalist: result}); //list.ejs에 결과를 보냄
        }
    });
    //dbconn.end();   //mirimdb 연결을 끊음
    // res.render('list', { datalist: todoArr });   // list.ejs 화면에 출력
});

//insert uri get방식
app.get('/insert', (req, res) => {
    console.log('insert get...');
    res.render('insert');   //insert.ejs
});

//insert uri post방식
app.post('/insert', (req, res) => {
    console.log('insert get...');
    dbconn.query('insert into todotbl(id, contents, yesno) values(null, ?, ?)', 
    [req.body.contents, req.body.yesno], 
    (err, results) => {
        if(err) {
            console.log('db insert error '+err);
        } else {
            console.log(`insert Ok... ${req.body.contents} ${req.body.yesno}`);
            res.redirect('/');
        }
        
    });
});

app.get('/delete/:id', (req, res) => {
    dbconn.query('delete from todotbl where id = ?',
    [req.params.id],
    (err, results) => {
        if(err) {
            console.log('delete error '+err);
        } else  {
            console.log(`delete Ok... ${req.params.id}`);
            res.redirect('/');
        }
    });
});

app.get('/edit/:id', (req, res) => {
    dbconn.query('select * from todotbl where id = ?',
    [req.params.id],
    (err, results) => {
        if(err) {
            console.log('edit error '+err);
        } else {
            console.log('update get...'+req.params.id);
            res.render('edit', {data:results[0]});
        }
    });
});

app.post('/edit/:id', (req, res) => {
    dbconn.query('update todotbl set contents = ?, yesno = ? where id = ?',
    [req.body.contents, req.body.yesno, req.params.id],
    (err, results) => {
        if(err) {
            console.log('edit update error '+err);
        } else {
            console.log('edit update ok %d', req.params.id);
            res.redirect('/');
        }
    });
});

app.listen(3000, () => {
    console.log("3000 포트 서버가 시작됨");
});