import ManageNavButton from 'components/atoms/ManageNavButton/ManageNavButton';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsFillPersonFill, BsExclamationDiamond } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { BiTestTube } from "react-icons/bi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { PatientContext } from 'contexts/PatientContext';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.red};
`;

const ManageNavBar = () => {
  const { patient } = useContext(PatientContext);

  return <Wrapper>
    <ManageNavButton to={`/patient/about/${patient.id}`}><BsFillPersonFill />About</ManageNavButton>
    <ManageNavButton to={`/patient/diet/${patient.id}`}><ImSpoonKnife />Diet</ManageNavButton>
    <ManageNavButton to={`/patient/allergens/${patient.id}`}><BsExclamationDiamond />Allergens</ManageNavButton>
    <ManageNavButton to={`/patient/blood-tests/${patient.id}`}><BiTestTube />Blood tests</ManageNavButton>
    <ManageNavButton to={`/patient/appointments/${patient.id}`}><AiTwotoneCalendar />Appointments</ManageNavButton>
  </Wrapper>;
};

export default ManageNavBar;
