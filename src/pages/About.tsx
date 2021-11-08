import React from 'react';
import ManageNavBar from 'components/organisms/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop';
import { Wrapper } from './About.styles';
import DietBottomBar from 'components/organisms/AboutBottomBar';
import AboutForm from 'components/organisms/AboutForm';


const About = () => {
  return (
      <Wrapper>
        <ManageTop />
        <ManageNavBar />
        <AboutForm />
        <DietBottomBar />
      </Wrapper>
  );
};

export default About;
