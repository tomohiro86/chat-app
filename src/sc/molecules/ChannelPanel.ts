import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Mode } from 'Theme';
import IconSharp from 'components/svg/IconSharp';
import IconLock from 'components/svg/IconLock';
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

const Content = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

const ChannelLink = styled(Link)`
  padding: 0 16px;
`;

const StyleIconSharp = styled(IconSharp)`
  width: 8px;
  fill: #ffffff;
`;

const StyleIconLock = styled(IconLock)`
  width: 8px;
  fill: #ffffff;
`;

const ChannelLabel = styled.span`
  margin-left: 6px;
  color: #ffffff;
  font-size: 1.4rem;
`;

export const Styled = {
  Wrapper,
  Header,
  Title,
  PlusBtn,
  Content,
  List,
  ListItem,
  ChannelLink,
  StyleIconSharp,
  StyleIconLock,
  ChannelLabel,
};
