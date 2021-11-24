import React from 'react';
import styled from 'styled-components';
import AllergensForm from './AllergensForm';
import PreferencesForm from './PreferencesForm';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 15px;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;

const AllergensFormContainer = () => {
  return (
    <Wrapper>
      <AllergensForm />
      <PreferencesForm />
      <AllergensForm />
    </Wrapper>
  );
};

export default AllergensFormContainer;
