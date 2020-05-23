import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar';
import Modal from 'components/templates/Modal';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Main = styled.main`
  width: calc(100% - 220px);
  padding-left: 220px;
`;

const StyleSidebar = styled(Sidebar)`
  width: 220px;
  height: 100%;
`;

const StyleModal = styled(Modal)``;

export const Styled = {
  Wrapper,
  StyleSidebar,
  Main,
  StyleModal,
};
