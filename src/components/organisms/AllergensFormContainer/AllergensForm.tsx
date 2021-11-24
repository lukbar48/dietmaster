
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
`;

const AllergensForm = () => {
  const [allergensList, setAllergensList] = useState<string[]>(['Almonds', 'Eggs', 'Fish']);
  const [item, setItem] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (item) {
      setAllergensList([...allergensList, item]);
      setItem('');
    } else if (!item) {
      alert('Please enter value!');
    }
  };

  return (
    <Wrapper>
      <h3>Allergens</h3>
      <AllergensInput placeholder="e.g. Eggs" handleSubmit={handleSubmit} />

      {allergensList.length ? (
        <>
          <AllergensList allergensList={allergensList} />
        </>
      ) : (
        <p>Patient doesn't have any allergies</p>
      )}
    </Wrapper>
  );
};

export default AllergensForm;
