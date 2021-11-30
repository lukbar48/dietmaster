import AppointmentsFormBottomBar from 'components/molecules/AppointmentsFormBottomBar/AppointmentsFormBottomBar';
import AppointmentsFormTopBar from 'components/molecules/AppointmentsFormTopBar/AppointmentsFormTopBar';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { PatientContext } from 'contexts/PatientContext';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BloodTestPatientInfo from 'components/molecules/BloodTestPatientInfo/BloodTestPatientInfo';
import AppointmentsPatientInfo from 'components/molecules/AppointmentsPatientInfo/AppointmentsPatientInfo';

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
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const getPatient = patientsList.filter((patient: any) => patient.id === Number(id));
      setPatient(getPatient[0]);
    }
  }, [])

  return (
    <Wrapper>
      <AppointmentsFormTopBar />
      <AppointmentsFormBottomBar />
      {patient.appointments && patient.appointments.map((patient, index) => {
        return (
          <AppointmentsPatientInfo index={index + 1} key={patient.bodymass} {...patient} />
        )
      })}
    </Wrapper>
  );
};

export default AppointmentsForm;
