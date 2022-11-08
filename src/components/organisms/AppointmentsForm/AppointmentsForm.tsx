import AppointmentsFormBottomBar from 'components/molecules/AppointmentsFormBottomBar/AppointmentsFormBottomBar';
import AppointmentsFormTopBar from 'components/molecules/AppointmentsFormTopBar/AppointmentsFormTopBar';
import styled from 'styled-components';
import AppointmentsPatientInfo from 'components/molecules/AppointmentsPatientInfo/AppointmentsPatientInfo';
import Modal from '../Modal/Modal';
import AppointmentsModal from '../Modal/AppointmentsModal';
import useModal from '../Modal/useModal';
import { useAppSelector } from 'redux/hooks';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;
const AppointmentsForm = () => {
  const patient = useAppSelector((state) => state.patient);
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  return (
    <Wrapper>
      <AppointmentsFormTopBar />
      <AppointmentsFormBottomBar handleOpenModal={handleOpenModal} />
      {!!patient?.appointments.length &&
        patient.appointments.map((patient, index) => <AppointmentsPatientInfo index={index + 1} key={patient.bodymass} {...patient} />)}
      <Modal handleCloseModal={handleCloseModal} isOpen={isOpen}>
        <AppointmentsModal handleCloseModal={handleCloseModal} />
      </Modal>
    </Wrapper>
  );
};

export default AppointmentsForm;
