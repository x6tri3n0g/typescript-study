import React from 'react';
import './styles.css';

type TodoListItemProps = {
    todo: Todo;
    toggleTodo: (selectedTodo: Todo) => void;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
    return (
        <li>
            <label className={todo.complete ? 'complete' : undefined}>
                <input type="checkbox" checked={todo.complete} />
                {todo.text}
            </label>
        </li>
    );
};
