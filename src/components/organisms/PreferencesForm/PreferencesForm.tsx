import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useContext, useEffect, useState } from 'react';
import { Wrapper } from '../AllergensForm/AllergensForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPatient } from '../../../store';
import { useParams } from 'react-router-dom';
import { PatientContext } from 'contexts/PatientContext';

const PreferencesForm = () => {
  const { id } = useParams();
  const [preferencesList, setPreferencesList] = useState<string[]>(['']);
  const [item, setItem] = useState('');
  const patientsList = useSelector((state: any) => state.patientsList);
  const dispatch = useDispatch();
  const { patient, setPatient } = useContext(PatientContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (item) {
      setPreferencesList([...preferencesList, item]);
      setItem('');
    } else if (!item) {
      alert('Please enter value!');
    }
  };

  const deleteItem = (choosedItem: string) => {
    console.log(choosedItem);
    setPreferencesList(preferencesList.filter((item) => item !== choosedItem));
  };

  useEffect(() => {
    const getList = patientsList.filter((item: typeof patient) => item._id === Number(id));
    setPreferencesList(getList[0].preferences);
  }, [id, patientsList]);

  useEffect(() => {
    setPatient({ ...patient, preferences: preferencesList });
    dispatch(addNewPatient({ ...patient, preferences: preferencesList }));
  }, [dispatch, patient, preferencesList, setPatient]);

  return (
    <Wrapper>
      <h3>Doesn't like</h3>
      <AllergensInput color="#F8DA00" placeholder="" item={item} setItem={setItem} handleSubmit={handleSubmit} />

      {preferencesList.length ? (
        <>
          <AllergensList color="#F8DA00" deleteItem={deleteItem} allergensList={preferencesList} />
        </>
      ) : (
        <p>Patient doesn't have any preferences</p>
      )}
    </Wrapper>
  );
};

export default PreferencesForm;
