import { Wrapper } from './AppointmentsPatientInfo.styles';
import Button from 'components/atoms/Button/Button';
import { useContext } from 'react';
import { addNewPatient } from 'store/store';
import { useDispatch, useSelector } from 'react-redux';
import { PatientContext } from 'contexts/PatientContext';
import { MdDeleteOutline } from 'react-icons/md';
import { IAppointmentsPatientInfo } from 'types/interfaces';

const AppointmentsPatientInfo = ({ index, date, BMI, bodymass, hips, waist }: IAppointmentsPatientInfo) => {
  const { setPatient, patient } = useContext(PatientContext);
  const dispatch = useDispatch();

  const deleteAppointment = (bodymass: string) => {
    const appointments = patient.appointments.filter((item) => item.bodymass !== bodymass);
    setPatient({ ...patient, appointments });
    dispatch(addNewPatient({ ...patient, appointments }));
  };

  return (
    <Wrapper>
      <div>{index}</div>
      <div>{date}</div>
      <div>{bodymass}</div>
      <div>{BMI}</div>
      <div>{hips}</div>
      <div>{waist}</div>
      <div>
        <Button fontSize='1rem' backgroundColor="#C1C1C1" onClick={() => deleteAppointment(bodymass)}><MdDeleteOutline style={{ fontSize: '1.1rem', margin: '-5px 2px -5px -2px' }} />
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

export default AppointmentsPatientInfo;
