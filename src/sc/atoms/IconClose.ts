import styled from 'styled-components';

const IconClose = styled.span`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  :before,
  :after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 18px;
    height: 1px;
    background-color: #0b0b0b;
  }
  :before {
    transform: rotate(135deg);
  }
  :after {
    transform: rotate(45deg);
  }
`;

export const Styled = {
  IconClose,
};
