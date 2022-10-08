import SexButton from 'components/molecules/SexButton/SexButton';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { Input, Slider, TextArea, Wrapper } from './AboutForm.styles';
import { fetchPatient, updatePatient } from 'redux/singlePatientSlice';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const AboutForm = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const patient = useAppSelector((state: RootState) => state.patient);
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
    if (id) dispatch(fetchPatient(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (nameValue.current) {
      nameValue.current.value = patient?.name || '';
    }
    if (surnameValue.current) {
      surnameValue.current.value = patient?.surname || '';
    }
    if (ageValue.current) {
      ageValue.current.value = patient?.age || '';
    }
    if (telephoneValue.current) {
      telephoneValue.current.value = patient?.telephone || '';
    }
    if (emailValue.current) {
      emailValue.current.value = patient?.email || '';
    }
    if (bodymassValue.current) {
      bodymassValue.current.value = patient?.bodymass || '';
    }
    if (heightValue.current) {
      heightValue.current.value = patient?.height || '';
    }
    if (notesValue.current) {
      notesValue.current.value = patient?.notes || '';
    }
    if (activityValue.current) {
      activityValue.current.value = patient?.activity || '';
    }
  }, [
    dispatch,
    id,
    patient,
    patient?.activity,
    patient?.age,
    patient?.bodymass,
    patient?.email,
    patient?.height,
    patient?.name,
    patient?.notes,
    patient?.surname,
    patient?.telephone,
  ]);

  if (!patient) return null;

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log({
      [e.target.name]: e.target.value,
    });
    dispatch(
      updatePatient({
        _id: patient._id,
        [e.target.name]: e.target.value,
      }),
    );
  };

  return (
    <Wrapper onChange={handleChange}>
      <Input>
        <label htmlFor="name">Name</label>
        <input ref={nameValue} id="name" name="name" type="text" required />
      </Input>
      <Input>
        <label htmlFor="surname">Surname</label>
        <input ref={surnameValue} id="surname" name="surname" required type="text" />
      </Input>
      <Input>
        <label htmlFor="age">Age</label>
        <input ref={ageValue} id="age" name="age" type="number" required />
      </Input>
      <SexButton />
      <Input>
        <label htmlFor="bodymass">Body mass (kg)</label>
        <input ref={bodymassValue} id="bodymass" name="bodymass" type="number" required />
      </Input>
      <Input>
        <label htmlFor="height">Height (cm)</label>
        <input ref={heightValue} id="height" name="height" type="number" required />
      </Input>
      <Input>
        <label htmlFor="telephone">Telephone</label>
        <input ref={telephoneValue} id="telephone" name="telephone" type="tel" />
      </Input>
      <Input>
        <label htmlFor="email">E-mail</label>
        <input ref={emailValue} id="email" name="email" type="email" />
      </Input>
      <TextArea>
        <label htmlFor="notes">Notes</label>
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
