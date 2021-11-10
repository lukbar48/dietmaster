import AboutInput from 'components/atoms/AboutInput/AboutInput';
import SexButton from 'components/molecules/SexButton';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PatientContext } from 'contexts/context';
import { useParams } from 'react-router';

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 15px;
  width: 100%;
  height: calc(100vh - 165px);
  background-color: ${({ theme }) => theme.colors.grey1};

  .body {
    display: flex;
    gap: 10px;
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  label {
    font-size: 0.8rem;
    padding: 5px 0;
  }

  input {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 10px;
  }
`;

const AboutForm = () => {
  const { id } = useParams();
  const { patient, setPatient } = useContext(PatientContext);
  const nameValue = useRef<HTMLInputElement>(null);
  const surnameValue = useRef<HTMLInputElement>(null);
  const ageValue = useRef<HTMLInputElement>(null);
  const telephoneValue = useRef<HTMLInputElement>(null);
  const emailValue = useRef<HTMLInputElement>(null);
  const bodymassValue = useRef<HTMLInputElement>(null);
  const heightValue = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (id) {
      if (nameValue.current) {
        nameValue.current.value = patient.name;
      }
      if (surnameValue.current) {
        surnameValue.current.value = patient.surname;
      }
      if (ageValue.current) {
        ageValue.current.value = patient.age;
      }
      if (telephoneValue.current) {
        telephoneValue.current.value = patient.telephone;
      }
      if (emailValue.current) {
        emailValue.current.value = patient.email;
      }
      if (bodymassValue.current) {
        bodymassValue.current.value = patient.bodymass;
      }
      if (heightValue.current) {
        heightValue.current.value = patient.height;
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
    // console.log(patient);
  };

  return (
    <Wrapper onChange={handleChange}>
      <Input>
        <label htmlFor="Name">Name</label>
        <input ref={nameValue} id="name" name="name" type="text" />
      </Input>
      <Input>
        <label htmlFor="Surname">Surname</label>
        <input ref={surnameValue} id="surname" name="surname" type="text" />
      </Input>
      <SexButton />
      <Input>
        <label htmlFor="Age">Age</label>
        <input ref={ageValue} id="age" name="age" type="number" />
      </Input>
      <Input>
        <label htmlFor="Telephone">Telephone</label>
        <input ref={telephoneValue} id="telephone" name="telephone" type="tel" />
      </Input>
      <Input>
        <label htmlFor="E-mail">E-mail</label>
        <input ref={emailValue} id="email" name="email" type="email" />
      </Input>
      <Input>
        <label htmlFor="Body mass (kg)">Body mass (kg)</label>
        <input ref={bodymassValue} id="bodymass" name="bodymass" type="number" />
      </Input>
      <Input>
        <label htmlFor="Height (cm)">Height (cm)</label>
        <input ref={heightValue} id="height" name="height" type="number" />
      </Input>
    </Wrapper>
  );
};

export default AboutForm;
