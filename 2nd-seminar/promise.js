/** new Promise(executor)
 * executor callback? : resolve 와 reject를 파라미터로 갖는 콜백 함수

const promise = new Promise(function(resolve, reject){
    // network, read files..
})

const promise = new Promise((resolve, reject) => {
    // network, read files..
})
*/

// Fulfilled: 작업이 성공적으로 완료된 상태
// resolve 함수를 호출하면 fulfilled 상태가 됨
// then()을 통해서 결과를 전달.

const promise = new Promise(function(resolve, reject) {
    const age = 19;
    if(age > 20) {
        resolve(age);
    } else {
        reject(new Error('나이가 너무 어립니다.'));
    }
});

promise //
    .then(function (resolvedData) {
        console.log(resolvedData);
})
    .catch(function (err) {
        console.log(err);
});

// Rejected: 작업이 실패한 상태, reject()함수를 호출하면 rejected 상태가 됨
// rejected는 catch를 통해서 전달됨

