let now = new Date();
console.log(`오늘은 ${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 입니다.`);

let date = new Date();
let hours = date.getHours();

if(hours < 11) {
    console.log("아침 먹을 시간입니다.");
} else {
    if(hours < 15) {
        console.log("점심 먹을 시간입니다.");
    }
    else {
        console.log("저녁 먹을 시간입니다.");
    }
}