import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
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

interface IInput {
  label: string;
  type: string;
  name: string;
}

interface IRef {
  nameValue?: any;
  surnameValue?: any;
  ageValue?: any;
  telephoneValue?: any;
  emailValue?: any;
  bodymassValue?: any;
  heightValue?: any;
}

type IInputRef = IInput & IRef;

const AboutInput = ({ label, type, name, nameValue, surnameValue, ageValue, telephoneValue, emailValue, bodymassValue, heightValue }: IInputRef) => {
  

  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input ref={nameValue} id={name} name={name} type={type} />
    </InputWrapper>
  );
};

export default AboutInput;
