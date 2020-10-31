function wakeUp() {
    wash();
    console.log('일어나기');
}
function wash() {
    breakfast();
    console.log('세수하기');
}
function breakfast() {
    console.log('아침 식사하기');
    //throw new Error ('콜스택에서 에러 찾기 테스트');
}

wakeUp();

/**
 * js는 single thread 프로그래밍 언어, 단일 호출 스택 => 한번에 하나의 일만 처리할 수 있음
 * call Stack이 쌓이는 순서의 역순으로 실행됨
 */

console.log('===========')

/** 어떤 시점에서 스택의 실제 크기를 초과하게 되는 오류 발생, 함수 종료
    function foo() {
        foo();
    }
    foo();
*/

console.log('start');
setTimeout(() => {
    console.log('wait 3 seconds');
}, 3000);
console.log('end');