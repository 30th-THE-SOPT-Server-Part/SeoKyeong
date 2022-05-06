//var name = "황서경";
//var name = "황진하"; // 오류 안남
//console.log(name);

//let name2 = '황서1';
//let name2 = '황서2';  // 오류 발생, const도 마찬가지
//console.log(name2); 

/*
let name3 = '서서서';
name3 = 'bye';
console.log(name3);

const name4 = 'gjgjjg';
name4 = 'hi';
console.log(name4);
*/

var variable1 = "var variable";
var variable1 = "new var variable";
console.log("var: ", variable1);

//const variable3 = "const variable";
//const variable3 = "new const variable";
//console.log("const: ", variable3);

var n = 'hi';
n = 'hi';
console.log("var: ", n);

if (true) {
    var x = 'var variable';
}
console.log(`${x}`);

if (true) {
    const y = 'const variable';
    console.log(y);
}
//console.log(y);

function foo () {
    if (true) {
        var name = "황서경";
        console.log('if - block -'. name);
    }
    console.log('function - block - ', name);
}

//console.log('global  - ', name);   // 함수 내부에서 선언되었으니까 오류남