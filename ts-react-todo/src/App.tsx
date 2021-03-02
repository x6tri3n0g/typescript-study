import React from 'react';
import Todo from 'pages/Todo';
import { GlobalStyle } from 'assets/styles/global-styles';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Todo />
        </>
    );
};

export default App;
