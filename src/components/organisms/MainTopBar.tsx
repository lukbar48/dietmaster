import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMain from 'components/atoms/InputMain/InputMain';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { PatientContext } from 'contexts/PatientContext';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 60px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightBlack};

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 1rem;
  }
`;

const MainTopBar = () => {
  const { setPatient, patient, searchTerm, setSearchTerm } = useContext(PatientContext);
  const navigate = useNavigate();

  const { signOut } = useAuth();

  const handleClickNewPatient = () => {
    setPatient({
      id: new Date().getTime(),
      name: '',
      surname: '',
      age: '',
      sex: 'Male',
      email: '',
      telephone: '',
      bodymass: '',
      height: '',
      notes: '',
      activity: '1.2',
    });
    navigate(`/patient/about/${patient.id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  return (
    <Wrapper>
      <div>
        <h2>Patients record</h2>
      </div>
      <InputMain placeholder="Search patient" value={searchTerm} onChange={handleChange} />
      <Button onClick={handleClickNewPatient}>New patient</Button>
      <Button onClick={signOut} backgroundColor="#505050" marginLeft="auto">
        Log Out
      </Button>
    </Wrapper>
  );
};

export default MainTopBar;
