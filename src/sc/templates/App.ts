import styled from 'styled-components';
import Auth from 'components/organisms/Auth';
import Sidebar from 'components/organisms/Sidebar';
import Modal from 'components/templates/Modal';

const Wrapper = styled.div``;

const StyleAuth = styled(Auth)``;

const StyleSidebar = styled(Sidebar)`
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
`;

const StyleModal = styled(Modal)``;

export const Styled = {
  Wrapper,
  StyleAuth,
  StyleSidebar,
  StyleModal,
};
