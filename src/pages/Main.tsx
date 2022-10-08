import MainBottomBar from 'components/organisms/MainBottomBar/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar/MainTopBar';
import { Wrapper } from './Main.styles';
import { InitialPatientType } from 'types/types';
import { RootState } from 'store';
import { useAppSelector } from '../redux/hooks';

const Main = () => {
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
        {patients.map((patient: InitialPatientType, index: number) => {
          return <MainPatientInfo index={index} key={patient._id} {...patient} />;
        })}
      </Wrapper>
    </>
  );
};

export default Main;
