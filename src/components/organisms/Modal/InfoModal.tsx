import Button from 'components/atoms/Button/Button';
import { ModalForm, ModalTop, Wrapper } from './TestsModal.styles';
import { ButtonsWrapper } from './DeleteModal.styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePatient } from '../../../store';
import { IInfoModal } from 'types/interfaces';

const InfoModal = ({ handleCloseModal, patientID }: IInfoModal) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDiscard = (patientID: string) => {
    dispatch(removePatient(patientID));
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
