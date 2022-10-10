import { Wrapper } from './Modal.styles';
import { ReactNode } from 'react';

export interface ModalType {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, handleCloseModal, children }: ModalType) => {
  return (
    <Wrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
    </Wrapper>
  );
};

export default Modal;
