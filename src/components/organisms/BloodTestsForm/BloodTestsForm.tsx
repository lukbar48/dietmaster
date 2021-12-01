import BloodTestsFormBottomBar from 'components/molecules/BloodTestsFormBottomBar/BloodTestsFormBottomBar';
import BloodTestsFormTopBar from 'components/molecules/BloodTestsFormTopBar/BloodTestsFormTopBar';
import BloodTestPatientInfo from 'components/molecules/BloodTestPatientInfo/BloodTestPatientInfo';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { PatientContext } from 'contexts/PatientContext';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;

const BloodTestsForm = () => {
  const { id } = useParams();
  const { patient, setPatient } = useContext(PatientContext);
  const patientsList = useSelector((state: any) => state.patientsList);

useEffect(() => {
  if (id) {
    const getPatient = patientsList.filter((patient: any) => patient.id === Number(id));
    setPatient(getPatient[0]);
  }
}, [])

  return (
    <Wrapper>
      <BloodTestsFormTopBar />
      <BloodTestsFormBottomBar />
      {patient.tests && patient.tests.map((patient, index) => {
        return (
          <BloodTestPatientInfo index={index + 1} key={patient.type} {...patient} />
        )
      })}
    </Wrapper>
  );
};

export default BloodTestsForm;
