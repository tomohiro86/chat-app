import * as React from 'react';
import 'normalize.css';
import GlobalStyle from 'GlobalStyle';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Base: React.SFC<Props> = (props) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper {...props}>{props.children}</Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export default Base;
