import React from 'react';
import './styles.css';

type TodoListItemProps = {
    todo: Todo;
    toggleTodo: ToggleTodo;
    removeTodo: RemoveTodo;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleTodo,
    removeTodo,
}) => {
    return (
        <li>
            <label className={todo.complete ? 'complete' : undefined}>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)}
                />
                {todo.text}
                <button onClick={() => removeTodo(todo.text)}>삭제</button>
            </label>
        </li>
    );
};
