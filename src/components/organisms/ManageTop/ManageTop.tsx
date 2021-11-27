import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import { initialPatient, PatientContext } from 'contexts/PatientContext';
// import { useParams } from 'react-router';
import { Wrapper } from './ManageTop.styles';
import { useDispatch } from 'react-redux';

const ManageTop = () => {
  const navigate = useNavigate();
  const { patient, setPatient } = useContext(PatientContext);
  const dispatch = useDispatch();
  // const patients = useSelector((state: any) => state.patients);

  // const handleSaveClick = () => {
  //   dispatch(showPatients('show'));
  //   dispatch(addPatient(patient));
  //   dispatch(addPatientState(patient));
  //   setPatient(initialPatient);
  //   navigate('/');
  // };

  const handleExitClick = () => {
    navigate('/');
    setPatient(initialPatient);
  };

  return (
    <Wrapper>
      <Button onClick={handleExitClick} backgroundColor="#505050" padding="6px 28px" fontSize="12px">
        Back
      </Button>
    </Wrapper>
  );
};

export default ManageTop;
