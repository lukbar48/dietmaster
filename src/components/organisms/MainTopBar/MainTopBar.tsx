import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMain from 'components/atoms/InputMain/InputMain';
import Button from 'components/atoms/Button/Button';
import { PatientContext } from 'contexts/PatientContext';
import { useAuth } from 'hooks/useAuth';
import { BiLogOut } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { Wrapper } from './MainTopBar.styles';

const MainTopBar = () => {
  const { setPatient, patient, searchTerm, setSearchTerm } = useContext(PatientContext);
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleClickNewPatient = () => {
    setPatient({
      id: new Date().getTime(),
      name: '',
      surname: '',
      age: '',
      sex: 'Male',
      email: '',
      telephone: '',
      bodymass: '',
      height: '',
      notes: '',
      activity: '1.2',
      calories: '0',
      protein: '30',
      fat: '20',
      carbs: '50',
      allergens: [],
      preferences: [],
      diseases: [],
      tests: [],
      appointments: [],
    });
    navigate(`/patient/about/${patient.id}`);
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
