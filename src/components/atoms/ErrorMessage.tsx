import * as React from 'react';
import { Styled } from 'sc/atoms/ErrorMessage';

interface Props {
  errorMessage: string;
}

const ErrorMessage: React.FC<Props> = (props) => {
  const { errorMessage, ...rest } = props;
  return <Styled.ErrorMessage {...rest}>{errorMessage}</Styled.ErrorMessage>;
};

export default ErrorMessage;
