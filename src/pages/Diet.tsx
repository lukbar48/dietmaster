import React from 'react';
import ManageNavBar from 'components/organisms/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop';
import { Wrapper } from './About.styles';
import DietForm from 'components/organisms/DietForm';

const Diet = () => {
  return (
    <Wrapper>
      <ManageTop />
      <ManageNavBar />
      <DietForm />
    </Wrapper>
  );
};

export default Diet;
