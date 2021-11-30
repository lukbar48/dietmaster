import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 4.5fr 4.5fr 5fr;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.blue3};
  color: white;
  text-align: center;
  border: 1px solid white;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid white;
  }
`;

const AppointmentsFormTopBar = () => {
  return (
    <Wrapper>
      <div>No</div>
      <div>Date</div>
      <div>Body mass (kg)</div>
      <div>BMI</div>
      <div>Manage</div>
    </Wrapper>
  );
};

export default AppointmentsFormTopBar;
