import styled from 'styled-components';
import { Mode } from 'Theme';
import Button from 'components/atoms/Button';

interface ModeIF {
  mode: string;
}

const modeStyle = (mode: string) => {
  switch (mode) {
    case Mode[0]:
      return `
        color: #ffffff;
        fill: #ffffff;
      `;
    case Mode[1]:
      return `
        color: #ffffff;
        fill: #ffffff;
      `;
    default:
      break;
  }
};

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 16px;
  font-size: 1.4rem;
  font-weight: 400;
`;

const Title = styled.h3`
  ${(props: ModeIF) => modeStyle(props.mode)};
`;

const PlusBtn = styled(Button)`
  position: relative;
  width: 24px;
  height: 24px;
  padding: 0 6px;
  background-color: inherit;
  border: none;
  border-radius: 4px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(50% - 6px);
    width: 12px;
    height: 1px;
    background-color: #ffffff;
  }
  &:after {
    transform: rotate(90deg);
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Styled = {
  Wrapper,
  Header,
  Title,
  PlusBtn,
};
