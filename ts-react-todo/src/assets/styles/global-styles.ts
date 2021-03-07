import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --color-main-background: ${(props) => props.theme.color.title}
        --color-main-background: ${(props) => props.theme.color.primaryText}
        --color-main-background: ${(props) => props.theme.color.secondaryText}
        --color-main-background: ${(props) => props.theme.color.defaultText}
        --color-main-background: ${(props) => props.theme.color.disable}
        --color-main-background: ${(props) => props.theme.color.border}
        --color-main-background: ${(props) => props.theme.color.divider}
        --color-main-background: ${(props) => props.theme.color.mainBackground}
        --color-main-background: ${(props) => props.theme.color.background}
    }
    /* 그 밖에 글로벌 스타일 작성 */
`;
