// console.log('Hello');

// setTimeout(function (){
//     console.log('Bye');
// }, 3000)

// console.log('Hello again');

function print() {
    console.log('print');
}

function printImmediately(print) {
    print();
}

printImmediately(print);

/** 지금은 deprecated 된 callback request
 * const request = require('request');
 * request('http://www.google.com', function(error, response, body) {
 * console.error('error', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
})
*/

/**Callback Hell:
 * callback func 안에 또 callback func 이 반복되면 가독성 down, 실수 잦아짐
 * => 힘들어지는 유지 보순
 */

