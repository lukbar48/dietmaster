import Button from 'components/atoms/Button/Button';
import { ModalForm, ModalTop, Wrapper } from './TestsModal.styles';
import { useDispatch } from 'react-redux';
import { removePatient } from 'store/store';
import { IDeleteModal } from 'types/interfaces';
import { ButtonsWrapper } from './DeleteModal.styles';

const DeleteModal = ({ handleCloseModal, patientID }: IDeleteModal) => {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removePatient(id));
    handleCloseModal();
  };
  const handleRefuse = () => {
    handleCloseModal();
  };

  return (
    <Wrapper>
      <ModalTop>
        Danger!
        <Button backgroundColor="#505050" padding="6px 28px" fontSize="12px" onClick={handleCloseModal}>
          Close
        </Button>
      </ModalTop>
      <ModalForm>
        <h3>Do you want to remove selected patient?</h3>
        <ButtonsWrapper>
          <Button type="button" onClick={() => handleDelete(patientID)}>
            Yes
          </Button>
          <Button type="button" onClick={handleRefuse}>
            No
          </Button>
        </ButtonsWrapper>
      </ModalForm>
    </Wrapper>
  );
};

export default DeleteModal;
