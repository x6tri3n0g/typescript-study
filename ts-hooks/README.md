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
`useState`를 사용할 때는 Generics를 사용하지 않더라도 알아서 타입을 유추하기 때문에 생략해도 상관없습니다! 그래서 사실상 타입을 지정하지 않아도 상관없습니다. 그렇다면 `useState`는 어떤 상황에서 Generics를 사용해야할까요?

<br />

바로 state가 `null`일 수도 있고 아닐 수도 있을 때 Generics를 사용하면 좋습니다.

<br />

```
type Information = { name: string; description: string };
const [info, setInformation] = useState<Information | null>(null);
```

<br />

추가적으로 상태의 타입이 까다로운 구조를 가진 객체나 배열일 때는 Generics를 명시하는 것이 좋습니다.

<br />

```
type Todo = { id: number; text: string; done: boolean };
const [todos, setTodos] = useState([] as Todo[]);
```

<br />

여기서 사용된 `as`는 [Type Assertion](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)이라는 문법이며, 특정 값이 특정 타입이다라는 정보를 덮어쓸 수 있는 문법입니다.

<br />
<br />

### 인풋 상태관리하기

인풋(Input)의 상태관리를 해보겠습니다. 이벤트를 다뤄야하기 때문에 타입을 지정하는 것이 처음에는 어떻게 해야할지 헷갈릴 수 있습니다.

<br />

> src/MyForm.tsx

```
import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = (e: any) => {
    // e 값을 무엇으로 설정해야할까요?
    // 일단 모를떄는 any 로 설정합니다.
  };

  const handleSubmit = (e: any) => {
    // 여기도 모르니까 any 로 하겠습니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
```

<br />

여기서 e 객체의 타입이 무엇일지, 타입스크립트를 처음 사용한다면 잘 모를 수도 있습니다. 그렇다고해서 e 객체의 타입이 무엇인지 외울 필요는 없습니다. 그냥 `onChange`에 커서를 올려봅니다.

<br />

함수에 커서를 올리면 어떤 타입을 사용해야하는지 알 수 있습니다. 그럼, `onChange`의 e 객체의 타입을 `React.ChangeEvent<HTMLInputElement>`로 지정해서 구현합니다.

<br />

> src/MyForm.tsx

```
import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    }); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
```

<br />

> App.tsx

```
import React from 'react';
import MyForm from './MyForm';

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
};

export default App;
```

<br />

잘 작동합니다!

<br />
<br />
<br />

## useReducer

타입스크립스트에서 `useReducer`를 사용해봅시다.

<br />

### 카운터를 useReducer로 구현하기

위에서 `useState`로 만들었던 Counter.tsx를 `useReducer`로 만들어보겠습니다.

<br />

> src/Counter.tsx

```
import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

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

`Action`에서 | 문자를 사용했는데 이 문자는 `OR`를 의미합니다.
결국 해당 라인의 코드는 Action이 { type: 'INCREASE' } 또는 { type: 'DECREASE' }라는 것을 명시해줍니다.

<br />

위 코드의 `reducer` 함수의 맨 윗줄을 확인해봅시다.

<br />

```
function reducer(state: number, action: Action): number
...
```

<br />

위 코드를 확인해보면 `state`의 타입과 함수의 리턴 타입이 동일한 것을 확인할 수 있습니다. 리듀서를 만들 때는 이렇게 파라미터로 받아오는 상태의 타입과 함수가 리턴하는 타입을 동일하게 해주는 것이 중요합니다. 이렇게 리턴 타입과 상태와 타입을 동일하게 설정할 때 실수를 없앨 수 있습니다.(예 : 특정 케이스에 결과값을 반환하지 않았거나, 상태의 타입이 바뀌게 되었을 경우 에러를 감지할 수 있습니다.)

<br />

지금은 액션에 `type`값만 있기 때문에 굉장히 간단합니다. 만약 액션 객체에 필요한 다른 값들이 있는 경우엔 다른 값들도 타입 안에 명시를 해주면 추후 리듀서를 작성할 때 액션 객체 안에 무엇이 필요한지 자동완성을 통해 알 수 있습니다. 추가적으로, 새로운 액션을 디스패치할 때도 액션에 대한 타입스크립트 타입 검사도 해줄 수 있습니다.