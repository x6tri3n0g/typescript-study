# TypeScript 마스터 with Webpack & React

https://www.udemy.com/course/typescript-with-webpack-react/

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
