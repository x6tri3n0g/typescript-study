# TypeScript 환경에서 React Context API 사용하기

<br />

> 이 스터디를 통해서 TypeScript와 Context API를 제대로 활용하는 방법에 대해서 알아보겠습니다. Context API를 사용함에 있어서, 코드 구조를 어떻게 가져갈 지에 대해서는 딱히 정해진 방법이 없습니다. 모든 내용은 [TypeScript 환경에서 리액트 Context API 제대로 활용하기](https://velog.io/@velopert/typescript-context-api)을 기반해서 작성합니다.

<br />
<br />

## 프로젝트 세팅

<br />

먼저, Context API를 연습해볼 TypeScript가 적용된 React 프로젝트를 준비합니다.

```
$ npx create-react-app ts-context-api --typescript
```

<br />

우리는 Context API를 활용하여 투두리스트를 만들어보겠습니다. Context API를 활용하기 전에, 컴포넌트 몇가지를 미리 만들어보겠습니다.

<br />

-   `TodoForm.tsx` : 새 할 일을 등록할 때 사용
-   `TodoItem.tsx` : 할 일에 대한 정보를 보여줌
-   `TodoList.tsx` : 여러 TodoItem들을 렌더링해줌

<br />

src 디렉터리에 components 디렉터리를 만들고, 그 안에 위 컴포넌트들을 하나씩 만들어보겠습니다.

<br />
<br />

> src/components/TodoForm.tsx
> TodoForm 컴포넌트는 새 항목을 등록 할 수 있는 컴포넌트입니다. 이 컴포넌트에서는 하나의 input과 하나의 button을 렌더링합니다. input의 value값은 `useState`를 통해서 관리하도록 하겠습니다. 추가적으로, submit 이벤트가 발생 했을 때는 새 항목을 생성하고 value값을 초기화 해줄건데요, 새 항목을 생성하는 부분은 추후 구현해주겠습니다.

<br />

```
import React, { useState } from 'react';

function TodoForm() {
    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: 새 항목 생성하기
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                placeholder="무엇을 하실 건가요?"
                onChange={(e) => setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    );
}

export default TodoForm;
```

<br />

> src/components/TodoItem.tsx
> TodoItem 컴포넌트는 할 일 항목에 대한 정보를 보여주는 컴포넌트입니다. props로는 `todo` 객체를 받아옵니다. 만약 `todo.done`값이 참이라면 `done` CSS 클래스를 적용합니다.

<br />

```
import './TodoItem.css';

import React from 'react';

export type TodoItemProps = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
};

function TodoItem({ todo }: TodoItemProps) {
    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text">{todo.text}</span>
            <span className="remove">(X)</span>
        </li>
    );
}

export default TodoItem;
```

<br />

> src/components/TodoItem.css

```
.TodoItem .text {
    cursor: pointer;
}

.TodoItem.done .text {
    color: #999999;
    text-decoration: line-through;
}

.TodoItem .remove {
    color: red;
    margin-left: 4px;
    cursor: pointer;
}
```

<br />

> src/components/TodoList.tsx
> 이 컴포넌트는 `todos`라는 배열을 사용하여 여러개의 TodoItems 컴포넌트를 렌더링해주는 작업을 해줍니다. 아직은 이 배열에 대한 상태가 존재하지 않으므로 이 배열을 임시적으로 TodoList 컴포넌트 내부에서 선언하도록 하겠습니다.

```
import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const todos = [
        {
            id: 1,
            text: 'Context API 배우기',
            done: true,
        },
        {
            id: 2,
            text: 'TypeScript 배우기',
            done: true,
        },
        {
            id: 1,
            text: 'TypeScript와 Context API 함께 사용하기',
            done: false,
        },
    ];

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;
```

<br />

```
$ npm start
```

을 실행하면 결과를 확인할 수 있습니다...!

<br />
<br />
<br />

## Context 준비하기

<br />

이제 본격적으로 Context API를 사용해봅시다. src 디렉터리에 contexts 디렉터리를 만들고, 그 안에 `TodosContext.tsx` 파일을 생성합니다.
우리는 TodoContext.tsx 파일 안에 두 개의 Context를 만들어보도록 하겠습니다. 하나는 상태 전용 Context이고, 또 다른 하나는 디스패치 전용 Context입니다. 이렇게 두 개의 Context를 만들면 낭비 렌더링을 방지 할 수 있습니다.
만약 상태와 디스패치 함수를 한 Context에 넣게 된다면, TodoForm 컴포넌트처럼 상태는 필요하지 않고 디스패치 함수만 필요한 컴포넌트도 상태가 업데이트 될 때 리렌더링하게 됩니다. 두 개의 Context를 만들어서 관리한다면 이를 방지할 수 있습니다.

<br />

### 상태전용 Context 만들기

먼저 상태전용 Context를 선언해보겠습니다.

<br />

> src/contexts/TodoContext.tsx

```
import { createContext } from 'react';

// 나중에 다른 컴포넌트에서 타입을 불러와서 쓸 수 있도록 내보내겠습니다.
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);
```

<br />

Context를 만들땐 위 코드와 같이 `createContext` 함수의 Generics를 사용하여 Context에서 관리할 값의 상태를 설정해줄 수 있는데요. 우리가 추후 Provider를 사용하지 않았을 때에는 Context의 값이 `undefined`가 되어야 하므로, `<TodoState | undefined>`와 같이 Context의 값이 `TodosState`일 수도 있고 `undefined`일 수도 있다고 선언을 해주세요.

<br />
<br />

### 액션을 위한 타입 선언하기

<br />

액션들을 위한 타입스크립트 타입들을 선언합니다. 우리는 총 3가지의 액션들을 만들겠습니다.

-   `CREATE`: 새로운 항목 생성
-   `TOGGLE`: done 값 반전
-   `REMOVE`: 항목 제거

<br />

> src/contexts/TodosContext.tsx

```
...

const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action =
    | { type: 'CREATE'; text: string }
    | { type: 'TOGGLE'; text: number }
    | { type: 'REMOVE'; text: number };
```

<br />

이렇게 액션들의 타입을 선언해주고 나면, 우리가 디스패치를 위한 Context를 만들 때 디스패치 함수의 타입을 설정 할 수 있게 됩니다.

<br />

> src/contexts/TodoContext.tsx

```
...

type Action =
    | { type: 'CREATE'; text: string }
    | { type: 'TOGGLE'; text: number }
    | { type: 'REMOVE'; text: number };

type TodosDispatch = Dispatch<Action>;

const TodosDispatchContext = createContext<TodosDispatch | undefined>(
    undefined
);
```

<br />

이렇게 `Dispatch`를 리액트 패키지에서 불러와서 Generic으로 액션들의 타입을 넣어주면 추후 컴포넌트에서 액션을 디스패치 할 때 액션들에 대한 타입을 검사 할 수 있습니다. 예를 들어서, 액션에 추가적으로 필요한 값(예: `text`, `id`)이 빠지면 오류가 발생합니다.

<br />
<br />

### 리듀서 작성하기

<br />

이제 할 일 관리를 위한 리듀서를 만들어봅시다!

<br />

> src/contexts/TodosContext.tsx

```
...

function todosReducer(state: TodosState, action: Action): TodosState {
    switch (action.type) {
        case 'CREATE':
            const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: action.text,
                done: false,
            });
        case 'TOGGLE':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter((todo) => todo.id !== action.id);
        default:
            throw new Error('Unhandled action');
    }
}
```

<br />
<br />

### TodosProvider 만들기

<br />

이제 TodosStateContext와 TodosDispatchContext와 Provider를 함께 사용하는 `TodosProvider`라는 컴포넌트를 만들어보겠습니다.

<br />

```
import { Dispatch, createContext, useReducer } from 'react';

...

export function TodosContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id: 1,
            text: 'Context API 배우기',
            done: true,
        },
        {
            id: 2,
            text: 'TypeScript 배우기',
            done: true,
        },
        {
            id: 3,
            text: 'TypeScript와 Context API 함께 사용하기',
            done: false,
        },
    ]);

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodosStateContext.Provider value={todos}>
                {children}
            </TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    );
}
```

<br />

우리가 방금 만든 컴포넌트는 나중에 App에서 불러와서 기존 내용을 감싸주어야 하므로 export를 통해 내보내줘야 하며 {children}을 통해 이 컴포넌트로 감쌀 수 있게 해줘야합니다.

<br />
<br />

### 커스텀 Hooks 두 개 작성하기

<br />

우리가 추후 TodosStateContext와 TodosDispatchContext를 사용하게 될 때는 다음과 같이 `useContext`를 사용해서 Context 안의 값을 사용할 수 있습니다.

<br />

```
const todos = useContext(TodosStateContext);
```

<br />

그런데 이 때 `todos`의 타입은 `TodosState | undefined`일 수도 있습니다. 따라서, 해당 배열을 사용하기 전에 꼭 해당 값이 유효한지 확인해줘야 합니다.

<br />

```
const todos = useContext(TodosStateContext);
if (!todo) return null;
```

<br />

위와 같은 방법도 있지만 더 좋은 방법은 TodosContext 전용 Hooks를 작성해서 조금 더 편리하게 사용하는 것입니다. 다음과 같이 코드를 작성하면 추후 상태 또는 디스패치를 더욱 편하게 이용 할 수도 있고, 컴포넌트에서 사용할 때 유효성 검사도 생략할 수 있습니다.
커스텀 Hooks를 작성해봅시다.

<br />

> src/contexts/TodosContext.tsx
```
import { Dispatch, createContext, useContext, useReducer } from 'react';

...

export function useTodosState() {
    const state = useContext(TodosStateContext);
    if (!state) throw new Error('TodosProvider not found');
    return state;
}

export function useTodoDispatch() {
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}
```

<br />

이렇게 만약 함수 내부에서 필요한 값이 유효하지 않으면 에러를 `throw`하여 각 Hook이 반환하는 값의 타입은 언제나 유효하다는 것을 보장받을 수 있습니다.(만약 유효하지 않다면 브라우저 콘솔에 에러가 바로 나타납니다...!)

이제 Context 작성이 모두 끝났습니다. `useTodosState`와 `useTodosDispatch`는 다른 컴포넌트에서 불러와서 사용할 수 있도록 내보내줘야 합니다.

<br />
<br />
<br />

## 컴포넌트에서 Context 사용하기