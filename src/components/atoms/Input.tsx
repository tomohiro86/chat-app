import * as React from 'react';
import styled from 'styled-components';

interface Props {
  type: string;
  name: string;
  value: string;
  autoFocus?: boolean;
  autoComplete?: string;
  disabled?: boolean;
  placeholder?: string;
  pattern?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>((props, ref) => <StyleInput ref={ref} {...props} />);

const StyleInput = styled.input`
  color: #000000;
  font-size: 1.4rem;
  border: none;
  outline: none;
  box-sizing: border-box;
`;

export default Input;
