import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const Theme = {
  primaryColor: '#0783F4',
  dangerColor: '#C62626',
};

export enum Mode {
  light = 0,
  dark = 1,
}

export type Theme = typeof Theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
