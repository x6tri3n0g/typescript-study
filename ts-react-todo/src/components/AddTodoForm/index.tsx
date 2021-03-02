import React, { ChangeEvent, useState, FormEvent } from 'react';

interface AddTodoFormProps {
    addTodo: AddTodo;
    resetTodo: ResetTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({
    addTodo,
    resetTodo,
}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    };

    const handleReset = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        resetTodo();
    };

    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>
                Add Todo
            </button>
            <button type="submit" onClick={handleReset}>
                Reset Todo
            </button>
        </form>
    );
};
