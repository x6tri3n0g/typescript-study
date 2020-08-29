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

<br />
<br />

### Reducer Sample 구현하기

<br />

ReducerSample 파일을 작성해봅시다.

<br />

```
import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count // count가 자동완성되며, number 타입인걸 알 수 있습니다.
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text // text가 자동완성되며, string 타입인걸 알 수 있습니다.
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood
      };
    default:
      throw new Error('Unhandled action');
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true
  });

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }); // count 를 넣지 않으면 에러발생
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); // text 를 넣지 않으면 에러 발생
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' }); // orange 를 넣지 않으면 에러 발생
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
```

<br />

이렇게 상태값이 객체로 이루어져 있고여러 타입의 값들이 들어가있다면 `State`라는 타입을 만들었듯이 이에 대한 타입을 정의해주면 됩니다. 

<br/>

이번에 작성한 코드에는 type 뿐만 아니라 `count`, `text`, `color`와 같은 추가적인 값들이 있었습니다. 이러한 상황에서 `Action`이라는 타입스크립트 타입을 정의함으로써 리듀서에서 자동완성이 되어 개발에 편의성을 더해주고 액션을 디스패치하게 될 때에도 액션에 대한 타입검사가 이루어져 사전에 사소한 실수들을 예방할 수 있습니다.

<br />
<br />
<br />

## useRef
 
`useRef`는 우리가 리책트 컴포넌트에서 외부 라이브러리의 인스턴스 또는 DOM을 특정 값 안에 담을 때 사용합니다. 추가적으로, 이를 통해 컴포넌트 내부에서 관리하고 있는 값을 관리할 때 유용하죠. 단, 이 값은 렌더링과 관계가 없어야 합니다.

<br />

### 변수 값 관리하기
타입스크립트 환경에서 `useRef`를 통해 어떤 변수 값을 관리하고 싶을 땐 다음과 같은 코드를 작성합니다.

<br />

```
const id = useRef<number>(0);
const increaseId = () => {
    id.current += 1;
}
```

<br />

`useRef`를 쓸땐 위와 같은 코드처럼 Generics를 통해 `~.current`의 값을 추론 할 수 있습니다.

<br />
<br />

### DOM 관리하기
ref 안에 DOM을 담을 때도 마찬가지입니다. 단, 초깃값은 `null`로 설정해주세요. 한번 MyForm 컴포넌트를 열어서, `handleSubmit` 이벹느가 등록됐을 때 첫번째 인풋에 포커스가 잡히도록 수정해보겠습니다.

<br />

```
import React, { useRef, useState } from 'react';

type MyFormProps = {
    onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        name: '',
        description: '',
    });

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: '',
        }); // 초기화
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={name}
                onChange={onChange}
                ref={inputRef}
            />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;
```

<br />

`inputRef` 쪽 코드를 보면 다음과 같이 Generic으로 `HTMLInputElement` 타입을 넣어주었습니다.

<br />

```
const inputRef = useRef<HTMLInputElement>(null);
```

<br />

추후 `ref`를 사용 할 때 어떤 타입을 써야 하지?라는 의문이 들것입니다. 그럴 땐, 에디터 상에서 커서를 원하는 DOM 위에 올려보세요. 그러면, 어떤 타입을 써야하는지 쉽게 알 수 있습니다.

<br />

추가적으로, `inputRef.current` 안의 값을 사용하려면 `null` 체킹을 해주어야합니다. 즉, 특정 값이 정말 유효한지 유효하지 않은지 체크하는건데요. 타입스크립트에서 만약 어떤 타입이 `undefined` 이거나 `null`일 수 있는 상황에서는, 해당 값이 유효한지 체킹하는 작업을 꼭 해주어야 자동완성도 잘 이루어지고, 오류도 사라집니다.

직접 테스트 해보면 인풋에 값을 입력하고 등록버튼을 누르게 되면 인풋이 Reset되고 첫번째 인풋에 포커스가 잡히는 것을 확인할 수 있습니다.

<br />
<br />
<br />

## 정리
- `useState`를 사용 할 때는 `useState<string>`과 같이 Generics를 사용합니다.
- `useState`의 Generics는 상황에 따라 생략할 수도 있는데, 상태가 `null`인 상황이 발생할 수 있거나, 배열 또는 까다로운 객체를 다루는 경우 Generics를 명시해야합니다.
- `useReducer`를 사용할 때는 액션에 대한 타입스크립트 타입들을 모두 준비해서 `|` 문자를 사용하여 결합시켜야합니다.
- 타입스크립트 환경에서 `useReducer`를 쓰면 자동완성이 잘되고 타입체킹도 잘 됩니다.
- `useRef`를 사용 할 때는 Generics로 타입을 정합니다.
- `useRef`를 사용하여 DOM에 대한 정보를 담을 때는, 초깃값을 `null`로 설정해야 하고 값을 사용하기 위해서 `null` 체킹도 해주어야 합니다.
