import styled from 'styled-components';
import Auth from 'components/organisms/Auth';
import Sidebar from 'components/organisms/Sidebar';
import Modal from 'components/templates/Modal';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyleAuth = styled(Auth)``;

const StyleSidebar = styled(Sidebar)`
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
`;

const Main = styled.main`
  width: calc(100% - 220px);
  padding-left: 220px;
`;

const StyleModal = styled(Modal)``;

export const Styled = {
  Wrapper,
  StyleAuth,
  StyleSidebar,
  Main,
  StyleModal,
};
