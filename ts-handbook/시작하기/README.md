# 시작하기

<br />

> `React`와 `React Native`으로 개발해오며 지금까지 JavaScript(ES6)를 주로 사용해왔습니다. 따라서 `TS for JS Programmer`를 제외한 나머지 Section은 가볍운 정리만 하겠습니다.

<br />
<br />
<br />

## TS for the New Programmer

### JavaScript의 짧은 역사(What is JavaScript? A Brief History)

JS는 처음에 브라우저를 위한 스크립팅 언어로 만들어졌습니다. 그러나 요즘날 많은 개발자들은 오직 JavaScript만을 이용하여 전체 스택을 프로그래밍하고 있습니다.

<br />

JavaScript에는 다양한 별난 점(이상한 점과 놀랄만한 점)이 있으며 이 문제점에서 시작되어 TS가 만들어졌습니다.
예를 들어 JavaScript의 동일 연산자(`==`) 인수를 강제로 변환하여(coerces), 예기치 않은 동작을 유발합니다.

```js
if ('' == 0) {
    // true. why?
}
if (1 < x < 3) {
    // 어떤 x 값이던 true
}
```

<br />

대부분의 프로그래밍 언어는 이런 종류의 오류들을 잡아서 표출해주고, 일부는 코드가 실행되기 전인 컴파일 중에 오류를 표출해줍니다. 작은 프로그램을 작성할 경우에는 이런 이상한 점들이 화를 만들기도 하지만 관리는 가능합니다. 그러나 수백 또는 수천 줄의 어플리케이션을 작성할 경우 이런 지속적 놀라움(이상한 점)들은 심각한 문제입니다.

<br />
<br />

### TypeScript: 정적 타입 검사자(TypeScript: A Static Type Checker)

TypeScript와 JavaScript는 어떤 관계일까요?

#### 구문(Syntax)

TS는 JS 구문이 허용되는, JS의 **상위집합** 언어입니다. 구문은 프로그램을 만들기 위해 코드를 작성하는 방법을 의미합니다. 예를 들어, 다음 코드는 `)`이 없으므로 **구문** 오류입니다.

```js
// @errors: 1005
let a = (4
```

TS는 독특한 구문 때문에 JS를 오류로 보지 않습니다. 즉, 어떻게 작성돼있는지 모르지만 작동하는 JS 코드를 TS 파일에 넣어도 잘 작동합니다.

<br />

#### 타입(Types)

TS는 다른 종류의 값들을 사용할 수 있는 방법이 추가된 타입이 있는 상위 집합입니다.

```js
console.log(4 / []);
```

**구문적으로 옳은(syntactically-legal)** 위 코드는 JS에서 `NaN`을 출력합니다. 그러나 TS는 배열로 숫자를 나누는 연산이 옳지 않다고 판단하고 오류를 발생시킵니다.

```ts
// errors: 2363
console.log(4 / []);
```

이 처럼 TS의 타입 검사자는 일반적인 오류를 최대한 많이 검출하면서 올바른 프로그램을 만들 수 있게 설계되었습니다.
만약 JS 파일의 코드를 TS 코드로 옮기면, 코드를 어떻게 작성했는지에 따라 **타입 오류** 를 볼 수 있습니다. 이는 코드 상의 문제이거나, TS가 지나치게 보수적인 것일 수 있습니다.

<br />

#### 런타임 특성(Runtime Behavior)

> 런타임(Runtime)?
> TS는 JS의 **런타임 특성** 을 가진 프로그래밍 언어입니다. 예를 들어, JS에서 0으로 나누는 행동은 런타임 예외로 처리하지 않고 `Infinity` 값을 반환합니다. 논리적으로, TS는 JS 코드의 런타임 특성을 **절대** 변화시키지 않습니다.

즉, TS가 코드에 타입 오류가 있음을 검출해도, JS 코드를 TS로 이동시키는 것은 같은 방식으로 실행시킬 것을 보장합니다.

JS와 동일한 런타임 동작을 유지하는 것은 프로그램 작동을 중단시킬 수 있는 미묘한 차이를 걱정하지 않고 두 언어 간에 쉽게 전환할 수 있도록 하기 위한 TS의 기본적인 약속입니다.

<br />

#### 삭제된 타입(Erased Types)

계략적으로, TS의 컴파일러가 코드 검사를 마치면 타임을 삭제해서 결과적으로 **"컴파일된"** 코드를 만듭니다. 즉, 코드가 한 번 컴파일되면, 결과로 나온 일반 JS 코드에는 타입 정보가 없습니다.

타입정보가 없는 것은 TS가 추론한 타입에 따라 프로그램의 특성을 변화시키지 않는다는 의미입니다. 결론적으로 컴파일 도중에는 타입 오류가 표출될 수 있지만, 타입 시스템 자체는 프로그램이 실행될 때 작동하는 방식과 관련이 없습니다.

마지막으로, JS는 추가 런타임 라이브러리를 제공하지 않습니다. TS 프로그램은 JS 프로그램과 같은 표준 라이브러리(또는 외부 라이브러리)를 사용하므로, TS 관련 프레임워크를 추가적으로 공부할 필요가 없습니다.

<br />

### JavaScript와 TypeScript 학습(Learning JavaScript and TypeScript)

JavaScript를 배우고 TypeScript를 학습하세요!

<br />
<br />
<br />

## TS for OOP Programmer

✋🏻

<br />
<br />
<br />

## TS for Functional Programmers

✋🏻

<br />
<br />
<br />

## TS for the JS Programmer

<br />

TS는 JS 위에 레이어로서 자리잡고 있는데, JS의 기능들을 제공하면서 그 위에 자체 레이어를 추가합니다. 이 레이어가 TS 타입 시스템입니다.

JS는 이미 `String`, `number`, `object`, `undefined` 같은 원시 타입을 가지고 있지만, 전체 코드베이스에 일관되게 할당되었는지는 미리 확인해 주지 않습니다. TS는 이 레이어로서 동작합니다.

### 타입 추론(Types by Inference)

TypeScript는 JavaScript 언어를 알고 있으며 대부분의 경우 타입을 생성해줄 것이빈다. 예를 들어 변수를 생성하면서 동시에 특정 값에 할당하는 경우, TS는 그 값을 해당 변수의 타입으로 사용할 것입니다.

```js
let helloWorld = 'Hello World';
//   ^?  helloWorld라는 변수는 "Hello World"를 베이스로 타입을 결정합니다.
```

JS가 동작하는 방식을 이해함으로써 TS는 JS 코드를 받아들이면서 타입을 가지는 타입 시스템을 구축할 수 있습니다. 이는 코드에서 타입을 명시하기 위해 추가로 문자를 사용할 필요가 없는 타입 시스템을 제공합니다. 이것이 위의 예제에서 TS가 `helloWorld`가 `String`임을 알게 되는 방식입니다.

<br />

### 타입 정의하기(Defining Types)

JS는 다양한 디자인 패턴을 가능하게 하는 동적 언어입니다. 몇몇 디자인 패턴은 자동으로 타입을 제공하기 힘들 수 있는데 (동적 프로그래밍을 사용하고 있을 것이기 때문에) 이러한 경우에 TS는 타입이 무엇이 되어야 하는지 명시 가능한 JS 언어의 확장을 지원합니다.

<br />

다음은 `name: string`과 `id: number`을 포함하는 추론 타입을 가진 객체를 생성하는 예제입니다.

```ts
const user = {
    name: 'Hayes',
    id: 0,
};
```

이 객체의 형태를 명시적으로 나타내기 위해서는 `interface`로 선언합니다.

```ts
interface User {
    name: string;
    id: number;
}
```

이제 변수 선언 뒤에 `: TypeName`의 구문을 사용해 JS 객체가 새로운 `interface`의 형태를 따르고 있음을 선언할 수 있습니다.

```ts
interface User {
    name: String;
    id: number;
}
// ---cut---
const user: User = {
    name: 'Hayes',
    id: 0,
};
```

해당 인터페이스에 맞지 않은 객체를 생성하면 TS는 **경고** 를 줍니다.

```ts
//@errors: 2322
interface User {
    name: string;
    id: number;
}

const user: User = {
    username: 'Hayes', // User에서 정의한 객체 요소가 아닙니다!
    id: 0,
};
```

JS는 클래스와 객체 지향 프로그래밍을 지원하기 때문에, TS 또한 동일합니다. - 인터페이스는 클래스로도 선언할 수 있습니다.

```ts
interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount('Murphy', 1);
```

인터페이스는 함수에서 매개변수와 리턴 값을 명시하는데 사용되기도 합니다.

```ts
//@noErrors
interface User {
    name: string;
    id: number;
}

// ---cut---
function getAdminUser(): User {
    // ...
}

function deleteUser(user: User) {
    // ...
}
```

JavaScript에서 사용할 수 있는 적은 종류의 원시 타입이 있습니다. `boolean`, `bigint`, `null`, `number`, `string`, `symbol`, `object`와 `undefined`는 인터페이스에서 사용할 수 있습니다.
TS는 몇 가지 타입을 추가해 인터페이스를 확장했습니다. 예를 들어, `any`(어떤 타입이든 허용합니다.), `unknown`(이 타입을 사용하는 사람이 어떤 타입으로 선언했는가 확인하세요.), `never`(이 타입은 발생될 수 없습니다.), `void`(`undefined`를 리턴하거나 리턴 값이 없는 함수입니다.)가 있습니다.

타입을 구축하기 위한 두 가지 구문이 있다는 것을 알 수 있을 것입니다. Interfaces and Types - `interface`를 우선적으로 사용하고 특정기능이 필요한 경우에만 `type`를 사용해야합니다.

-   내용을 덧붙여 둘중 어느 것을 사용던 프로젝트에서 통일성있게 사용하는 것이 중요합니다.

<br />

### 타입 구성(Composing Types)

객체들을 조합하여 더 크고 복잡한 객체를 만드는 방법과 유사하게 TS에 타입으로 이를 수행하는 도구가 있습니다. 여러가지 타입을 이용하여 새 타입을 작성하기 위해 일상적인 코드에서 가장 많이 사용되는 두 가지 코드로는 `유니언(Union)`과 `제네릭(Generic)`이 있습니다.

#### 유니언(Unions)

<br />
<br />
<br />

## 5분안에 보는 TypeScript
