import React, { useContext } from 'react';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { useGlobalContext } from 'contexts/context';

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
  // const { deletePatient } = useGlobalContext()
  // console.log(useGlobalContext())


  return (
    <Wrapper>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{surname}</div>
      <div>{age}</div>
      <div className="buttons">
        <Button>Manage</Button>
        <Button backgroundColor="#FF4343" onClick={() => console.log('1')}>
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

export default PatientInfo;
