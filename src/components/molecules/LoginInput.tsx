import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  margin: 10px 0;
  border-radius: 6px;
  border: none;
`;
const Label = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const LoginInput = () => {
  return (
    <Wrapper>
      <Label>
        Login
        <Input />
      </Label>
      <Label>
        Password
        <Input />
      </Label>
    </Wrapper>
  );
};

export default LoginInput;
