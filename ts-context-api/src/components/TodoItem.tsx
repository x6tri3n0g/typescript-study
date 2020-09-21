import './TodoItem.css';

import { Todo, useTodosDispatch } from '../contexts/TodosContext';

import React from 'react';

type TodoItemProps = {
    todo: Todo; // TodoContext에서 선언했던 타입을 불러왔습니다.
};

function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useTodosDispatch();

    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id: todo.id,
        });
    };

    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id: todo.id,
        });
    };

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={onToggle}>
                {todo.text}
            </span>
            <span className="remove" onClick={onRemove}>
                (X)
            </span>
        </li>
    );
}

export default TodoItem;
