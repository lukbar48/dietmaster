import AboutInput from 'components/atoms/AboutInput/AboutInput';
import SexButton from 'components/molecules/SexButton';
import React, { useState } from 'react';
import styled from 'styled-components';

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

const InitialValues = {
  id: 0,
  name: '',
  surname: '',
  age: 0,
  sex: 'Male',
  email: '',
  telephone: null,
  bodymass: 0,
  weight: 0,
};

const AboutForm = () => {
  const [patient, setPatient] = useState<typeof InitialValues>(InitialValues);
  console.log(patient);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    // e.preventDefault();
    setPatient({ ...patient, [e.target.name]: e.target.value });
    console.log(patient);
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
