# TypeScript + React + TodoList

> 혼자서 만들어보는 `TS` + `React` Todo List

<br />
<br />

## 알게된 것

(1) `types.d.ts`를 사용하면 `export`하지 않아도 전역에서 타입을 사용할 수 있다. 즉, 공통된 type들을 작성하지 않아도 된다.(types decoration file)

```ts
// types.d.ts

type Todo = {
    text: string;
    complete: boolean;
};
```

(2) How to disable `ESLint react/prop-types rule` in a file?

[Solution](https://stackoverflow.com/questions/30948970/how-to-disable-eslint-react-prop-types-rule-in-a-file)

```
// .eslintrc
...
"rules": {
        "react/prop-types": 0
},
...
```

(3) input에서 사용할 onChange 함수 만들기

```ts
import React, { ChangeEvent, useState } from 'react';

...

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
};
```

type 설정 시 `ChangeEvent<HTMLInputElement>`를 사용한다.

(4) 함수에 Type 정의하기

```ts
type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
```

<br />
<br />
<br />

commit @{628150125276c249390c6489d47debd5a233ae0b} 이후 추가 개발

<br />

## 개선 사항

(1) `디렉토리 구성` 변경
(2) `추가 기능` 만들기 - 로컬에서 데이터 관리하기 / 날짜 별 Todo 관리하기 / TodoListItem 삭제 /
(3) `hooks` 적용하기 - Container / Redux 버리기
(4) `styled-components` 적용
(5) `Test Code` 작성 - `Jest`
(6) `Storybook` 사용하기
(7) `Android 앱 출시하기` - RN
(8) `Firebase`로 유저데이터 관리하기 - (추가) Firebase Analytices
(9) `SNS 로그인` 기능
(10) `나의 Todo` 공유하기
(11) `CI/CD` 구성하기 - 배포 시 슬랙에 알리기
(12) `Springboot` 서버 구성하기 >> Repository 새로 구성 후 `AWS`에서 배포
