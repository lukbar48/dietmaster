import MainBottomBar from 'components/organisms/MainBottomBar/MainBottomBar';
import MainPatientInfo from 'components/molecules/MainPatientInfo/MainPatientInfo';
import MainTopBar from 'components/organisms/MainTopBar/MainTopBar';
import { Wrapper } from './Main.styles';
import { PatientType } from 'types/types';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect, useState, useRef } from 'react';
import { updatePatientsList } from 'redux/patientsListSlice';
import { filterPatientsList } from '../redux/patientsListSlice';
import { restClient } from '../helpers/axiosInit';

export type SortTermType = 'off' | 'desc' | 'asc' | 'male' | 'female';

const Main = () => {
  const [sortTerm, setSortTerm] = useState<SortTermType>('off');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagesCount, setPagesCount] = useState(1);
  const patientsList = useAppSelector((state: RootState) => state.patientsList);
  const patient = useAppSelector((state: RootState) => state.patient);
  const dispatch = useAppDispatch();
  const wasFirstRender = useRef(false);

  useEffect(() => {
    if (!!patient._id) dispatch(updatePatientsList(patient));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (wasFirstRender.current) dispatch(filterPatientsList({ searchTerm, sortTerm, page: page.toString() }));
    wasFirstRender.current = true;

    const getPagesCount = async () => {
      const response = await restClient.get<{ pagesCount: number }>('/patients');
      const { pagesCount } = response.data;
      setPagesCount(pagesCount);
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
