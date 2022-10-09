import Button from 'components/atoms/Button/Button';
import { ModalForm, ModalTop, Wrapper } from './TestsModal.styles';
import { useDispatch } from 'react-redux';
import { IDeleteModal } from 'types/types';
import { ButtonsWrapper } from './DeleteModal.styles';
import { removePatient } from 'redux/patientsListSlice';

const DeleteModal = ({ handleCloseModal, patientID }: IDeleteModal) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removePatient(id));
    handleCloseModal();
  };
  const handleRefuse = () => {
    handleCloseModal();
  };

  return (
    <Wrapper>
      <ModalTop>
        Message
        <Button backgroundColor="#505050" padding="6px 28px" fontSize="12px" onClick={handleCloseModal}>
          Close
        </Button>
      </ModalTop>
      <ModalForm>
        <h3>Do you want to remove selected patient?</h3>
        <ButtonsWrapper>
          <Button backgroundColor="#FF4343" type="button" onClick={() => handleDelete(patientID)}>
            Yes
          </Button>
          <Button backgroundColor="#505050" type="button" onClick={handleRefuse}>
            No
          </Button>
        </ButtonsWrapper>
      </ModalForm>
    </Wrapper>
  );
};

export default DeleteModal;
