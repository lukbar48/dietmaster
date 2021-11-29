import SexButton from 'components/molecules/SexButton/SexButton';
import React, { useContext, useEffect, useRef } from 'react';
import { PatientContext } from 'contexts/PatientContext';
import { useParams } from 'react-router';
import axios from 'axios';
import { Input, Slider, TextArea, Wrapper } from './AboutForm.styles';
import { addNewPatient } from 'store/store';
import { useDispatch } from 'react-redux';
import { useAddPatientMutation } from 'store/store';

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
      axios
        .get(`/dietmaster/patient/about/${id}`)
        .then(({ data }) => {
          data[0] && setPatient(data[0]);
        })
        .catch((err) => console.log(err));

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

  const dispatch = useDispatch();
  const [addPatient, rest] = useAddPatientMutation();

  useEffect(() => {
    console.log(rest)
    // addPatient(patient)
    dispatch(addNewPatient(patient));
  }, [patient]);

  useEffect(() => {
    console.log(rest)
  }, [rest]);
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
