import styled from 'styled-components';
import { Mode } from 'Theme';
import IconSignout from 'components/svg/IconSignout';

interface ModeIF {
  mode: string;
}

const modeStyle = (mode: string) => {
  switch (mode) {
    case Mode[0]:
      return `
        color: #000000;
        fill: #000000;
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

const Wrapper = styled.div`
  width: 100%;
`;

const UserName = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${(props: ModeIF) => modeStyle(props.mode)};
`;

const Signout = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  cursor: pointer;
`;

const StyleIconSignout = styled(IconSignout)`
  width: 14px;
  ${(props: ModeIF) => modeStyle(props.mode)};
`;

const SignoutLabel = styled.p`
  margin-left: 4px;
  font-size: 1.1rem;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${(props: ModeIF) => modeStyle(props.mode)};
`;

export const Styled = {
  Wrapper,
  UserName,
  Signout,
  SignoutLabel,
  StyleIconSignout,
};
