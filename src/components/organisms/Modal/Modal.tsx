import { ReactNode } from 'react';
import { Wrapper } from './Modal.styles';

interface IModal {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, handleCloseModal, children }: IModal) => {
  return (
    <Wrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
    </Wrapper>
  );
};

export default Modal;
