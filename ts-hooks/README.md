# TypeScript + React hooks 사용하기

<br />

> Velopert님의 [타입스크립트로 리액트 Hooks 사용하기 (useState, useReducer, useRef)](https://velog.io/@velopert/using-hooks-with-typescript)을 기반으로 스터디합니다.

<br />
<br />

TypeScript와 React 컴포넌트에서 Hooks을 사용하는 방법을 공부해봅시다.
React 컴포넌트에서 `useState`와 `useReducer`를 사용하여 컴포넌트의 상태를 관리하고 `useRef`를 통해 컴포넌트 내부에서 관리하는 변수 및 DOM을 이용하는 방법에 대해서 알아봅시다.

<br />
<br />

## useState 및 이벤트 관리

<br />

### 카운터 만들기

`useState`를 사용한 상태관리와 이벤트를 다루는 방법을 배워봅시다.

<br />

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
```

<br />

그냥 리액트를 작성하는 것과 별반 다를 것이 없습니다. `useState`를 Generic type으로 `useState<number>(0)`과 같이 사용합니다.
