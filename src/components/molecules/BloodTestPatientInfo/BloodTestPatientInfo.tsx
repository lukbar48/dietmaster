import { Wrapper } from './BloodTestPatientInfo.styles';
import Button from 'components/atoms/Button/Button';
import { updatePatient } from 'redux/patientSlice';
import { MdDeleteOutline } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { RootState } from 'store';

export interface BloodTestPatientInfoType {
  index: number;
  type: string;
  value: string;
  date: string;
}

const BloodTestPatientInfo = ({ index, type, value, date }: BloodTestPatientInfoType) => {
  const dispatch = useAppDispatch();
  const patient = useAppSelector((state: RootState) => state.patient);

  const deleteTest = (type: string) => {
    if (!patient) return;
    const tests = patient.tests.filter((item) => item.type !== type);
    dispatch(
      updatePatient({
        tests,
      }),
    );
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
