import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { PatientContext } from 'contexts/context';
import { useParams } from 'react-router';

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
  const { patientsList, setPatientsList, patient, setPatient } = useContext(PatientContext);

  const handleClick = () => {
    if (id) {
      const filteredPatients = patientsList.filter((patient) => patient.id !== Number(id));
      console.log(patientsList);
      setPatientsList([...filteredPatients, patient]);
      setPatient({
        id: 0,
        name: '',
        surname: '',
        age: '',
        sex: 'Male',
        email: '',
        telephone: '',
        bodymass: '',
        height: '',
      });
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
