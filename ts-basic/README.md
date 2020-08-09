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
