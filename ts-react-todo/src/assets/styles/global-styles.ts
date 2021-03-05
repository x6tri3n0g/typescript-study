import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --color-primary: ${(props) => props.theme.color.primary};
        --color-page: ${(props) => props.theme.color.page};
    }
    /* 그 밖에 글로벌 스타일 작성 */
`;
