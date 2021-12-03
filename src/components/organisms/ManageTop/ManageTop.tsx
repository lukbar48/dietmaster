import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import { PatientContext } from 'contexts/PatientContext';
import { Wrapper } from './ManageTop.styles';
import { initialPatientValues } from 'types/interfaces';
import { IoIosReturnLeft } from 'react-icons/io';

const ManageTop = () => {
  const navigate = useNavigate();
  const { setPatient, patient } = useContext(PatientContext);

  const handleExitClick = () => {
    if (patient.name && patient.surname && patient.bodymass && patient.height && patient.age) {
      navigate('/');
      setPatient(initialPatientValues);
    } else (alert('Please provide essential informations: name, surname, body mass, height, age'))
  };

  return (
    <Wrapper>
      <Button onClick={handleExitClick} backgroundColor="#505050" padding="6px 28px" fontSize="12px">
        <IoIosReturnLeft style={{ fontSize: '1.4rem', margin: '-5px 3px -5px -5px' }} />
        Save and return
      </Button>
    </Wrapper>
  );
};

export default ManageTop;
