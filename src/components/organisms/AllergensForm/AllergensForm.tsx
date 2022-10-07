import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useContext, useEffect, useState } from 'react';
import { Wrapper } from './AllergensForm.styles';
import { useDispatch } from 'react-redux';
import { PatientContext } from 'contexts/PatientContext';
import { updatePatient } from 'redux/singlePatientSlice';

const AllergensForm = () => {
  const { patient, setPatient } = useContext(PatientContext);
  const [allergensList, setAllergensList] = useState<string[]>([]);
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      setAllergensList([...allergensList, item]);
      setItem('');
    }
    if (!item) {
      alert('Please enter value!');
    }
  };

  const deleteItem = (choosedItem: string) => {
    setAllergensList(allergensList.filter((item) => item !== choosedItem));
  };

  useEffect(() => {
    if (patient?.allergens) setAllergensList(patient.allergens);
    if (patient) setPatient({ ...patient, allergens: allergensList });
    dispatch(updatePatient({ ...patient, allergens: allergensList }));
  }, [allergensList, dispatch, patient, setPatient]);

  return (
    <Wrapper>
      <h3>Allergens</h3>
      <AllergensInput color="#D90000" placeholder="" item={item} setItem={setItem} handleSubmit={handleSubmit} />

      {allergensList.length ? (
        <>
          <AllergensList color="#D90000" deleteItem={deleteItem} allergensList={allergensList} />
        </>
      ) : (
        <p>Patient doesn't have any allergies</p>
      )}
    </Wrapper>
  );
};

export default AllergensForm;
