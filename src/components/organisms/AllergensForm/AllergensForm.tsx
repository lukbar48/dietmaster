import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './AllergensForm.styles';
import { useDispatch } from 'react-redux';
import { updatePatient } from 'redux/singlePatientSlice';
import { RootState } from 'store';
import { useAppSelector } from 'redux/hooks';

const AllergensForm = () => {
  const patient = useAppSelector((state: RootState) => state.patient);
  const [allergensList, setAllergensList] = useState<string[]>([]);
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      setAllergensList([...allergensList, item]);
      setItem('');
    } else {
      alert('Please enter value!');
    }
  };

  const deleteItem = (choosedItem: string) => {
    setAllergensList(allergensList.filter((item) => item !== choosedItem));
  };

  useEffect(() => {
    if (patient?.allergens) setAllergensList(patient.allergens);
    dispatch(updatePatient({ _id: patient._id, allergens: allergensList }));
  }, [allergensList, dispatch, patient._id, patient.allergens]);

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
