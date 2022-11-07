import MainBottomBar from 'components/organisms/MainBottomBar/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar/MainTopBar';
import { Wrapper } from './Main.styles';
import { PatientType } from 'types/types';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { filterPatientsList } from '../redux/patientsListSlice';

export type SortTermType = 'off' | 'desc' | 'asc' | 'male' | 'female';

const Main = () => {
  const [sortTerm, setSortTerm] = useState<SortTermType>('off');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const patientsList = useAppSelector((state: RootState) => state.patientsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterPatientsList({ searchTerm, sortTerm }));
  }, [dispatch, searchTerm, sortTerm]);

  return (
    <>
      <MainTopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Wrapper>
        {!!patientsList.length &&
          patientsList.map((patient: PatientType, index: number) => <MainPatientInfo index={index} key={patient?._id} {...patient} />)}
      </Wrapper>
      <MainBottomBar setSortTerm={setSortTerm} setPage={setPage} />
    </>
  );
};

export default Main;
