import React, { useState, useEffect } from 'react';
import { TodoList } from 'components/TodoList';
import { AddTodoForm } from 'components/AddTodoForm';
import { TodoWrapper } from 'components/Atoms';

const initialTodos: Array<Todo> = [{ text: '', complete: true }];

const Todo = () => {
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        const getStoredTodos = async () => {
            const _local_Todos = localStorage.getItem('todos') || '';
            const parse_todos = await JSON.parse(_local_Todos || '[]');
            setTodos(parse_todos);
        };
        getStoredTodos();
    }, []);

    const toggleTodo: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const addTodo: AddTodo = (newTodo) => {
        const todosList = todos;
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, complete: false }]);
            todosList.push({ text: newTodo, complete: false });
        }
        localStorage.setItem('todos', JSON.stringify(todosList));
    };
    return (
        <TodoWrapper>
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </TodoWrapper>
    );
};

export default Todo;
