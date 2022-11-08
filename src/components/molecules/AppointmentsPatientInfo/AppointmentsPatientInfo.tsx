import { Wrapper } from './AppointmentsPatientInfo.styles';
import Button from 'components/atoms/Button/Button';
import { updatePatient } from 'redux/patientSlice';
import { MdDeleteOutline } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
export interface AppointmentsPatientInfoType {
  index: number;
  date: string;
  BMI: string;
  bodymass: string;
  hips: string;
  waist: string;
}

const AppointmentsPatientInfo = ({ index, date, BMI, bodymass, hips, waist }: AppointmentsPatientInfoType) => {
  const dispatch = useAppDispatch();
  const patient = useAppSelector((state) => state.patient);

  const deleteAppointment = (type: string) => {
    if (!patient) return;
    const appointments = patient.appointments.filter((item) => item.bodymass !== type);
    dispatch(
      updatePatient({
        appointments,
      }),
    );
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
        <Button fontSize="1rem" backgroundColor="#C1C1C1" onClick={() => deleteAppointment(bodymass)}>
          <MdDeleteOutline style={{ fontSize: '1.1rem', margin: '-5px 2px -5px -2px' }} />
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

export default AppointmentsPatientInfo;
