import * as React from 'react';
import { Styled } from 'sc/molecules/FieldInput';

interface Props {
  isOptional?: boolean;
  type: string;
  id?: string;
  name: string;
  value: string;
  label: string;
  autoComplete?: string;
  placeholder: string;
  errorMessage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

const FieldInput: React.FC<Props> = (props) => {
  const {
    isOptional,
    type,
    id,
    name,
    value,
    label,
    autoComplete,
    placeholder,
    errorMessage,
    onChange,
    onBlur,
    onKeyDown,
    ...rest
  } = props;
  return (
    <Styled.Field {...rest}>
      {label && (
        <Styled.FieldTxt>
          {label}
          {isOptional && <Styled.StyleOptionalLabel />}
        </Styled.FieldTxt>
      )}
      <Styled.StyleInput
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        isError={!!errorMessage}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {!!errorMessage && errorMessage && <Styled.StyleErrorMessage errorMessage={errorMessage} />}
    </Styled.Field>
  );
};

export default FieldInput;
