import MainBottomBar from 'components/organisms/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../data/data';
import { PatientContext } from 'contexts/PatientContext';

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
  const { patientsList, searchResults, searchTerm } = useContext(PatientContext);

  return (
    <>
      <MainTopBar />
      <MainBottomBar />
      <Wrapper>

        {searchTerm && searchResults.map((patient, index) => {
          return <MainPatientInfo index={index} key={patient.id} {...patient} />;
        })}
        {!searchTerm && patientsList.map((patient, index) => {
          return <MainPatientInfo index={index} key={patient.id} {...patient} />;
        })}
      </Wrapper>
    </>
  );
};

export default Main;
