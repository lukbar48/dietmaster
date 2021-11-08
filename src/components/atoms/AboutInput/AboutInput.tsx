import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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

interface IAboutInput {
  label: string;
  type: string;
  name: string;
}

const AboutInput = ({label, type, name}:IAboutInput) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} />
    </Wrapper>
  );
};

export default AboutInput;
