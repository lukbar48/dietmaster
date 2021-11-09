import ManageNavButton from 'components/atoms/ManageNavButton/ManageNavButton';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.red};
`;

const ManageNavBar = () => {
  return <Wrapper>
    <ManageNavButton to='/patient/about'>About</ManageNavButton>
    <ManageNavButton to='/patient/diet'>Diet</ManageNavButton>
    <ManageNavButton to='/patient/allergens'>Allergens</ManageNavButton>
    <ManageNavButton to='/patient/blood-tests'>Blood tests</ManageNavButton>
    <ManageNavButton to='/patient/appointments'>Appointments</ManageNavButton>
  </Wrapper>;
};

export default ManageNavBar;
