import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useState } from 'react';
import { Wrapper } from './AllergensForm.styles';
import { updatePatient } from 'redux/patientSlice';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const AllergensForm = () => {
  const patient = useAppSelector((state: RootState) => state.patient);
  const [item, setItem] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      dispatch(updatePatient({ allergens: [...patient.allergens, item] }));
      setItem('');
    } else alert('Please enter value!');
  };

  const deleteItem = (choosedItem: string) => {
    const filteredList = patient.allergens.filter((item) => item !== choosedItem);
    dispatch(updatePatient({ allergens: filteredList }));
  };

  return (
    <Wrapper>
      <h3>Allergens</h3>
      <AllergensInput color="#D90000" placeholder="" item={item} setItem={setItem} handleSubmit={handleSubmit} />

      {patient.allergens.length ? (
        <AllergensList color="#D90000" deleteItem={deleteItem} allergensList={patient.allergens} />
      ) : (
        <p>Patient doesn't have any allergies</p>
      )}
    </Wrapper>
  );
};

export default AllergensForm;
