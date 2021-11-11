import SexButton from 'components/molecules/SexButton';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PatientContext } from 'contexts/context';
import { useParams } from 'react-router';

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 10px;
  padding: 15px;
  width: 100%;
  height: calc(100vh - 165px);
  background-color: ${({ theme }) => theme.colors.grey1};

  div:nth-child(1) {
    grid-area: 1/1/2/3;
  }
  div:nth-child(2) {
    grid-area: 1/3/2/5;
  }
  div:nth-child(3) {
    grid-area: 1/5/2/6;
  }
  div:nth-child(4) {
    grid-area: 1/6/2/7;
  }
  div:nth-child(5) {
    grid-area: 2/1/3/2;
  }
  div:nth-child(6) {
    grid-area: 2/2/3/3;
  }
  div:nth-child(7) {
    grid-area: 2/3/3/5;
  }
  div:nth-child(8) {
    grid-area: 2/5/3/7;
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

const TextArea = styled.div`
  width: 100%;
  grid-area: 3/1/4/5;

  label {
    font-size: 0.8rem;
    padding: 5px 0;
  }
  textarea {
    width: 100%;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    height: 100px;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: 4/1/5/7;

  p {
    font-size: 0.8rem;
    padding: 5px 0;
  }
  input {
    width: 100%;
  }
  .minmax {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
  const notesValue = useRef<HTMLTextAreaElement>(null);
  const activityValue = useRef<HTMLInputElement>(null);

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
      if (notesValue.current) {
        notesValue.current.value = patient.notes;
      }
      if (activityValue.current) {
        activityValue.current.value = patient.activity;
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
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
      <Input>
        <label htmlFor="Age">Age</label>
        <input ref={ageValue} id="age" name="age" type="number" />
      </Input>
      <SexButton />
      <Input>
        <label htmlFor="Body mass (kg)">Body mass (kg)</label>
        <input ref={bodymassValue} id="bodymass" name="bodymass" type="number" />
      </Input>
      <Input>
        <label htmlFor="Height (cm)">Height (cm)</label>
        <input ref={heightValue} id="height" name="height" type="number" />
      </Input>
      <Input>
        <label htmlFor="Telephone">Telephone</label>
        <input ref={telephoneValue} id="telephone" name="telephone" type="tel" />
      </Input>
      <Input>
        <label htmlFor="E-mail">E-mail</label>
        <input ref={emailValue} id="email" name="email" type="email" />
      </Input>
      <TextArea>
        <label htmlFor="Notes">Notes</label>
        <textarea ref={notesValue} id="notes" name="notes" />
      </TextArea>
      <Slider>
        <p>Physical activity</p>
        <input ref={activityValue} id="activity" name="activity" type="range" min="1.2" max="2.4" step="0.1" />
        <div className="minmax">
          <p>1.2</p>
          <p>2.4</p>
        </div>
      </Slider>
    </Wrapper>
  );
};

export default AboutForm;
