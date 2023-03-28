//객체 배열
let products = [
    {name : '바나나', price : 1200},
    {name : '사과', price : 2000},
    {name : '배', price : 3000},
    {name : '고구마', price : 700},
    {name : '감자', price : 600},
    {name : '수박', price : 5000}
];


//함수를 이용해 출력
function print(fruit) {
    console.log(`${fruit.name}의 가격은 ${fruit.price}원 입니다.`);
};
for (const fruit of products) {
    print(fruit);
}

console.log('---------------------------------');

//products 요소 출력
console.log(products);
for(let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

console.log('---------------------------------');

//key와 value 출력
for(const key in products) {
    console.log(key + '\t' + products[key].name + '\t' + products[key].price);
}

console.log('---------------------------------');

for(const product of products) {
    console.log(product.name + '\t' + product.price);
}