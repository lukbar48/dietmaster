import MainBottomBar from 'components/organisms/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar';
import React, { useContext, useEffect, useState } from 'react';
import { PatientContext } from 'contexts/PatientContext';
import { Wrapper } from './Main.styles';

const Main = () => {
  const { patientsList, searchResults, searchTerm } = useContext(PatientContext);

  return (
    <>
      <MainTopBar />
      <MainBottomBar />
      <Wrapper>
        {searchTerm &&
          searchResults.map((patient, index) => {
            return <MainPatientInfo index={index} key={patient.id} {...patient} />;
          })}
        {!searchTerm &&
          patientsList.map((patient, index) => {
            return <MainPatientInfo index={index} key={patient.id} {...patient} />;
          })}
      </Wrapper>
    </>
  );
};

export default Main;
