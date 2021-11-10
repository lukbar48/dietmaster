import React from 'react';
import ManageNavBar from 'components/organisms/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop';
import { Wrapper } from './About.styles';
import AboutBottomBar from 'components/organisms/AboutBottomBar';
import AboutForm from 'components/organisms/AboutForm';


const About = () => {
  return (
      <Wrapper>
        <ManageTop />
        <ManageNavBar />
        <AboutForm />
        <AboutBottomBar />
      </Wrapper>
  );
};

export default About;
