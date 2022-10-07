import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMain from 'components/atoms/InputMain/InputMain';
import Button from 'components/atoms/Button/Button';
import { PatientContext } from 'contexts/PatientContext';
import { useAuth } from 'hooks/useAuth';
import { BiLogOut } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { Wrapper } from './MainTopBar.styles';
import { InitialPatientType, initialPatientValues } from 'types/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { addNewPatient } from '../../../redux/patientsSlice';

const MainTopBar = () => {
  const { setPatient, searchTerm, setSearchTerm } = useContext(PatientContext);
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const handleClickNewPatient = () => {
    const patient = dispatch(addNewPatient(initialPatientValues));
    // if (!patient) return;
    console.log('xxx', patient.arg);
    setPatient(patient.arg);
    navigate(`/patient/about/${patient.arg._id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  return (
    <Wrapper>
      <div>
        <h2>Patients record</h2>
      </div>
      <InputMain placeholder="Search patient" value={searchTerm} onChange={handleChange} />
      <Button onClick={handleClickNewPatient}>
        <IoMdAdd style={{ fontSize: '1.4rem', margin: '0px 3px 0px -5px' }} />
        New patient
      </Button>
      <Button onClick={signOut} backgroundColor="#505050" marginLeft="auto">
        {' '}
        <BiLogOut style={{ fontSize: '1.3rem', margin: '0px 5px 0px -5px' }} />
        Log Out
      </Button>
    </Wrapper>
  );
};

export default MainTopBar;
