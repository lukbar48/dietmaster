import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr 2fr 2fr 3fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.blue3};
  color: white;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const AppointmentsFormTopBar = () => {
  return (
    <Wrapper>
      <div>No</div>
      <div>Date</div>
      <div>Body mass (kg)</div>
      <div>BMI</div>
      <div>Hips (cm)</div>
      <div>Waist (cm)</div>
      <div>Manage</div>
    </Wrapper>
  );
};

export default AppointmentsFormTopBar;
