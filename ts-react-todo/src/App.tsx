import React from 'react';
import { TodoListItem } from './components/TodoListItem';

const todos: Array<Todo> = [
    { text: 'Walk the dog', complete: true },
    { text: 'write App', complete: false },
];

const App: React.FC = () => {
    return <TodoListItem todo={todos[0]} />;
};

export default App;
