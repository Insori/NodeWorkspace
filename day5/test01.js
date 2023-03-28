//객체
//let 객체_이름 = { }

let product = {
    제품명 : '70 건조 망고',
    유형 : '당절임',
    성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지 : '필리핀'
};

console.log(product);

console.log('---------------------------------------------');

//이름, 학번, 전공, 연락처를 가진 학생 객체를 선언하고 출력
let student = {
    이름 : '본인 이름',
    학번 : '3108',
    전공 : '뉴미디어소프트웨어과',
    연락처 : '010-1234-1234'
};

console.log(student);

console.log('---------------------------------------------');

let object = {
    name : '바나나',
    price : 1200,
    print : function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
};

//객체 접근
console.log(object.name + '\t' + object.price);
object.print();