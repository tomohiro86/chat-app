import * as React from 'react';
import { Styled } from 'sc/atoms/Button';

interface Props {
  type: 'button' | 'submit' | 'reset';
  label: string | React.ReactNode;
  theme?: string | undefined;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return <Styled.Button {...rest}>{label}</Styled.Button>;
};

export default Button;
