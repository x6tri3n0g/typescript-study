# TypeScript Basic

<br />

> [Velopert님의 타입스크립트 기초 연습](https://velog.io/@velopert/typescript-basics)을 참고합니다.

<br />

## TypeScript 설정파일 생성하기

```
$ mkdir ts-practice
$ cd ts-practice
$ yarn init -y # 또는 npm init -y

```

그 다음 TypeScript 설정파일인 `tsconfig.json`을 만들고 설정합니다.

<br />

파일을 설정하는 방법에는 두 가지 방법이 있는데요.
(1) 직접 파일을 만들고 작성하는 방법
(2) 명령어를 통해 파일을 생성하는 방법이 있습니다.

<br />

#### 명령어를 통해 tsconfig.json을 생성하기

`yarn` 또는 `npm`을 통해 설치를 할 수 있는데요. 먼저 typescript를 글로벌로 설치해줍니다.

```
$ yarn global add typescript # 또는 npm install -g typescript
```

그리고 프로젝트 디렉토리에서

```
$ tsc --init
```

을 실행해줍니다.
그럼 간단하게 아래와 같은 파일이 생성됩니다.

<br />

> tsconfig.json

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}

```

<br />

만약 글로벌 설치가 싫다면 아래 명령어를 통해 설치가 가능합니다.

```
$ npx tsc --init
```

<br />

#### tsconfig.json 파일 알아보기

tsconfig.json 파일에서는 TypeScript가 컴파일될 때 필요한 옵션을 지정합니다. 명령어를 통해서 설정한 파일 내에서 어떤 속성들이 지정되어 있는지 알아보겠습니다.

-   **target** : 컴파일된 코드가 어떤 환경에서 실행될 지정의합니다. 예를 들어 target을 `es5`설정한 뒤 화살표함수(Arrow Function)을 사용한다면 일반 function으로 변환하여 사용합니다. 이를 `es6`로 사용한다면 화살표함수는 유지됩니다.
-   **module** : 컴파일된 코드가 어떤 모듈 시스템을 사용할지 결정합니다. 예를 들어 이 값을 common으로 하면 `export default Sample`을 하게 되었을 때 컴파일된 코드에서는 `export.default = helloworld`로 변환해주지만 이 값을 `es2015`로 해주면 `export default Sample`을 그대로 유지합니다.
-   **strict** : 모든 타입 체킹 옵션을 활성화한다는 의미입니다.
-   **esModuleInterop** : commonjs 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있도록 해줍니다.

<br />

현재 설정된 파일에서 `outDir`을 추가해줍니다. 이를 설정하면 설정된 디렉토리로 컴파일된 파일이 저장됩니다.

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  }
}
```

<br />

## TypeScript 파일 생성하기

프로젝트 디렉토리 안에 `src` 폴더를 생성하고 `practice.ts` 파일을 생성합니다.

> ./src/practice.ts

```
const message: string = 'hello world';
console.log(message);
```

<br />

TypeScript는 이렇게 `*.ts`와 같은 형식을 사용합니다. message에 선언된 코드를 보시면 `: string`과 같이 작성되어 있는 것을 볼 수 있습니다. 이는 변수에 string 값을 사용한다고 분명히 명시해주는 것입니다. 따라서 string 값 이외의 값을 입력하게 되면 Error을 발생시킵니다.

<br />

#### TypeScript 컴파일 하기

코드를 모두 작성했다면 프로젝트 디렉토리에서 아래 명령어를 실행시켜보세요.

```
$ tsc # npx tsc
```

그러면 ./dist에 `practice.js` 파일이 생성됩니다.

```
"use strict";
var message = 'hello world';
console.log(message);
```

<br />

이 처럼 컴파일 과정에서 명시한 타입은 모두 사라지게 됩니다.

<br />

우리는 방금 글로벌로 설치한 TypeScript CLI를 통해 코드를 컴파일 했습니다. 만약 `typescript`를 프로젝트 내에서 사용하기 위해서는 typescript 패키지를 사용해야합니다.
typescript 패키지를 설치합니다.

```
$ yarn add typescript # 또는 npm install --save typescript
```

<br />

그 다음 package.json에서 다음과 같이 `build` 스크립트를 만들고 추후 build 시 사용합니다.

```
{
  "name": "ts-practice",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "ts-node": "^8.4.1",
    "typescript": "^3.6.3"
  },
  "scripts": {
    "build": "tsc"
  }
}
```

<br />

이제 빌드 시에는

```
$ npm run build # 또는 yarn build
```

할 수 있습니다.

<br />
<br />
<br />

## 기본 타입

`let`과 `const`를 사용하여 특정 값을 선언할 때 여러가지 기본 타입을 지정하는 것을 연습합니다.

```
let count = 0; // 숫자
count += 1;
count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

messages.push(1); // 숫자 넣으려고 하면.. 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
color = 'green'; // 에러 발생!
```

<br />

TypeScript를 사용하면 이 처럼 변수 또는 상수에 타입을 지정할 수 있어 우리가 사전에 지정하지 않은 값이 들어오게되면 에러를 발생시킵니다.
이렇게 에러가 발생한 경우 컴파일이 실행되지 않으며 `tsc` 명령어를 실행시키더라도 컴파일이 실패되었다는 메시지를 발생시킬 것입니다.

<br />
<br />

## 함수에서 타입 정하기

함수에서 타입을 정하는 방법을 알아봅시다.
다음과 같은 코드를 작성합니다.

> ./src/practice2.ts

```
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);
```

이와 같은 코드를 작성하게 되면 `sum()`함수를 호출할 때 메개변수의 타입을 보여줍니다.

<br />

이번에는 숫자의 배열을 모두 더하는 함수를 생성해보겠습니다.

<br />

```
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
```

<br />

타입스크립트를 사용했을 때 편리한 점은 배열의 내장함수를 사용할 때에는 타입 유추가 매우 잘 이루어진다는 것입니다.

<br />

참고로 아무것도 반환하지 않는 함수를 만들 때는 아래와 같은 함수를 생성합니다.

```
function returnNothing(): void {
  console.log('I am just saying hello world');
}
```

함수 return 타입을 지정해주는 부분에 `void`를 입력해줍니다.

<br />
<br />
<br />

## interface 사용해보기

`interface`는 클래스 또는 객체를 위한 타입을 지정할 때 사용하는 문법입니다.

<br />

#### 클래스에서 interface를 implement하기

지금부터 `interface`를 통해 클래스 특정 조건을 만들고, 요구사항을 설정합니다. 그리고 클래스를 선언 할 때 `implement` 키워드를 사용하여 해당 클래스가 `interface`의 요구사항을 구현한다는 것을 명시합니다.

<br />

> practice3.ts

```
// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.

  radius: number; // 멤버 변수 radius 값을 설정합니다.

  constructor(radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});
```

<br />

결과를 보기 위해서는 프로젝트 폴더에서

```
$ npx tsc
```

를 실행하고 /dist 폴더의 practice3.js 파일을 실행합니다.(`node ./dist/practice3.js`)

<br />

기존에 작성했던 Ractangle 클래스 내부 코드를 다시 살펴보겠습니다.

```
width: number;
height: number;

constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
}
```

<br />

이런식으로 `width`, `height` 멤버 변수를 선언한 다음에 `constructor`에서 해당 값들을 하나하나 설정해주었습니다. TypeScript에서는 constructor의 파라미터 쪽에 `public` 또는 `private` accessor를 사용하면 직접 하나하나 설정해주는 작업을 생략할 수 있습니다.

<br />

> accessor을 적용한 practice3.ts

```
// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius); // 에러 없이 작동
console.log(rectangle.width); // width 가 private 이기 때문에 에러 발생!

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});
```

<br />

`public` accessor는 특정 값이 클래스의 밖에서도 조회 가능하다는 것을 의미합니다. 예를 들어 Circle.width에 접근이 가능하다는 말인 거죠. 반면 Ractangle.width에 접근한다면 컴파일 단계에서 에러를 발생시킬 것입니다.

<br />
<br />

## 일반 객체를 interface로 타입 설정하기

이번에는 클래스가 아닌 일반 객체를 interface로 사용하여 타입을 지정하는 방법을 알아보도록 하겠습니다.

<br />

```
interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};
```

<br />

지금보면 Person과 Developer가 상당히 유사해보이죠? 이럴 땐 `interface`를 선언 할 때 다른 `interface`를 `extends`해서 상속받을 수 있습니다.

<br />

> practice4.ts

```
interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

const people: Person[] = [person, expert];
```

<br />
<br />

## Type Alias 사용하기

`type`은 특정 타입에 별칭을 붙이는 용도로 사용합니다. 이를 사용하여 객체를 위한 타입을 설정할 수도 있고, 배열 또는 그 어떤 타입이던 별칭을 지어줄 수 있습니다.

<br />

> practice4.ts

```
type Person = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람'
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];
```

<br />

이번에 `type`과 `interface`를 배웠는데, 어떤 용도로 사용해야할까요? 무엇을 사용하던 상관없지만 프로젝트에는 일관성을 가지고 하나를 사용하시는 것이 가장 좋습니다. 구 버전의 TypeScript에서는 둘의 차이가 존재했지만 현재에는 큰 차이가 없습니다. 다만 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성하게 될 때는 `interface`를 사용하는 것이 권장되고 있습니다.

<br />

## Generics

`Generics`는 TypeScript에서 함수, 클래스, `interface`, `type`을 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야하는 상황에서 사용하는 문법입니다.

<br />

#### 함수에서 Generics 사용하기

예를 들어 우리가 객체A와 객체B를 합쳐주는 merge라는 함수를 만든다고 가정할 때 A와 B가 어떤 타입으로 올지 모르는 경우 `any`라는 타입을 사용할 수도 있습니다.

<br />

```
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
```

<br />

그런데 이런 방식은 TypeScript의 장점인 타입추론을 사용하지 않는 것이나 다름이 없습니다. 결과가 `any`라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것 입니다.
바로 이런 상황에서 `Generics`을 사용합니다. `Generics`아래와 같이 사용합니다.

<br />

> src/practice5.ts

```
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
```

<br />

제네릭을 사용할 때는 이렇게 <T(Type)>처럼 꺽쇠 안에 타입의 이름을 넣어서 사용하며, 이렇게 설정해주면 제네릭에 해당하는 타입에는 뭐든 들어올 수 있게 되면서도, 사용 할 때 타입이 깨지지 않게 됩니다. 만약 함수에 이렇게 제네릭을 사용하게 된다면 **함수의 파라미터로 넣은 실제 값의 타입을 활용**하게 된답니다.
또 다른 예시를 살펴보겠습니다.

<br />

> src/practice5.ts

```
function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);
```

<br />

직접 확인해보면 T의 타입이 깨지지 않고 param: number로 들어간 것을 확인 할 수 있습니다.
이렇게 함수에서 제네릭을 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있습니다.

<br />
<br />

#### interface에서 Generics 사용하기

이번엔 `interface`에서 제네릭을 사용하는 방법을 알아봅시다.

<br />

> src/practice5.ts

```
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};
```

<br />

만약 `Items<string>`이라는 타입을 사용하게 된다면, `Items` 타입을 지니고 있는 객체의 `list` 배열은 `string[]` 타입을 지니고 있게 됩니다. 이렇게 함으로써, `list`가 숫자배열인 경우, 문자열배열인 경우, 객체배열, 또는 그 어떤 배열인 경우에도 하나의 `interface`만을 사용하여 타입을 설정할 수 있습니다.

<br />
<br />

#### Type alias에서 Generics 사용하기

`type`에서 제네릭을 사용하는 방법은 방금 `interface`에서 제네릭을 사용한 것과 매우 유사합니다. 방금 작성했던 코드를 `type`을 사용하는 코드로 변환해보겠습니다.

<br />

> src/practice5.ts

```
type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ['a', 'b', 'c']
};
```

<br />
<br />

## 클래스에서 Generics 사용하기

이번에는 클래스에서 제네릭을 사용해볼까요? Queue라는 클래스를 만들어 봅시다. Queue는 데이터를 등록할 수 있는 자료형이며, 먼저 등록(`enqueue`)한 항목을 먼저 뽑아올 수(`dequeue`) 있는 성질을 가지고 있습니다. 실행활에서 접할 수 있는 간단한 Queue 예시는 대기줄 입니다. 대기줄에서는 (누가 새치기를 하지 않는 이상) 가장 먼저 온 사람이 먼저 들어가죠? 이런 로직이 바로 Queue 입니다.
이 Queue를 TypeScript로 구현해보겠습니다.

<br />

> src/practice6.ts

```
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
```

<br />

해당 코드를 컴파일하고 실행보면 우리가 만든 queue에 들어간 순서대로 숫자들이 나오는 것을 확인할 수 있습니다.
예를 들어 `Queue<string>`이라면 문자열로 이루어진 Queue의 타입이 되겠죠?
