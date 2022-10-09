import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './ManageTop.styles';
import { IoIosReturnLeft, IoMdSave } from 'react-icons/io';
import Modal from 'components/organisms/Modal/Modal';
import useModal from '../Modal/useModal';
import InfoModal from '../Modal/InfoModal';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { RootState } from 'store';
import { updatePatient } from 'redux/patientSlice';

const ManageTop = () => {
  const navigate = useNavigate();
  const patient = useAppSelector((state: RootState) => state.patient);
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  const { name, surname, bodymass, height, age, _id } = patient;

  if (!patient) return null;

  const handleExitClick = () => {
    dispatch(updatePatient(patient));
    // if (name && surname && bodymass && height && age) {
    // }
    navigate('/');
    // handleOpenModal();
  };

  const handleSaveClick = () => {
    dispatch(updatePatient(patient));
  };

  return (
    <Wrapper>
      <Button onClick={handleSaveClick} backgroundColor="#505050" padding="6px 28px" fontSize="12px">
        <IoMdSave style={{ fontSize: '1.15rem', margin: '-5px 7px -5px -5px' }} />
        Save
      </Button>
      <Button onClick={handleExitClick} backgroundColor="#505050" padding="6px 28px" fontSize="12px">
        <IoIosReturnLeft style={{ fontSize: '1.4rem', margin: '-5px 3px -5px -5px' }} />
        Save and return
      </Button>

      <Modal handleCloseModal={handleCloseModal} isOpen={isOpen}>
        <InfoModal handleCloseModal={handleCloseModal} patientID={_id} />
      </Modal>
    </Wrapper>
  );
};

export default ManageTop;
