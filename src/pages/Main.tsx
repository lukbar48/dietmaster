import MainBottomBar from 'components/organisms/MainBottomBar/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar/MainTopBar';
import { Wrapper } from './Main.styles';
import { InitialPatientType } from 'types/types';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect } from 'react';
import { updatePatientsList } from 'redux/patientsListSlice';

const Main = () => {
  const patientsList = useAppSelector((state: RootState) => state.patientsList);
  const patient = useAppSelector((state: RootState) => state.patient);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!patient._id) dispatch(updatePatientsList(patient));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainTopBar />
      <Wrapper>
        {patientsList.length > 0 &&
          patientsList.map((patient: InitialPatientType, index: number) => <MainPatientInfo index={index} key={patient._id} {...patient} />)}
      </Wrapper>
      <MainBottomBar />
    </>
  );
};

export default Main;
