import AllergensListButton from 'components/atoms/AllergensListButton/AllergensListButton';
import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    padding-left: 5px;
    padding-right: 40px;
    font-size: 1rem;
    line-height: 1rem;
    border: none;
    border-radius: 5px;
    background-color: white;
  }

  input::placeholder {
    padding-left: 5px;
    font-size: ${({ theme }) => theme.fontSizes.xm};
  }
  div {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface IAllergensInput {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  item: string;
  color?: string;
}

const AllergensInput = ({ placeholder, handleSubmit, setItem, item, color }: IAllergensInput) => {
  return (
    <Form onSubmit={handleSubmit}>
      <input value={item} onChange={(e) => setItem(e.target.value)} maxLength={20} type="text" placeholder={placeholder} />
      <div>
        <AllergensListButton color={color}>
          <MdAddCircle />
        </AllergensListButton>
      </div>
    </Form>
  );
};

export default AllergensInput;
