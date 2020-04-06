import styled from 'styled-components';
import UserInfo from 'components/molecules/UserInfo';

const Wrapper = styled.div`
  background-color: #3f0f40;
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
