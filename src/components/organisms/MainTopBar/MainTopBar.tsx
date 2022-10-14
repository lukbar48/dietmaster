import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMain from 'components/atoms/InputMain/InputMain';
import Button from 'components/atoms/Button/Button';
import { useAuthContext } from 'contexts/AuthContext';
import { BiLogOut } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { Wrapper } from './MainTopBar.styles';
import { addNewPatient, filterPatientsList } from '../../../redux/patientsListSlice';
import { useAppDispatch } from 'redux/hooks';
import { SortTermType } from '../../../pages/Main';

const MainTopBar = ({ sortTerm }: { sortTerm: SortTermType }) => {
  const navigate = useNavigate();
  const { logOut } = useAuthContext();
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClickNewPatient = async () => {
    const patient = await dispatch(addNewPatient());
    navigate(`/patient/about/${patient.payload._id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(filterPatientsList({ searchTerm, sortTerm }));
  }, [sortTerm, searchTerm, dispatch]);

  const onSearchEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') dispatch(filterPatientsList({ searchTerm, sortTerm }));
  };

  return (
    <Wrapper>
      <div>
        <h2>Patients record</h2>
      </div>
      <InputMain placeholder="Search patient" value={searchTerm} onChange={handleChange} onKeyPress={onSearchEnterPress} />
      <Button onClick={handleClickNewPatient}>
        <IoMdAdd style={{ fontSize: '1.4rem', margin: '0px 3px 0px -5px' }} />
        New patient
      </Button>
      <Button onClick={logOut} backgroundColor="#505050" marginLeft="auto">
        <BiLogOut style={{ fontSize: '1.3rem', margin: '0px 5px 0px -5px' }} />
        Log Out
      </Button>
    </Wrapper>
  );
};

export default MainTopBar;
