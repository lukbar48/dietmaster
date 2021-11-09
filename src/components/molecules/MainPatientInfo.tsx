import React, { useContext } from 'react';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { PatientContext } from 'contexts/context';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 5% 20% 20% 10% 15% 30%;
  align-items: center;
  gap: 2px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.grey1};
  padding: 5px;
  color: ${({ theme }) => theme.colors.black};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1px;
  }
  .buttons {
    grid-column: 6/7;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    height: 100%;
  }
`;

interface IPatientInfo {
  name: string;
  surname: string;
  age: number;
  id: number;
  index: number;
}

const PatientInfo = ({ name, surname, age, id, index }: IPatientInfo) => {
  const { deletePatient, managePatient } = useContext(PatientContext);
  const navigate = useNavigate();

  const handleManageClick = (id: number) => {
    managePatient(id);
    navigate(`/patient/about/${id}`);
  };

  return (
    <Wrapper>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{surname}</div>
      <div>{age}</div>
      <div className="buttons">
        <Button onClick={() => handleManageClick(id)}>Manage</Button>
        <Button backgroundColor="#FF4343" onClick={() => deletePatient(id)}>
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

export default PatientInfo;
