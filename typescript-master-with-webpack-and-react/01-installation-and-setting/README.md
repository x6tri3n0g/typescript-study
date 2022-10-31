# Installation and Setting

https://www.typescriptlang.org

## Installation

Download 카테고리에 들어가면 다운로드를 위한 여러 방법을 소개한다.
https://www.typescriptlang.org/download

가장 쉬운 방법은 npm을 이용하는 것이다.

-   node.js가 안 깔려있다면 먼저 설치하라.

그 후에 설치할 디렉토리로 이동하여 아래 명령어를 실행한다.

```
> npm install typscript --save-dev

# But, 우리는 글로벌로 설치할 것이다.

> npm install -g typescript
```

잘 설치되었는지 확인하기 위해서는 아래 명령어를 실행해본다.

```
> tsc -v
Version 4.8.4
```

4.8.4 버전이 설치되었다.

## The TypeScript Playground

설치하지 않아도 TypeScript를 바로 사용해 볼 수 있다.

https://www.typescriptlang.org/play

`Examples`, `TS Config`에 들어가서 여러가지 만져보며 사용해보자.  
코드 작성 후 `Run`을 클릭하여 TS를 실행해보자.

## VSCode + TS

1. TSLint
2. TS snippets

## TS file 만들기

디렉토리에서 새 파일을 만들어 `.ts` 확장자 파일을 생성한다.(`bascis.ts`)

## TS 파일을 JS로 컴파일하기

```
// basics.ts
console.log('hello');
console.log('good bye!!');
Math.round(7.215435473243135432);
```

이제 터미널에서 아래 명령어를 입력합니다.

```
> tsc basics.ts
```

그럼 basics.ts 파일과 동일한 폴더 안에 basics.js 파일이 컴파일 되어 나타납니다.

```
// basics.js
console.log('hello');
console.log('good bye!!');
Math.round(7.215435473243135432);
```

컴파일해도 동이한 형태로 보인다.
왜냐하면 우리는 TS를 아직 제대로 사용하지 않았기 때문에!!

```
// basics.ts
...
let pi: number = 3.145192;
```

위 코드를 컴파일하면?

```
// basics.js
...
var pi = 3.145192;
```

와 같은 결과로 컴파일 됩니다.

큰 변화는 없습니다. 앞서 설명한 것과 같이 TS는 코드의 에러를 캐치하고 바로바로 해결할 수 있도록 도와줍니다. 따라서 우리가 예를 들어 pi에 문자열을 집어넣게 되면 `type error`가 발생할 것입니다.
