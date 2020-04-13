import styled from 'styled-components';
import IconClose from 'components/atoms/IconClose';
import Button from 'components/atoms/Button';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 20px 20px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  color: #384047;
  font-size: 2rem;
  font-weight: bold;
`;

const CloseButton = styled(Button)`
  display: flex;
  align-items: center;
  width: 18px;
  padding: 0;
  background-color: inherit;
  border: none;
  border-radius: none;
`;

const StyleIconClose = styled(IconClose)`
  &:before,
  &:after {
    height: 2px;
    background-color: #5f6d7a;
  }
`;

export const Styled = {
  Header,
  Title,
  CloseButton,
  StyleIconClose,
};
