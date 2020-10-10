var variableVar = "123";
var variableVar = "321";

console.log(variableVar);
console.log(`variableVar: ${variableVar}`);

let variableLet = "123";
variableLet = "321";

console.log(`variableLet: ${variableLet}`);

if (true) {
    var x = 'var'
}
console.log(x);

// if (true) {
//     let y = 'let'
// }
// console.log(y)

function colorFunction() {
    if(true) {
        var color = 'blue';
        console.log(color);
    }
    console.log(color);
}
colorFunction();
// console.log(color);

//hoist: 끌어올린다!
//숫자는 다 number로 통일한다

function hoistFunction() {
    console.log(x);
    var x = '123';
    console.log(x);
}

hoistFunction();

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1.description);
console.log(symbol1 === symbol2);

console.log('------------');
const includes = Symbol('커스텀 includes 함수');

Array.prototype[includes] = function() {
    return 'its Symbol';
}

var arr = [1, 2, 3];
console.log(arr.includes(1));
console.log(arr['includes'](1));
console.log(arr[includes]());