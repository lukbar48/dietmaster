import Button from 'components/atoms/Button/Button';
import { ModalForm, ModalTop, Wrapper } from './TestsModal.styles';
import { ButtonsWrapper } from './DeleteModal.styles';
import { useNavigate } from 'react-router-dom';
import { removePatient } from 'redux/patientsListSlice';
import { useAppDispatch } from 'redux/hooks';

interface InfoModalType {
  handleCloseModal: () => void;
  patientID: string;
}

const InfoModal = ({ handleCloseModal, patientID }: InfoModalType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDiscard = (id: string) => {
    dispatch(removePatient(id));
    navigate('/');
  };
  return (
    <Wrapper>
      <ModalTop>Message</ModalTop>
      <ModalForm>
        <h3>
          Please provide essential informations:
          <br /> name, surname, body mass, height, age.
        </h3>
        <ButtonsWrapper>
          <Button type="button" onClick={handleCloseModal} backgroundColor="#505050">
            Continue
          </Button>
          <Button type="button" onClick={() => handleDiscard(patientID)} backgroundColor="#FF4343">
            Discard patient
          </Button>
        </ButtonsWrapper>
      </ModalForm>
    </Wrapper>
  );
};

export default InfoModal;
