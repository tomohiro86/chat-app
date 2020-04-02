import * as React from 'react';
import { Styled } from 'sc/atoms/Input';

interface Props {
  type?: string;
  id?: string;
  name: string;
  value: string;
  pattern?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>((props, ref) => (
  <Styled.InputBox type={props.type ? props.type : 'text'} ref={ref} {...props} />
));

export default Input;
