import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useState } from 'react';
import { Wrapper } from '../AllergensForm/AllergensForm.styles';
import { updatePatient } from 'redux/patientSlice';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const DiseasesForm = () => {
  const patient = useAppSelector((state: RootState) => state.patient);
  const [item, setItem] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      dispatch(updatePatient({ _id: patient._id, diseases: [...patient.diseases, item] }));
      setItem('');
    } else alert('Please enter value!');
  };

  const deleteItem = (choosedItem: string) => {
    const filteredList = patient.diseases.filter((item) => item !== choosedItem);
    dispatch(updatePatient({ _id: patient._id, diseases: filteredList }));
  };

  return (
    <Wrapper>
      <h3>Diseases</h3>
      <AllergensInput placeholder="" item={item} setItem={setItem} handleSubmit={handleSubmit} />

      {patient.diseases.length ? (
        <AllergensList deleteItem={deleteItem} allergensList={patient.diseases} />
      ) : (
        <p>Patient doesn't have any diseases</p>
      )}
    </Wrapper>
  );
};

export default DiseasesForm;
