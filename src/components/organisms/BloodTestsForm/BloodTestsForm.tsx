import BloodTestsFormBottomBar from 'components/molecules/BloodTestsFormBottomBar/BloodTestsFormBottomBar';
import BloodTestsFormTopBar from 'components/molecules/BloodTestsFormTopBar/BloodTestsFormTopBar';
import BloodTestPatientInfo from 'components/molecules/BloodTestPatientInfo/BloodTestPatientInfo';
import styled from 'styled-components';
import { PatientContext } from 'contexts/PatientContext';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import TestsModal from '../Modal/TestsModal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;

const BloodTestsForm = () => {
  const { patient, setPatient } = useContext(PatientContext);
  const patientsList = useSelector((state: any) => state.patientsList);
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  return (
    <Wrapper>
      <BloodTestsFormTopBar />
      <BloodTestsFormBottomBar handleOpenModal={handleOpenModal} />
      {patient.tests &&
        patient.tests.map((patient, index) => {
          return <BloodTestPatientInfo index={index + 1} key={patient.type} {...patient} />;
        })}
      <Modal handleCloseModal={handleCloseModal} isOpen={isOpen}>
        <TestsModal handleCloseModal={handleCloseModal} />
      </Modal>

    </Wrapper>
  );
};

export default BloodTestsForm;
