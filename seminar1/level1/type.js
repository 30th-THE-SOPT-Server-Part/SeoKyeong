const name = '황서경';
console.log(typeof name);

let age = 23;
console.log(typeof age);

let server = true;
console.log(typeof server);

// 안녕하세요 제 이름은 황서경입니다. 제 나이는 23살 입니다.
console.log(`안녕하세요 제 이름은 ${name}입니다. 제 나이는 ${age}살 입니다.`);

console.log(typeof null);  // 결과: object, 자바스크립트의 버그
console.log(typeof undefined);

let arr = ['안녕', 1, true, 3, 4, 5];  // 타입 상관없이 배열 안에 담을 수 있음

let num = [1, 2, 3, 4];
const newNumArr = num.map(x => x * 2);
console.log(newNumArr);

newNumArr.map(x => {
    console.log(x);
});

for (const x of newNumArr) {
    console.log(x);
}