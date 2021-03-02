import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme } from 'assets/styles/theme';
import Todo from 'pages/Todo';
import { GlobalStyle } from 'assets/styles/global-styles';

const App: React.FC = () => {
    const [colorMode, setColorMode] = useState('light');

    const mode = useCallback(() => {
        return colorMode === 'light' ? defaultTheme : darkTheme;
    }, [colorMode]);

    return (
        <ThemeProvider theme={mode()}>
            <GlobalStyle />
            <Todo />
        </ThemeProvider>
    );
};

export default App;
