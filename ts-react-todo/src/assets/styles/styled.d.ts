import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        // dark: {
        //     mainBackground: string;
        //     title: string;
        //     primaryText: string;
        //     secondaryText: string;
        //     disable: string;
        //     border: string;
        //     divider: string;
        //     background: string;
        //     tableHeader: string;
        // };
        // light: {
        //     mainBackground: string;
        //     title: string;
        //     primaryText: string;
        //     secondaryText: string;
        //     disable: string;
        //     border: string;
        //     divider: string;
        //     background: string;
        //     tableHeader: string;
        // };
        // response: {};
        // color: {
        //     mainBackground: string;
        //     title: string;
        //     primaryText: string;
        //     secondaryText: string;
        //     disable: string;
        //     border: string;
        //     divider: string;
        //     background: string;
        //     tableHeader: string;
        // };

        color: {
            primary: string;
            page: string;
        };
    }
}
