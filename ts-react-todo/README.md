# TypeScript + React + TodoList

> 혼자서 만들어보는 `TS` + `React` Todo List

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
