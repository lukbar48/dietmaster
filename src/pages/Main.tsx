import MainBottomBar from 'components/organisms/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar';
import React, { useContext, useEffect, useState } from 'react';
import { PatientContext } from 'contexts/PatientContext';
import { Wrapper } from './Main.styles';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const { patientsList, searchResults, searchTerm } = useContext(PatientContext);
  const patients = useSelector((state: any) => state.patients);
  const dispatch = useDispatch();

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
          patients.map((patient: any, index: any) => {
            return <MainPatientInfo index={index} key={patient.id} {...patient} />;
          })}
      </Wrapper>
    </>
  );
};

export default Main;
