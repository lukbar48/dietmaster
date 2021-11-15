import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { PatientContext } from 'contexts/context';
import { useParams } from 'react-router';
import { InitialPatientValues } from '../../data/data';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  height: 35px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.blue3};
`;

const ManageTop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { patient, setPatient, deletePatient, addPatient } = useContext(PatientContext);

  const handleClick = () => {
    if (id) {
      deletePatient(Number(id))
      addPatient(patient)
      // const filteredPatients = patientsList.filter((patient) => patient.id !== Number(id));

      // setPatientsList(
      //   patientsList.map((patientList) => {
      //     if (patientList.id === Number(id)) {
      //       return {
      //         ...patientList,
      //         name: patient.name,
      //         surname: patient.surname,
      //         age: patient.age,
      //         sex: patient.sex,
      //         email: patient.email,
      //         telephone: patient.telephone,
      //         bodymass: patient.bodymass,
      //         height: patient.height,
      //         notes: patient.notes,
      //         activity: patient.activity,
      //       };
      //     }
      //     return patientList;
      //   }),
      // );
      // setPatientsList([patient, ...filteredPatients])
      setPatient(InitialPatientValues);
      navigate('/');
    }
  };

  const handleExitClick = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Button onClick={handleClick} backgroundColor="#00A3D9" padding="6px 18px" fontSize="12px">
        Save changes
      </Button>
      <Button onClick={handleExitClick} backgroundColor="#505050" padding="6px 28px" fontSize="12px">
        Discard / Exit
      </Button>
    </Wrapper>
  );
};

export default ManageTop;
