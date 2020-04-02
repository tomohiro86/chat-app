import styled from 'styled-components';
import IconSignout from 'components/svg/IconSignout';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  background-color: #3f0f40;
  border-bottom: 1px solid rgb(82, 38, 83);
`;

const UserName = styled.p`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Signout = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  cursor: pointer;
`;

const StyleIconSignout = styled(IconSignout)`
  width: 14px;
  fill: #ffffff;
`;

const SignoutLabel = styled.p`
  margin-left: 4px;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Styled = {
  Wrapper,
  UserName,
  Signout,
  SignoutLabel,
  StyleIconSignout,
};
