"use strict";
// 기본적인 sum() 함수
function sum(x, y) {
    return x + y;
}
sum(1, 2);
// 숫자 배열을 모두 더하는 함수
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
// 반환값이 없는 함수
function returnNothing() {
    console.log("I'm just saying hello world~");
}
