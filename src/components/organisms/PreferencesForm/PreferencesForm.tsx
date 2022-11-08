import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useState } from 'react';
import { Wrapper } from '../AllergensForm/AllergensForm.styles';
import { useDispatch } from 'react-redux';
import { updatePatient } from 'redux/patientSlice';
import { RootState } from 'store';
import { useAppSelector } from 'redux/hooks';

const PreferencesForm = () => {
  const patient = useAppSelector((state: RootState) => state.patient);
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      dispatch(updatePatient({ _id: patient._id, preferences: [...patient.preferences, item] }));
      setItem('');
    } else alert('Please enter value!');
  };

  const deleteItem = (choosedItem: string) => {
    const filteredList = patient.preferences.filter((item) => item !== choosedItem);
    dispatch(updatePatient({ _id: patient._id, preferences: filteredList }));
  };

  return (
    <Wrapper>
      <h3>Doesn't like</h3>
      <AllergensInput color="#F8DA00" placeholder="" item={item} setItem={setItem} handleSubmit={handleSubmit} />

      {patient.preferences.length ? (
        <>
          <AllergensList color="#F8DA00" deleteItem={deleteItem} allergensList={patient.preferences} />
        </>
      ) : (
        <p>Patient doesn't have any preferences</p>
      )}
    </Wrapper>
  );
};

export default PreferencesForm;
