import { Dispatch, createContext } from 'react';

// 나중에 다른 컴포넌트에서 타입을 불러와서 쓸 수 있도록 내보내겠습니다.
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action =
    | { type: 'CREATE'; text: string }
    | { type: 'TOGGLE'; id: number }
    | { type: 'REMOVE'; id: number };

type TodosDispatch = Dispatch<Action>;

const TodosDispatchContext = createContext<TodosDispatch | undefined>(
    undefined
);

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
