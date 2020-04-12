import * as React from 'react';
import { Styled } from 'sc/atoms/Main';

const Main: React.FC = (props) => {
  const { ...rest } = props;
  return <Styled.Main {...rest} />;
};

export default Main;
