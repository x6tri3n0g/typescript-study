// types.d.ts (types decoration file)
// NOTE: types.d.ts를 사용하면 export를 하지 않아도 된다!

type Todo = {
    text: string;
    complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type RemoveTodo = (todo: string) => void;

type ResetTodo = () => void;
