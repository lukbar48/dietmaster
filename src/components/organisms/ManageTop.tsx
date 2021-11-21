import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import { PatientContext } from 'contexts/PatientContext';
import { useParams } from 'react-router';
import { InitialPatientValues } from '../../data/data';
import axios from 'axios';
import { db } from 'mocks/db';
import { Wrapper } from './ManageTop.styles';

const ManageTop = () => {
  const navigate = useNavigate();
  const { patient, setPatient, addPatient, patientsList } = useContext(PatientContext);

  const handleClick = () => {
    addPatient(patient)
    setPatient(InitialPatientValues);
    navigate('/');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Button onClick={handleClick} backgroundColor="#00A3D9" padding="6px 18px" fontSize="12px">
        Save changes
      </Button>
      <Button onClick={handleExitClick} backgroundColor="#505050" padding="6px 28px" fontSize="12px">
        Discard / Exit
      </Button>
    </Wrapper>
  );
};

export default ManageTop;
