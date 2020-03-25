import * as React from 'react';
import styled from 'styled-components';

const Separator: React.SFC = ({ ...props }) => <Se {...props} />;

const Se = styled.div`
  margin-bottom: 40px;
`;

export default Separator;
