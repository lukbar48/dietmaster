import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useContext, useEffect, useState } from 'react';
import { Wrapper } from './AllergensForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPatient } from 'store/store';
import { useParams } from 'react-router-dom';
import { PatientContext } from 'contexts/PatientContext';

const AllergensForm = () => {
  const { id } = useParams();
  const [allergensList, setAllergensList] = useState<string[]>([]);
  const [item, setItem] = useState('');
  const patientsList = useSelector((state: any) => state.patientsList);
  const dispatch = useDispatch();
  const { patient, setPatient } = useContext(PatientContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (item) {
      setAllergensList([...allergensList, item]);
      setItem('');
    } else if (!item) {
      alert('Please enter value!');
    }
  };

  const deleteItem = (choosedItem: string) => {
    setAllergensList(allergensList.filter((item) => item !== choosedItem));
  };
  useEffect(() => {
    const getList = patientsList.filter((item: typeof patient) => item.id === Number(id));
    setAllergensList(getList[0].allergens);
  }, []);
  
  useEffect(() => {
    setPatient({ ...patient, allergens: allergensList })
    dispatch(addNewPatient({...patient, allergens: allergensList}))
  }, [allergensList]);

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
