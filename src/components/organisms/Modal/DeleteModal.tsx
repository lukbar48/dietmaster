import Button from 'components/atoms/Button/Button';
import { ModalForm, ModalTop, Wrapper } from './TestsModal.styles';
import { ButtonsWrapper } from './DeleteModal.styles';
import { removePatient } from 'redux/patientsListSlice';
import { useAppDispatch } from 'redux/hooks';

export interface DeleteModalType {
  handleCloseModal: () => void;
  patientID: string;
}

const DeleteModal = ({ handleCloseModal, patientID }: DeleteModalType) => {
  const dispatch = useAppDispatch();

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
