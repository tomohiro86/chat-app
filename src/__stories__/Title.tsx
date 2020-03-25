import * as React from 'react';
import styled from 'styled-components';

const Title: React.SFC = ({ ...props }) => <Headline2 {...props} />;

const Headline2 = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default Title;
