import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import { PatientContext } from 'contexts/PatientContext';
// import { useParams } from 'react-router';
import { InitialPatientValues } from '../../data/data';
import { Wrapper } from './ManageTop.styles';
import { addPatient, addPatientState } from 'store/store';
import { useDispatch, useSelector } from 'react-redux';


const ManageTop = () => {
  const navigate = useNavigate();
  const { patient, setPatient } = useContext(PatientContext);
  // const patients = useSelector((state: any) => state.patients);
  const dispatch = useDispatch();

  const handleSaveClick = () => {
    dispatch(addPatient(patient));
    dispatch(addPatientState(patient));
    setPatient(InitialPatientValues);
    navigate('/');
  };

  const handleExitClick = () => {
    navigate('/');
    setPatient(InitialPatientValues);
  };

  return (
    <Wrapper>
      <Button onClick={handleSaveClick} backgroundColor="#00A3D9" padding="6px 18px" fontSize="12px">
        Save changes
      </Button>
      <Button onClick={handleExitClick} backgroundColor="#505050" padding="6px 28px" fontSize="12px">
        Discard / Exit
      </Button>
    </Wrapper>
  );
};

export default ManageTop;
