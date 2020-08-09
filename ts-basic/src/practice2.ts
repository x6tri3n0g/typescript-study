// 기본적인 sum() 함수
function sum(x: number, y: number): number {
    return x + y;
}

sum(1, 2);

// 숫자 배열을 모두 더하는 함수
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// 반환값이 없는 함수
function returnNothing(): void {
    console.log("I'm just saying hello world~");
}
