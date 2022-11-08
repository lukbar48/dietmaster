import BloodTestsFormBottomBar from 'components/molecules/BloodTestsFormBottomBar/BloodTestsFormBottomBar';
import BloodTestsFormTopBar from 'components/molecules/BloodTestsFormTopBar/BloodTestsFormTopBar';
import BloodTestPatientInfo from 'components/molecules/BloodTestPatientInfo/BloodTestPatientInfo';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import TestsModal from '../Modal/TestsModal';
import { useAppSelector } from 'redux/hooks';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;

const BloodTestsForm = () => {
  const patient = useAppSelector((state) => state.patient);
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  return (
    <Wrapper>
      <BloodTestsFormTopBar />
      <BloodTestsFormBottomBar handleOpenModal={handleOpenModal} />
      {patient?.tests.length > 0 && patient.tests.map((patient, index) => <BloodTestPatientInfo index={index + 1} key={patient.type} {...patient} />)}
      <Modal handleCloseModal={handleCloseModal} isOpen={isOpen}>
        <TestsModal handleCloseModal={handleCloseModal} />
      </Modal>
    </Wrapper>
  );
};

export default BloodTestsForm;
