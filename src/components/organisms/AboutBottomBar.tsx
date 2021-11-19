import AboutBottomBarBox from 'components/atoms/AboutBottomBarBox/AboutBottomBarBox';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { PatientContext } from 'contexts/PatientContext';
import { CalculationsWrapper, Calc, Wrapper } from './AboutBottomBar.styles';
import useCalculate from 'hooks/useCalculate';

const AboutBottomBar = () => {
  const { patient } = useContext(PatientContext);
  const { BMIdescription, calculateBMI, calculateRisk, idealWeight } = useCalculate(patient);

  return (
    <Wrapper>
      <div className="text">Body weight assessment</div>
      <CalculationsWrapper>
        <Calc>
          <p>BMI</p>
          <AboutBottomBarBox>{patient.bodymass && patient.height ? calculateBMI() : ''}</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p>Description</p>
          <AboutBottomBarBox>{patient.bodymass && patient.height ? BMIdescription() : ''}</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p>Risk of cardiovascular disease</p>
          <AboutBottomBarBox>{patient.bodymass && patient.height ? calculateRisk() : ''}</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p>Ideal body weight</p>
          <AboutBottomBarBox>{patient.bodymass && patient.height ? idealWeight() : ''}</AboutBottomBarBox>
        </Calc>
      </CalculationsWrapper>
    </Wrapper>
  );
};

export default AboutBottomBar;
