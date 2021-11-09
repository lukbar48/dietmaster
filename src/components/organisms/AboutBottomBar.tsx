import AboutBottomBarBox from 'components/atoms/AboutBottomBarBox/AboutBottomBarBox';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  width: 100%;
  height: 100px;
  padding: 20px 20px 20px 5px;
  background-color: ${({ theme }) => theme.colors.grey4};
  color: ${({ theme }) => theme.colors.white};

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const CalculationsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  gap: 10px;
`;
const Calc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.8rem;
  }
`;

const AboutBottomBar = () => {
  return (
    <Wrapper>
      <div className="text">Body weight assessment</div>
      <CalculationsWrapper>
        <Calc>
          <p>BMI</p>
          <AboutBottomBarBox>34.34</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p></p>
          <AboutBottomBarBox>1st degree of obesity</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p>Risk of cardiovascular disease</p>
          <AboutBottomBarBox>Low</AboutBottomBarBox>
        </Calc>
        <Calc>
          <p>Ideal body weight</p>
          <AboutBottomBarBox>60 - 70</AboutBottomBarBox>
        </Calc>
      </CalculationsWrapper>
    </Wrapper>
  );
};

export default AboutBottomBar;
