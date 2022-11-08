import Button from 'components/atoms/Button/Button';
import { ModalForm, ModalTop, Wrapper } from './TestsModal.styles';
import { useContext, useEffect, useState } from 'react';
import { PatientContext } from 'contexts/PatientContext';
import { updatePatient } from 'redux/patientSlice';
import { useAppDispatch } from 'redux/hooks';

const TestsModal = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const { patient, setPatient } = useContext(PatientContext);
  const dispatch = useAppDispatch();
  const [testRecord, setTestRecord] = useState({
    date: '',
    type: '',
    value: '',
  });

  useEffect(() => {
    if (patient) dispatch(updatePatient(patient));
  }, [dispatch, patient]);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setTestRecord({
      ...testRecord,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (testRecord.date && testRecord.value && testRecord.type && patient) {
      setPatient({
        ...patient,
        tests: [...patient.tests, testRecord],
      });
      handleCloseModal();
    } else {
      alert('Please provide all data');
    }
  };

  return (
    <Wrapper>
      <ModalTop>
        Add new test record
        <Button backgroundColor="#505050" padding="6px 28px" fontSize="12px" onClick={handleCloseModal}>
          Close
        </Button>
      </ModalTop>
      <ModalForm onChange={handleChange} onSubmit={handleSubmit}>
        <label>
          Type of test
          <input type="text" name="type" placeholder="Glucose" />
        </label>
        <label>
          Value
          <input type="text" name="value" placeholder="95mg" />
        </label>
        <label>
          Date
          <input type="text" name="date" placeholder="2021-01-01" />
        </label>
        <Button backgroundColor="#505050" padding="6px 28px" fontSize="12px" type="submit">
          Add
        </Button>
      </ModalForm>
    </Wrapper>
  );
};

export default TestsModal;
