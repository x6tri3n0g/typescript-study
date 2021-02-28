import React from 'react';

type TodoListItemProps = {
    todo: Todo;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.complete} />
                {todo.text}
            </label>
        </li>
    );
};
