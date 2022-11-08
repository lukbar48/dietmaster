import Button from 'components/atoms/Button/Button';
import { ModalForm, ModalTop, Wrapper } from './TestsModal.styles';
import { useState } from 'react';
import { updatePatient } from 'redux/patientSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { RootState } from 'store';

const AppointmentsModal = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const patient = useAppSelector((state: RootState) => state.patient);
  const dispatch = useAppDispatch();
  const [appointmentRecord, setAppointmentRecord] = useState({
    date: '',
    bodymass: '',
    BMI: 'no data',
    hips: 'no data',
    waist: 'no data',
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setAppointmentRecord({
      ...appointmentRecord,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (appointmentRecord.date && appointmentRecord.bodymass && patient) {
      dispatch(
        updatePatient({
          appointments: [...patient.appointments, appointmentRecord],
        }),
      );
      handleCloseModal();
    } else {
      alert('Please provide required data: date, body mass.');
    }
  };

  return (
    <Wrapper>
      <ModalTop>
        Add new appointment records
        <Button backgroundColor="#505050" padding="6px 28px" fontSize="12px" onClick={handleCloseModal}>
          Close
        </Button>
      </ModalTop>
      <ModalForm onChange={handleChange} onSubmit={handleSubmit}>
        <label>
          Body mass (kg)
          <input type="text" name="bodymass" placeholder="81kg" />
        </label>
        <label>
          BMI
          <input type="text" name="BMI" placeholder="21.5" />
        </label>
        <label>
          Hips (cm)
          <input type="text" name="hips" placeholder="97cm" />
        </label>
        <label>
          Waist (cm)
          <input type="text" name="waist" placeholder="88cm" />
        </label>
        <label>
          Date
          <input type="text" name="date" placeholder="2021-01-01" />
        </label>
        <Button backgroundColor="#505050" padding="6px 28px" fontSize="12px" type="submit">
          Add test
        </Button>
      </ModalForm>
    </Wrapper>
  );
};

export default AppointmentsModal;
