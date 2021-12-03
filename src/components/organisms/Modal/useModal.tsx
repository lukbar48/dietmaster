import { useState } from 'react';
 
const useModal = () => {
  const [isOpen, setModalState] = useState(false);

  const handleCloseModal = () => {
    setModalState(false);
  };
  const handleOpenModal = () => {
    setModalState(true);
  };

  return {
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
