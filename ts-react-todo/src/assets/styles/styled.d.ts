import 'styled-components';

declare module 'styled-components' {
    // 1. 인터페이스 지정
    // export interface 인터페이스명 {
    //     속성1: 타입지정;
    // }

    // 2. 타입속성 지정
    // export type // 타입 지정

    export interface DefaultTheme {
        dark: {
            mainBackground: string;
            title: string;
            primaryText: string;
            secondaryText: string;
            disable: string;
            border: string;
            divider: string;
            background: string;
            tableHeader: string;
        };
        light: {
            mainBackground: string;
            // neutral color
            title: string;
            primaryText: string;
            secondaryText: string;
            disable: string;
            border: string;
            divider: string;
            background: string;
            tableHeader: string;
            // point-color
            // point-color
        };
        // response: {};
    }
}
