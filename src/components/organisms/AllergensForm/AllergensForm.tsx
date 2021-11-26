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

const AllergensForm = () => {
  const [allergensList, setAllergensList] = useState<string[]>(['almonds', 'eggs', 'fish']);
  const [item, setItem] = useState('');

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
