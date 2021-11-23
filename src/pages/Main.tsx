import MainBottomBar from 'components/organisms/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar';
import React, { useContext } from 'react';
import { PatientContext } from 'contexts/PatientContext';
import { Wrapper } from './Main.styles';
import { useSelector } from 'react-redux';

const Main = () => {
  const { searchResults, searchTerm } = useContext(PatientContext);
  const patients = useSelector((state: any) => state.patients);

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
