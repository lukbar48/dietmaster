import BottomBar from 'components/organisms/MainBottomBar';
import PatientInfo from 'components/molecules/MainPatientInfo';
import TopBar from 'components/organisms/MainTopBar';
import React, { useContext } from 'react';
import styled from 'styled-components';
import data from '../data/data';
import { useGlobalContext } from 'contexts/context';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px;
  width: 100%;
  margin: 60px 0;
  list-style: none;
  color: ${({ theme }) => theme.colors.black};
`;

const Main = () => {
  // const patientsList = useContext(PatientContext);
//   const { patientsList } = useGlobalContext()
// console.log(patientsList)

  return (
    <>
      <TopBar />
      <BottomBar />
      <Wrapper>
        {data.map((patient, index) => {
          return <PatientInfo index={index} key={patient.id} {...patient} />;
        })}
      </Wrapper>
    </>
  );
};

export default Main;
