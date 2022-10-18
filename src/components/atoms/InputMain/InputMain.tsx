import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import React from 'react';

export interface InputType {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

const Input = styled.input`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  background-color: ${({ theme }) => theme.colors.grey4};
  color: ${({ theme }) => theme.colors.white};
  width: 300px;
  padding-right: 50px;
`;
const InputWrapper = styled.div`
  position: relative;
`;
const BiSearchIcon = styled(BiSearch)`
  color: white;
  font-size: 44px;
  position: absolute;
  right: 0px;
  top: -2px;
  cursor: pointer;
  padding: 10px;
`;

const InputMain = ({ ...props }: InputType) => (
  <InputWrapper>
    <Input {...props} />
    <BiSearchIcon />
  </InputWrapper>
);

export default InputMain;
