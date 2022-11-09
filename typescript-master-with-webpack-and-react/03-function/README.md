# Function

## 함수 파라미터 애너테이션

```
function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}!`;
}

square(3);
greet('Hyun');
```

TS에서 함수에 인자를 전달할 때는 정해진 인자를 순서와 타입에 맞게 입력하지 않는 경우, 함수를 선언할 때 에러를 보여줍니다.

```
// 잘못된 경우
const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething("ChickenFace", false, 1234);
                        // ^~~~~  ^~~~~ error

// 옳은 경우
const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething("ChickenFace", 78, true);
```

## 기본 파라미터를 이용해 작업하기

기본값을 지정하면 함수의 파라미터에 값을 넣지 않아도 함수를 사용할 수 있습니다.

```
function greet(person: string = "stranger") {
  return `Hi there, ${person}`;
}

greet();  // Hi there, stranger
greet('xtring');  // Hi there, xtring
```

## Return 타입 애너테이션 - Function Return Types

function에 의한 타입이 지정된 반환값을 명시할 수 있습니다.

```
// addNums는 number type을 return 한다.
const  addNums = (x: number, y: number): number => {
  return x + y;
}

addNums(5, 5);  // 10
```

return 애너테이션을 명시함으로서 함수 내부 로직의 복잡도를 생략하고 어떤 결과가 나올 것인지 명백하게 알 수 있습니다.

## 익명 함수 문맥상(Contextual) 타입 지정

-

## Void 타입

함수의 반환값이 없다면 리턴 타입으로 void를 선언할 수 있습니다.

```
const annoyUser = (num: number): void => {
  for (let i = 0; i < num; i++) {
    alert('HIIII!');
  }
}

// void를 명시하지 않아도 상관없다.
```

## Never 타입

Never는 TS의 고유 타입입니다. 흔하게 사용되지는 않습니다.
두가지 케이스에서 사용되는데

1. 함수의 반환 타입으로 쓰이는 경우
2. 절대 반환되지 않아야 할 함수를 애너테이션 처리할 때 사용하는 경우

Never은 함수가 아무것도 반환하면 안 된다는 것을 나타내기 위해 쓰입니다.

```
// A function that doesn't finish running
const neverStop = (): never => {
  while(true) {
     console.log("I'm still going!");
  }
}

// A function that throws an exception
const giveError = (msg: string) => {
  throw new Error(msg);
}
```

절대 끝나지 않는 함수이거나, throw error를 발생시키는 경우 사용합니다.
절대 반환하지 않는 함수의 경우에 사용하는 것입니다.
