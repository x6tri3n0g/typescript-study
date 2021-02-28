import React from 'react';
import { TodoListItem } from './components/TodoListItem';

type Todo = {
    text: string;
    complete: boolean;
};

const todos: Array<Todo> = [
    { text: 'Walk the dog', complete: true },
    { text: 'write App', complete: false },
];

const App: React.FC = () => {
    return <TodoListItem />;
};

export default App;
