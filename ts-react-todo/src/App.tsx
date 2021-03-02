import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Todo from 'pages/Todo';
import { GlobalStyle } from 'assets/styles/global-styles';

const App: React.FC = () => {
    const [colorMode, setColorMode] = useState(null);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Todo />
        </ThemeProvider>
    );
};

export default App;
