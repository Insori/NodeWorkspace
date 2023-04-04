process.on('exit', () => {
    console.log("이벤트 예, 프로세스가 종료되었습니다.");
});

process.on("uncaughtException", () => { //예외가 발생하면 실행됨
    console.log("이벤트 발생 예외가 발생하였습니다.");
});

//강제 에러 발생 시킴
error.error.error();

//console과 process는 전역 객체가 만들어져 있음