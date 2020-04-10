import * as React from 'react';
import styled from 'styled-components';

const IconSharp: React.FC = (props) => {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.06 13.96">
      <path d="M9.54 9.4H7.32l-.64 4.56H5.5l.62-4.56H3.38l-.68 4.56H1.52L2.2 9.4H0V8.22h2.38l.42-2.8H.56V4.24h2.4L3.6 0h1.2l-.64 4.24h2.72L7.5 0h1.18l-.62 4.24h2v1.18H7.9l-.4 2.8h2.04zM4 5.42l-.44 2.8h2.76l.4-2.8z" />
    </Svg>
  );
};

const Svg = styled.svg`
  fill: #000000;
`;

export default IconSharp;
