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

const PreferencesForm = () => {
  const [preferencesList, setPreferencesList] = useState<string[]>(['rice', 'sausage', 'avocado']);
  const [item, setItem] = useState('');

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
