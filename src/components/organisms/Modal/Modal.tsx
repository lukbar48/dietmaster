import { IModal } from 'types/interfaces';
import { Wrapper } from './Modal.styles';

const Modal = ({ isOpen, handleCloseModal, children }: IModal) => {
  return (
    <Wrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
    </Wrapper>
  );
};

export default Modal;
