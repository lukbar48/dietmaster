import AppointmentsFormBottomBar from 'components/molecules/AppointmentsFormBottomBar/AppointmentsFormBottomBar';
import AppointmentsFormTopBar from 'components/molecules/AppointmentsFormTopBar/AppointmentsFormTopBar';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { PatientContext } from 'contexts/PatientContext';
import { useContext, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import AppointmentsPatientInfo from 'components/molecules/AppointmentsPatientInfo/AppointmentsPatientInfo';
import Modal from '../Modal/Modal';
import AppointmentsModal from '../Modal/AppointmentsModal';
import useModal from '../Modal/useModal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;
const AppointmentsForm = () => {
  const { id } = useParams();
  const { patient, setPatient } = useContext(PatientContext);
  const patientsList = useSelector((state: any) => state.patientsList);

  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  useEffect(() => {
    if (id) {
      const getPatient = patientsList.filter((patient: any) => patient.id === Number(id));
      setPatient(getPatient[0]);
    }
  }, []);

  return (
    <Wrapper>
      <AppointmentsFormTopBar />
      <AppointmentsFormBottomBar handleOpenModal={handleOpenModal} />
      {patient.appointments &&
        patient.appointments.map((patient, index) => {
          return <AppointmentsPatientInfo index={index + 1} key={patient.bodymass} {...patient} />;
        })}
      <Modal handleCloseModal={handleCloseModal} isOpen={isOpen}>
        <AppointmentsModal handleCloseModal={handleCloseModal} />
      </Modal>
    </Wrapper>
  );
};

export default AppointmentsForm;
