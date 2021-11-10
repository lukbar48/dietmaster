import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMain from 'components/atoms/InputMain/InputMain';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { PatientContext } from 'contexts/context';

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
  const { searchByInputValue, setPatient, patient } = useContext(PatientContext);
  const navigate = useNavigate();

  const handleClick = () => {
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
    });
    navigate(`/patient/about/${patient.id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    function capitalizeFirstLetter(term: string) {
      return term.charAt(0).toUpperCase() + term.slice(1);
    }
    searchByInputValue(capitalizeFirstLetter(e.currentTarget.value));
  };

  return (
    <Wrapper>
      <div>
        <h2>Patients record</h2>
      </div>
      <InputMain placeholder="Search patient" onChange={handleChange} />
      <Button onClick={handleClick}>New patient</Button>
      <Button backgroundColor="#505050" marginLeft="auto">
        Log Out
      </Button>
    </Wrapper>
  );
};

export default MainTopBar;
