import styled from 'styled-components';

interface WrapperIF {
  isVisible: boolean;
}

interface OverlayIF {
  theme: string;
  modalNum: number;
}

const themeStyle = (theme: string) => {
  switch (theme) {
    case 'dark':
      return `
        background-color: #000000;
        opacity: 0.4;
      `;
    default:
      return `
        background-color: inherit;
        opacity: 1;
      `;
  }
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props: WrapperIF) => (props.isVisible ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;
  transition: opacity 0.2s ease-out;
  z-index: ${(props: WrapperIF) => (props.isVisible ? 10 : -1)};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: opacity;
  cursor: pointer;
  z-index: ${(props: OverlayIF) => `${props.modalNum}`};
  ${(props: OverlayIF) => themeStyle(props.theme)};
`;

export const Styled = {
  Wrapper,
  Overlay,
};
