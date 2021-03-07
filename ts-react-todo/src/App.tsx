import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/global-styles';
import { defaultTheme, darkTheme } from 'assets/styles/theme';
import Todo from 'pages/Todo';

const themes = {
    default: defaultTheme,
    dark: darkTheme,
};

type Theme = keyof typeof themes;

const keysOfThemes = Object.keys(themes) as Theme[];

const Text = styled.div`
    color: var(--color-primary-text);
`;

const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('default');

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <Text>Hello world!</Text>
            {keysOfThemes.map((theme) => (
                <button key={theme} onClick={() => setTheme(theme)}>
                    {theme}
                </button>
            ))}
            <Todo />
        </ThemeProvider>
    );
};

export default App;
