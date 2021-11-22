import React, { useContext } from 'react';
import Button from 'components/atoms/Button/Button';
import { PatientContext } from 'contexts/PatientContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './MainPatientInfo.styles';
import { removePatient, RootState, selectPatients } from 'store/store';
import { IPatientInfo } from 'interfaces';


const MainPatientInfo = ({ name, surname, age, id, index }: IPatientInfo) => {
  const { deletePatient, managePatient } = useContext(PatientContext);
  const navigate = useNavigate();

  const patients = useSelector((state: any) => state.patients);
  const dispatch = useDispatch();

  const handleManageClick = (id: number) => {
    managePatient(id);
    navigate(`/patient/about/${id}`);
  };
  const handleDeleteClick = (id: number) => {
    dispatch(removePatient(id))
    // deletePatient(id);
    // console.log(patients)
  };

  return (
    <Wrapper>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{surname}</div>
      <div>{age}</div>
      <div className="buttons">
        <Button onClick={() => handleManageClick(id)}>Manage</Button>
        <Button backgroundColor="#FF4343" onClick={() => handleDeleteClick(id)}>
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

export default MainPatientInfo;
