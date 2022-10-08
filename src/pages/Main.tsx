import MainBottomBar from 'components/organisms/MainBottomBar/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar/MainTopBar';
import { useContext } from 'react';
import { PatientContext } from 'contexts/PatientContext';
import { Wrapper } from './Main.styles';
import { InitialPatientType } from 'types/types';
import { RootState } from 'store';
import { useAppSelector } from '../redux/hooks';

const Main = () => {
  const { searchTerm } = useContext(PatientContext);
  const patients = useAppSelector((state: RootState) => state.patientsList);

  return (
    <>
      <MainTopBar />
      <MainBottomBar />
      <Wrapper>
        {/* {searchTerm &&
          searchResults.map((patient: InitialPatientType, index: number) => {
            return <MainPatientInfo index={index} key={patient.id} {...patient} />;
          })} */}
        {!searchTerm &&
          patients.map((patient: InitialPatientType, index: number) => {
            return <MainPatientInfo index={index} key={patient._id} {...patient} />;
          })}
      </Wrapper>
    </>
  );
};

export default Main;
