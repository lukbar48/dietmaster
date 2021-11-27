import AllergensInput from 'components/molecules/AllergensInput/AllergensInput';
import AllergensList from 'components/molecules/AllergensList/AllergensList';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;

  h3 {
    text-align: center;
    margin: 5px 0;
  }

  p {
    text-align: center;
    margin: 10px 0;
    font-size: ${({ theme }) => theme.fontSizes.xm};
  }
`;

const DiseasesForm = () => {
  const [diseasesList, setDiseasesList] = useState<string[]>([]);
  const [item, setItem] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (item) {
      setDiseasesList([...diseasesList, item]);
      setItem('');
    } else if (!item) {
      alert('Please enter value!');
    }
  };

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
