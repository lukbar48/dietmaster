import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMain from 'components/atoms/InputMain/InputMain';
import Button from 'components/atoms/Button/Button';
import { useAuth } from 'contexts/AuthContext';
import { BiLogOut } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { Wrapper } from './MainTopBar.styles';
import { addNewPatient, filterPatientsList, fetchPatients } from '../../../redux/patientsListSlice';
import { useAppDispatch } from 'redux/hooks';
import { SortTermType } from '../../../pages/Main';

const MainTopBar = ({ sortTerm }: { sortTerm: SortTermType }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const dispatch = useAppDispatch();

  const handleClickNewPatient = async () => {
    const patient = await dispatch(addNewPatient());
    navigate(`/patient/about/${patient.payload._id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const sortPatients = () => dispatch(filterPatientsList({ searchTerm: searchTerm, sortTerm: sortTerm }));

  const handleOnSearchPress = () => {
    if (searchTerm.length > 0) return sortPatients();
    dispatch(fetchPatients());
  };

  useEffect(() => {
    sortPatients();
  }, [sortTerm]);

  const onSearchEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleOnSearchPress();
  };

  return (
    <Wrapper>
      <div>
        <h2>Patients record</h2>
      </div>
      <InputMain
        placeholder="Search patient"
        value={searchTerm}
        onChange={handleChange}
        handleOnSearchPress={handleOnSearchPress}
        onKeyPress={onSearchEnterPress}
      />
      <Button onClick={handleClickNewPatient}>
        <IoMdAdd style={{ fontSize: '1.4rem', margin: '0px 3px 0px -5px' }} />
        New patient
      </Button>
      <Button onClick={signOut} backgroundColor="#505050" marginLeft="auto">
        <BiLogOut style={{ fontSize: '1.3rem', margin: '0px 5px 0px -5px' }} />
        Log Out
      </Button>
    </Wrapper>
  );
};

export default MainTopBar;
