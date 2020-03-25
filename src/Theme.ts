import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  primaryColor: '#0783F4',
  dangerColor: '#C62626',
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
