import React from 'react';
import { TodoListItem } from './components/TodoListItem';
import { Todo } from './types';

const todos: Array<Todo> = [
    { text: 'Walk the dog', complete: true },
    { text: 'write App', complete: false },
];

const App: React.FC = () => {
    return <TodoListItem />;
};

export default App;
