import * as React from 'react';
import styled from 'styled-components';

const IconLock: React.FC = (props) => {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.618 13.886">
      <g>
        <path d="M9.926 5.769h-.258V3.86a3.86 3.86 0 10-7.719 0v1.909h-.261A1.692 1.692 0 00-.004 7.461v4.733a1.692 1.692 0 001.692 1.692h8.235a1.692 1.692 0 001.692-1.692V7.461a1.692 1.692 0 00-1.689-1.692zM3.621 3.86a2.188 2.188 0 114.377 0v1.909H3.621zm2.677 6.492l.267 1.728H5.053l.266-1.728a1.2 1.2 0 11.978 0z" />
      </g>
    </Svg>
  );
};

const Svg = styled.svg`
  fill: #000000;
`;

export default IconLock;
