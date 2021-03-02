import React from 'react';
import { TodoListItem } from '../TodoListItem';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    removeTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleTodo,
    removeTodo,
}) => {
    return (
        <ul>
            {todos &&
                todos.map((todo, index) => {
                    return (
                        <TodoListItem
                            key={index}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                        />
                    );
                })}
        </ul>
    );
};
