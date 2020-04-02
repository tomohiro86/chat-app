import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <StyleSidebar />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyleSidebar = styled(Sidebar)`
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
`;

export default Home;
