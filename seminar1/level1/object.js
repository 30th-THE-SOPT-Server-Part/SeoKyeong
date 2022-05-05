const sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'ios'],
    president: '황서경',
    introduce: function () {
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`);
        });
    }
}

console.log(sopt.group);
sopt.introduce();

console.log(sopt.season);

let array = [1, 2, 3, true, 'hi'];
let arr2 = Array(4, null, {item: 'item'});

array.map(item => console.log(item));
arr2.map(item => console.log(item));

let array2 = [        // array 안에 object
    {
        name: '황서경',
        age: 5
    },
    {
        name: '황진하',
        age: 16
    }
];

console.log(array2);
console.log(typeof array2);

/*
function menu(dinner) {    // 함수 선언식
    return `오늘 메뉴는 ${dinner} 입니다.`;
}

const str2 = menu('삼겹살');
console.log(str2);
*/

// 함수 표현식
const menu = (dinner) => {
    return `오늘 메뉴는 ${dinner} 입니다.`;
}

const str2 = menu('곱창');
console.log(str2);

const func = (num) => {
    return num * num;
}

const multiple = (func, num) => {
    console.log(func(num));
}

multiple(func, 3);

//let a = 2;
//let b = a++;
//let b = ++a;
//console.log(b);

let a = 2 + 3;
let b = 2 * 3;
let c = 3 - 2;
let d = 4 / 2;

console.log(a, b, c, d);

let x = 5;
console.log(typeof x);
if (a === x) {
    console.log('a === x');
}

let y = '5';
if (a == y) {
    console.log('a === y');
}

// 6 / 2의 나머지
if (b % d == 0) {
    console.log(b % d);
    console.log('나머지 0');
}

// and or
if (a === 5 && d === 2) {
    console.log('hi');
}

if (a === 4 || d === 2) {
    console.log('or');
}

console.log(typeof a);  // number
if (typeof a === 'number') {
    console.log(a);
}