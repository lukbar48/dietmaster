import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { PatientContext } from 'contexts/context';
import { useParams } from 'react-router';
import { InitialPatientValues } from '../../data/data';
import axios from 'axios';
import { db } from 'mocks/db';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  height: 35px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.blue3};
`;

const ManageTop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { patient, setPatient, addPatient, patientsList } = useContext(PatientContext);

  const handleClick = () => {
    const findPatient = db.patient.findFirst({
      where: {
        id: {
          equals: Number(id),
        },
      },
    });
    console.log(findPatient);
    console.log(db.patient.getAll())

    if (id && !findPatient) {
      axios
        .post(`dietmaster/`, patient)
        .then(({ data }) => {
          console.log(db.patient.getAll())
          addPatient(data);
        })
        .catch((err) => console.log(err));
    } else if (id && findPatient) {
      axios
        .put(`/dietmaster/patient/about/${id}`, findPatient)
        .then(({ data }) => {
          addPatient(data);
        })
        .catch((err) => console.log(err));
    }
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
