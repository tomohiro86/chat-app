import * as React from 'react';
import { Styled } from 'sc/atoms/Textarea';

interface Props {
  name: string;
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type Ref = HTMLTextAreaElement;

const TextArea = React.forwardRef<Ref, Props>((props, ref) => {
  const { name, value, placeholder, autoFocus, disabled, onChange, onKeyDown, onKeyUp, onBlur, ...rest } = props;

  return (
    <Styled.StyleTextArea
      {...rest}
      ref={ref}
      name={name}
      value={value}
      placeholder={placeholder}
      autoFocus={autoFocus}
      disabled={disabled}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
    />
  );
});

export default TextArea;
