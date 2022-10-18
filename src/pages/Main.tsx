import MainBottomBar from 'components/organisms/MainBottomBar/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar/MainTopBar';
import { Wrapper } from './Main.styles';
import { PatientType } from 'types/types';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { updatePatientsList } from 'redux/patientsListSlice';
import { filterPatientsList } from '../redux/patientsListSlice';

export type SortTermType = 'off' | 'desc' | 'asc' | 'male' | 'female';

const Main = () => {
  const [sortTerm, setSortTerm] = useState<SortTermType>('off');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagesCount, setPagesCount] = useState(1);
  const patientsList = useAppSelector((state: RootState) => state.patientsList);
  const patient = useAppSelector((state: RootState) => state.patient);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!patient._id) dispatch(updatePatientsList(patient));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getPagesCount = async () => {
      const data = await dispatch(filterPatientsList({ searchTerm, sortTerm, page: page.toString() }));
      if (data.payload?.pagesCount) setPagesCount(data.payload.pagesCount);
    };
    getPagesCount();
  }, [dispatch, page, searchTerm, sortTerm]);

  return (
    <>
      <MainTopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Wrapper>
        {patientsList.length > 0 &&
          patientsList.map((patient: PatientType, index: number) => <MainPatientInfo index={index} key={patient?._id} {...patient} />)}
      </Wrapper>
      <MainBottomBar setSortTerm={setSortTerm} setPage={setPage} page={page} pagesCount={pagesCount} />
    </>
  );
};

export default Main;
