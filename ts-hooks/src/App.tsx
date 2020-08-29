import './App.css';

import Counter from './Components/Counter';
import MyForm from './Components/MyForm';
import React from 'react';
import ReducerSample from './Components/ReducerSample';

const App: React.FC = () => {
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };
    return (
        <>
            <Counter />
            <MyForm onSubmit={onSubmit} />
            <ReducerSample />
        </>
    );
};

export default App;
