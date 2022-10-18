import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputMain from 'components/atoms/InputMain/InputMain';
import Button from 'components/atoms/Button/Button';
import { useAuthContext } from 'contexts/AuthContext';
import { BiLogOut } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { Wrapper } from './MainTopBar.styles';
import { addNewPatient } from '../../../redux/patientsListSlice';
import { useAppDispatch } from 'redux/hooks';

type MainTopBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
};

const MainTopBar = ({ setSearchTerm, searchTerm }: MainTopBarProps) => {
  const navigate = useNavigate();
  const { logOut } = useAuthContext();
  const dispatch = useAppDispatch();

  const handleClickNewPatient = async () => {
    const patient = await dispatch(addNewPatient());
    navigate(`/patient/about/${patient.payload._id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
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
      <Button onClick={logOut} backgroundColor="#505050" marginLeft="auto">
        <BiLogOut style={{ fontSize: '1.3rem', margin: '0px 5px 0px -5px' }} />
        Log Out
      </Button>
    </Wrapper>
  );
};

export default MainTopBar;
