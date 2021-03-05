import baseStyled, { ThemedStyledInterface } from 'styled-components';
import Light from './Light';
import Dark from './Dark';

export const defaultTheme = Light;
export const darkTheme = Dark;

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
