let count = 0;
count += 1;
// count = '문자열';    // ERROR!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // boolean 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1);    // 숫자를 넣으려고 하면 ERROR!

let mightBeUndefined: string | undefined = undefined; // string일 수도 있고 undefined 일 수도 있음
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green';    // ERROR!
