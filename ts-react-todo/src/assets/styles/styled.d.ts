import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            title: string;
            primaryText: string;
            secondaryText: string;
            defaultText: string;
            disable: string;
            border: string;
            divider: string;
            mainBackground: string;
            background: string;
        };
    }
}
