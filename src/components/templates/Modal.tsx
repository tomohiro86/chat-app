import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'store';
import { hideModal } from 'module/modal/action';
import { Styled } from 'sc/templates/Modal';

const Modal: React.FC = (props) => {
  const dispatch = useDispatch();
  const overlayRef = React.useRef(null);
  const { ...rest } = props;

  const modals = useSelector((state: State) => state.modal.modals);

  React.useEffect(() => {
    if (document.documentElement) {
      if (modals.length > 0) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      }
    }
    return () => {
      if (document.documentElement) {
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      }
    };
  }, [modals.length]);

  const handleOutsideClick = () => {
    setTimeout(() => {
      dispatch(hideModal());
    }, 100);
    return false;
  };

  return (
    <Styled.Wrapper id="modal" isVisible={modals.length > 0} {...rest}>
      {modals.map((modal) => {
        return (
          <React.Fragment key={modal.id}>
            <Styled.Overlay ref={overlayRef} theme={modal.theme} modalNum={modal.id} onClick={handleOutsideClick} />
            {modal.element}
          </React.Fragment>
        );
      })}
    </Styled.Wrapper>
  );
};

export default Modal;
