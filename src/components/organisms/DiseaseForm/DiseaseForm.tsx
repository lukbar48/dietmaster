import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useContext, useEffect, useState } from 'react';
import { Wrapper } from '../AllergensForm/AllergensForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { updatePatient } from '../../../store';
import { useParams } from 'react-router-dom';
import { PatientContext } from 'contexts/PatientContext';

const DiseasesForm = () => {
  const [diseasesList, setDiseasesList] = useState<string[]>([]);
  const [item, setItem] = useState('');
  const patientsList = useSelector((state: any) => state.patientsList);
  const dispatch = useDispatch();
  const { patient, setPatient } = useContext(PatientContext);
  const { id } = useParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (item) {
      setDiseasesList([...diseasesList, item]);
      setItem('');
    }
    if (!item) {
      alert('Please enter value!');
    }
  };
  useEffect(() => {
    const getList = patientsList.filter((item: typeof patient) => item._id === Number(id));
    if (getList.length) {
      setDiseasesList(getList[0].diseases);
    }
  }, [id, patientsList]);

  useEffect(() => {
    setPatient({ ...patient, diseases: diseasesList });
    dispatch(updatePatient({ ...patient, diseases: diseasesList }));
  }, [diseasesList, dispatch, patient, setPatient]);

  const deleteItem = (choosedItem: string) => {
    console.log(choosedItem);
    setDiseasesList(diseasesList.filter((item) => item !== choosedItem));
  };

  return (
    <Wrapper>
      <h3>Diseases</h3>
      <AllergensInput placeholder="" item={item} setItem={setItem} handleSubmit={handleSubmit} />

      {diseasesList.length ? (
        <>
          <AllergensList deleteItem={deleteItem} allergensList={diseasesList} />
        </>
      ) : (
        <p>Patient doesn't have any diseases</p>
      )}
    </Wrapper>
  );
};

export default DiseasesForm;
