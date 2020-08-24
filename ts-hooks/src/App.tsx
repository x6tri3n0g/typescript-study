import './App.css';

// import Counter from './Components/Counter';
import MyForm from './Components/MyForm';
import React from 'react';

const App: React.FC = () => {
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };
    return <MyForm onSubmit={onSubmit} />;
};

export default App;
