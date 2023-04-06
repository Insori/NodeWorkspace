//콜백함수: 함수를 파라미터로 전달했을 때 특정 시점에 그 함수를 실행시켜 주는 경우

function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

add(10, 20, function(result) {
    console.log("파라미터로 전달된 콜백 함수 호출됨")
    console.log('더하기 (10, 20)의 결과 : ' + result);
});

//add2 화살표 함수로 만들어서 실행
let add2 = (a, b, callback) => {
    let result = a + b;
    callback(result);
}

add2(20, 30, (result) => {
    console.log('화살표 함수 파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기 (20, 30)의 결과 : '+result);
});