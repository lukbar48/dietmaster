import AboutInput from 'components/atoms/AboutInput/AboutInput';
import SexButton from 'components/molecules/SexButton';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PatientContext } from 'contexts/context';
import { useParams } from 'react-router';

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  gap: 10px;
  padding: 15px;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.grey1};

  .body {
    display: flex;
    gap: 10px;
  }
`;

const AboutForm = () => {
  const {id} = useParams();
  const { patient, setPatient } = useContext(PatientContext);
  console.log(id)

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
    console.log(patient)
  };

  return (
    <Wrapper onChange={handleChange}>
      <AboutInput name="name" label="Name" type="text" />
      <AboutInput name="surname" label="Surname" type="text" />
      <AboutInput name="age" label="Age" type="number" />
      <SexButton />
      <AboutInput name="telephone" label="Telephone" type="tel" />
      <AboutInput name="email" label="E-mail" type="email" />
      <AboutInput name="bodymass" label="Body mass (kg)" type="number" />
      <AboutInput name="height" label="Height (cm)" type="number" />
    </Wrapper>
  );
};

export default AboutForm;
