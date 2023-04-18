let express = require('express');
let fs = require('fs');
let ejs = require('ejs');
let app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    console.log('/ get start');
    fs.readFile('ex01.ejs', "utf-8", (err, data) => {
        if(err) {
            console.log('파일 읽기 에러 ' + err);
        } else {
            res.send(ejs.render(data));
        }
    })
});
app.listen(3000, () => {
    console.log('server starting 3000');
})