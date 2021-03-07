import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --color-highlight-text: ${(props) => props.theme.color.heighlightText};
        --color-primary-text: ${(props) => props.theme.color.primaryText};
        --color-secondary-text: ${(props) => props.theme.color.secondaryText};
        --color-default-text: ${(props) => props.theme.color.defaultText};
        --color-disable: ${(props) => props.theme.color.disable};
        --color-border: ${(props) => props.theme.color.border};
        --color-divider: ${(props) => props.theme.color.divider};
        --color-main-background: ${(props) => props.theme.color.mainBackground};
        --color-background: ${(props) => props.theme.color.background};

        /* --font-size-default: ;
        --font-size-title: ;
        --font-size-subtitle: ; */
    }
    /* 그 밖에 글로벌 스타일 작성 */
`;
