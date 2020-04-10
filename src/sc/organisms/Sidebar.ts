import styled from 'styled-components';
import { Mode } from 'Theme';
import UserInfo from 'components/molecules/UserInfo';

interface ModeIF {
  mode: string;
}

const modeStyle = (mode: string) => {
  switch (mode) {
    case Mode[0]:
      return `
        background-color: #3f0f40;
      `;
    case Mode[1]:
      return `
        background-color: #000000;
      `;
    default:
      break;
  }
};

const Wrapper = styled.div`
  ${(props: ModeIF) => modeStyle(props.mode)};
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  height: 64px;
`;

const StyleUserInfo = styled(UserInfo)`
  padding: 10px 20px;
  border-bottom: 1px solid rgb(82, 38, 83);
`;

export const Styled = {
  Wrapper,
  Header,
  StyleUserInfo,
};
