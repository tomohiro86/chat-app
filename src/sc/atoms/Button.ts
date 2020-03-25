import styled from 'styled-components';
import { theme } from 'Theme';

interface Props {
  theme?: string | undefined;
  disabled?: boolean;
}

const themeStyle = (kind: string | undefined) => {
  if (kind === 'primary') {
    return `
      color: #ffffff;
      font-weight: bold;
      background-color: ${theme.primaryColor};
      border: 1px solid #1674cb;
    `;
  }
  return `
    background-color: #f4f4f4;
    border: 1px solid #e8e8e8;
  `;
};

const Button = styled.button`
  display: inline-block;
  width: auto;
  padding: 12px 10px 10px;
  border-radius: 4px;
  text-align: center;
  font-weight: normal;
  transition: opacity 0.15s ease-out;
  opacity: ${(props: Props) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props: Props) => (props.disabled ? 'default' : 'pointer')};
  ${(props: Props) => themeStyle(props.theme)};
`;

export const Styled = {
  Button,
};
