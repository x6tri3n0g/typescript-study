# Introduce

-   [Introduce](#introduce)
    -   [Prerequisites](#prerequisites)
    -   [JavaScript is quirky...](#javascript-is-quirky)
    -   [Types? Type System?](#types--type-system-)
        -   [Why Types?](#why-types-)

## Prerequisites

What do you need to know to get anything out of this course?

-   JavaScript 기초지식
    -   Variables
    -   Functions
    -   Arrays
    -   Conditionals
    -   Objects
    -   Loops
    -   Classes
    -   The DOM
    -   React

## JavaScript is quirky...

```
null * 213 // 0

undefined * 8946 // NaN

const shape = { width: 14, height: 12 };
console.log(shape.heigth);
// undefined
```

오류가 발생하지 않고 undefined만 띄운다.
문제나 오류 없이 작동한다.

하지만, 이것들은 나중에 코드 베이스를 망칠 수 있다.  
이렇게 이상한 결과를 가지고 오는 JS는 옛날에 브라우저에서 스크립팅 기능을 추가하기 위해 단 2주만에 개발되었다. 코드 몇 줄 사용하려고 만들어졌다,

하지만 현재 대부분의 프론트엔드 개발에서는 HTML, CSS는 아주 작은 부분을 차지하고 대부분 JS 코드로 이루어진다.

그래서 많은 개발자들이 몇가지 기능들을 추가해 JS를 개선하려고 했는데 완전히 고치는 건 불가능했다. 결함에 테이프를 덕지덕지 붙인 꼴이이니깐...

그래서 우리는 TypeScript가 필요한데, 그 역할은 JS에서 자주 발생하는 오류나 버그를 잡아주는 역할을 한다. JS로 코딩하는데 더 편리하게 만들어주기 위해 존재한다.

TypeScript는 결국 JS에 Type을 추가해 주는 것이다.
TS는 모든 JS 코드의 슈퍼셋이다. (= 모든 JS 코드는 유효한 TS로 포함된다.)

한 가지 다른 점으로 TS는 타입 시스템을 더한다는 것이다. JS구문을 특별히 개선하는 것인데 버그도 줄이고 개발하기 훨씬 좋게 만든다.

## Types? Type System?

Type System은 많은 언어들에 있는 기능이다. `Static Checking`을 통해 실행하지 않고도 코드 내 오류를 잡아낼 수 있다. 즉, 코드를 실행하는 것은 JS가 할 일이다. TS는 정적으로 검사만 진행하며, 실행 전에 문제가 있는지 알려준다.  
TS는 `Type Checking`(정적 타입 검사)을 통해서, 실행하기 전에 프로그램 데이터의 종류나 타입을 검사한다. 문자열, 숫자, 배열이나 특정한 프로퍼티를 가진 객체 등을 검사한다.

### Why Types?

TypeScript's Type System...

-   Helps us find errors!
-   Analyes our code as we type
-   Only exists in development

: 개발 단계에서 작성과 동시에 분석을 함으로써 에러를 방지한다.
즉, TS는 개발용이고, 개발 후엔 브라우저의 Node.js가 이를 해석할 수 있도록 JS로 컴파일링 한다.
타입은 컴파일링 된 이후 JavaScript 파일에서 보이지 않는다.(= TS는 개발 단계에서만 쓰인다.)

```ts
const shape = { width: 12, height: 5 };
const area = shape.with * shape.heigth; // error: 'height'is declared here.
```

이렇게 실행하지 않아도 오류를 잡아줍니다.

앞서 TS는 JS의 슈퍼셋이라고 했는데, 이말은 JS에서 유효한 모든 건 TS에서도 유효하다라는 말이다. 그리고 TS에서만 쓰이는 추가 구문은 다 타입과 관련이 된다.
