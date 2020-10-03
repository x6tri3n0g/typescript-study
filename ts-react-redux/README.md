# TypeScript + React + Redux 사용하기

<br />

> [TypeScript환경에서 Redux를 프로처럼 사용하기](https://velog.io/@velopert/use-typescript-and-redux-like-a-pro)를 기반으로 스터디합니다.

<br />
<br />

이 듀토리얼에서는 정말 간단한 리덕스 예시인 카운터와 투두리스트를 만들어 봅니다.

<br />
<br />

## 프로젝트 세팅, 라이브러리 설치하기

```
$ npx create-react-app ts-react-redux-tutorial --typescript
$ cd ts-react-redux-tutorial
$ yarn add redux react-redux @types/react-redux
```

<br />

redux의 경우 자체적으로 TS를 지원하지만 react-redux의 경우 그렇지 않기 때문에 패키지명 앞에 `@types`를 붙인 패키지를 설치해주어야 합니다.
<br />
`@types`는 TS 미지원 라이브러리에 TS 지원을 받을 수 있게 해주는 써드파티 라이브러리입니다. 이와 관련된 소스코드는 [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)라는 GitHub 레포에서 관리되고 있습니다.
<br />
라이브러리에서 공식 TS 지원이 되는지 안되는지 확인하려면 직접 설치 후 불러와서 확인할 수도 있고, GitHub 레포를 열어서 `index.d.ts`라는 파일이 존재하는지 확인해 볼 수 있습니다.

<br />
<br />
<br />

## 카운터 리덕스 모듈 작성하기

간단한 카운터를 작성합니다. 리덕스 코드를 작성 할 때 Ducks 패턴을 사용해 보겠습니다. Ducks 패턴에서는 편의성을 위하여 액션의 `type`, 액션 생성함수, 리듀서를 모두 한 파일에 작성합니다.

<br />

> src/modules/counter.ts

<br />

1. 액션 type 선언

<br />

여기서 `type`은 TypeScript의 type을 의미하는게 아니라 리덕스 액션 안에 들어가게 될 type값입니다.

<br />

type을 선언할 때에는 다음과 같이 문자열 뒤에 `as const`라는 키워드를 붙여줘야 합니다.

<br />

```
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
```

<br />

`as const`는 const assertions라는 TypeScript 문법입니다. 이 문법을 사용하면 우리가 추후 액션 생성함수를 통해 액션 객체를 만들게 되었을 때 type의 TypeScript 타입이 `string`이 되지 않고 실제값을 가르키게 됩니다.

<br />
<br />

2. 액션 생성 함수 선언

<br />

액션 생성 함수를 작성 할 때에는 `function` 키워드를 사용해도 되고, 화살표 함수 문법을 사용해도 됩니다. 화살표 함수 문법을 사용하면 `return`을 생략 할 수 있어서 깔끔하기 때문에 우리는 화살표 함수를 사용하여 선언해보도록 하겠습니다. 아까 작성한 코드 하단에 아래 코드를 작성합니다.

<br />

```
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff,
});
```

<br />

여기서 `increase`와 `decrease`의 경우엔 함수에서 따로 파라미터를 받아오지 않습니다. `increaseBy`의 경우엔 `diff`라는 값을 파라미터로 받아와서 액션의 `payload`값으로 설정해줍니다. 이 과정에서 값의 이름을 `payload`로 바꿔주었는데 이는 [FSA 규칙](https://github.com/redux-utilities/flux-standard-action)을 따르기 위함입니다. 이 규칙을 따름으로써 액션 객체의 구조를 일관성있게 가져갈 수 있어서 추후 리듀서에서 액션을 다룰 때에도 편하고, 읽기 쉽고, 액션에 관련된 라이브러리를 사용할 수도 있게 해줍니다. 다만, 꼭 따라야 할 필요는 없으니 만약 FSA가 불편하면 굳이 이렇게 `payload`라는 이름으로 넣을 필요는 없습니다. 추가적으로 액션 생성 함수들은 추후 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 `export`해줍니다.