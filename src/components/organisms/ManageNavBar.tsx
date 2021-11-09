import ManageNavButton from 'components/atoms/ManageNavButton/ManageNavButton';
import React from 'react';
import styled from 'styled-components';
import { BsFillPersonFill, BsExclamationDiamond } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { BiTestTube } from "react-icons/bi";
import { AiTwotoneCalendar } from "react-icons/ai";

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
    <ManageNavButton to='/patient/about'><BsFillPersonFill />About</ManageNavButton>
    <ManageNavButton to='/patient/diet'><ImSpoonKnife />Diet</ManageNavButton>
    <ManageNavButton to='/patient/allergens'><BsExclamationDiamond />Allergens</ManageNavButton>
    <ManageNavButton to='/patient/blood-tests'><BiTestTube />Blood tests</ManageNavButton>
    <ManageNavButton to='/patient/appointments'><AiTwotoneCalendar />Appointments</ManageNavButton>
  </Wrapper>;
};

export default ManageNavBar;
