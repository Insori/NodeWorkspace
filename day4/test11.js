function callTenTimes(callback) {
    for(let i = 0; i < 10; i++) {
        callback(); //아래 함수를 불러옴
    }
}

callTenTimes(function() {   //함수의 매개변수가 함수
    console.log('함수 호출');
})