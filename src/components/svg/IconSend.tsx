import * as React from 'react';
import styled from 'styled-components';

const IconSend: React.FC = (props) => {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.577 394.624">
      <path d="M14.698 393.45l362.64-184.912c3.781-1.93 6.243-6.343 6.243-11.229s-2.458-9.3-6.239-11.229L14.698 1.169C10.484-1.19 5.45.1 2.442 4.32a14.068 14.068 0 00-.609 14.864l104.16 178.125L1.833 375.448a14.066 14.066 0 00.609 14.864c3.008 4.218 8.039 5.498 12.256 3.138z" />
    </Svg>
  );
};

const Svg = styled.svg`
  fill: #ccc;
`;

export default IconSend;
