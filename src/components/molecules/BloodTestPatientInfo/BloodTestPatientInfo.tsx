import { Wrapper } from './BloodTestPatientInfo.styles';
import Button from 'components/atoms/Button/Button';
import { useContext } from 'react';
import { addNewPatient } from 'store/store';
import { useDispatch } from 'react-redux';
import { PatientContext } from 'contexts/PatientContext';
import { MdDeleteOutline } from 'react-icons/md';
import { IBloodTestPatientInfo } from 'types/interfaces';

const BloodTestPatientInfo = ({ index, type, value, date }: IBloodTestPatientInfo) => {
  const { setPatient, patient } = useContext(PatientContext);
  const dispatch = useDispatch();

  const deleteTest = (type: string) => {
    const tests = patient.tests.filter((item) => item.type !== type);
    setPatient({ ...patient, tests });
    dispatch(addNewPatient({ ...patient, tests }));
  };

  return (
    <Wrapper>
      <div>{index}</div>
      <div>{date}</div>
      <div>{type}</div>
      <div>{value}</div>
      <div>
        <Button fontSize="1rem" backgroundColor="#C1C1C1" onClick={() => deleteTest(type)}>
          <MdDeleteOutline style={{ fontSize: '1.1rem', margin: '-5px 2px -5px -2px' }} />
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

export default BloodTestPatientInfo;
