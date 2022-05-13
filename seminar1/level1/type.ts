export{};

let name: string = '황서경';
console.log(name);

let grade: number = 4;
let isDeleted: string = 'false';

const numm = (x: number, y: number): number => {
    return x * y;
}

//const ages: number[] = [1, 2, 3, 4, 5]; 
let ages: Array<number> = [1, 2, 3, 4, 5]; // 제네릭 배열 타입

//const strArray: string[] = ['hi', 'hello'];
const strArray: Array<string> = ['hi', 'hello'];

const objArr: Array<object> = [
    { item: 'value'}, 
    { item: 'value2'}
];

const f1 = (obj: object): void => {
    console.log(obj);
}

const f2 = (obj: Object): void => {
    console.log(obj);
}

f2(1);
f2('hihi');

const div = (x: number, y: number) => {
    return x / y;
}

let p: null = null;
let u: undefined = undefined;
// let x: null = 2;  // 오류 발생(2는 null타입이 아님)

// angle-bracket 타입 단언 (형변환과 유사)
let name3: any = "황서경";  // any는 마법 (아무 타입이나 가능)
let name3Length: number = (<string>name3).length;
console.log(name3Length);

// as
let name4: any = '서버';
let name4Length: number = (name4 as string).length;

const unknown: any = {
    name: '황서경',
    age: 23,
    organization: 'SOPT',
    completion: [28, 29]
}
console.log(unknown);